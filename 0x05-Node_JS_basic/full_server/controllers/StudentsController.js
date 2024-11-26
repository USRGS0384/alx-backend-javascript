import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2] || './database.csv'; // Default to './database.csv'

    try {
      const students = await readDatabase(filePath);

      res.status(200).send(
        `This is the list of our students\n` +
        Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'accent' }))
          .map(field => {
            return `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
          }).join('\n')
      );
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  // StudentsController.js

static async getAllStudents(req, res) {
  const filePath = process.argv[2] || './database.csv'; // Default to './database.csv'

  try {
    const students = await readDatabase(filePath);

    res.status(200).send(
      `This is the list of our students\n` +
      Object.keys(students).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'accent' }))
        .map(field => {
          return `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
        }).join('\n')
    );
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
}
