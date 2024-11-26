// full_server/routes/index.js
import express from 'express';
import AppController from '../controllers/AppController.js';
import StudentsController from '../controllers/StudentsController.js';

const router = express.Router();

// Home route (for Check 1)
router.get('/', AppController.getHomepage);

// Students route (for Check 1)
router.get('/students', StudentsController.getAllStudents);

// Students by major route (for Check 2)
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
