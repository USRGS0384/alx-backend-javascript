// full_server/controllers/StudentsController.js
import { readDatabase } from '../utils.js';

export default class StudentsController {
  static getAllStudents(req, res) {
    const filePath = req.app.locals.dbPath;  // Assuming the path to database file is passed via app.locals
    readDatabase(filePath)
      .then((data) => {
        res.status(200).send(`This is the list of our students\n${Object.keys(data).sort().map(field => {
          return `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}`;
        }).join('\n')}`);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }

  static getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (!['CS', 'SWE'].includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const filePath = req.app.locals.dbPath;  // Assuming the path to database file is passed via app.locals
    readDatabase(filePath)
      .then((data) => {
        const studentsInMajor = [];
        for (const field in data) {
          if (field === major) {
            studentsInMajor.push(...data[field]);
          }
        }

        res.status(200).send(`List: ${studentsInMajor.join(', ')}`);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
}
