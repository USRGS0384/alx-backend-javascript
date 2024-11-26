// full_server/utils.js
import fs from 'fs';
import path from 'path';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(filePath), 'utf8', (err, data) => {
      if (err) {
        reject('Cannot load the database');
        return;
      }

      try {
        const students = JSON.parse(data);
        const result = {};

        students.forEach((student) => {
          if (!result[student.field]) {
            result[student.field] = [];
          }
          result[student.field].push(student.firstname);
        });

        resolve(result);
      } catch (parseError) {
        reject('Cannot load the database');
      }
    });
  });
};

