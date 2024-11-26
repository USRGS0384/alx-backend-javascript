import fs from 'fs';
import path from 'path';

// Function to read the database CSV file asynchronously
export function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return reject(new Error('Cannot load the database'));
    }

    // Read the file asynchronously
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      try {
        // Process the file contents (assuming CSV format: firstname,field)
        const students = {};

        // Split the content by lines
        const lines = data.split('\n');
        lines.forEach((line) => {
          const [firstname, field] = line.split(',');

          if (firstname && field) {
            if (!students[field]) students[field] = [];
            students[field].push(firstname);
          }
        });

        resolve(students);
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

