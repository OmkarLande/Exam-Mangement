const express = require('express');
const examController = require('../controllers/examController');

const router = express.Router();

router.post('/exams', examController.createExam);
router.get('/exams', examController.getExams);
router.put('/exams/:id', examController.updateExam);
router.delete('/exams/:id', examController.deleteExam);

module.exports = router;
