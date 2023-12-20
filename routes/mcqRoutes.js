// routes/mcqRoutes.js
const express = require('express');
const mcqController = require('../controllers/mcqController');

const router = express.Router();

router.post('/mcqs', mcqController.createMCQ);
router.get('/mcqs/:examId', mcqController.getMCQsByExam);
router.put('/mcqs/:id', mcqController.updateMCQ);
router.delete('/mcqs/:id', mcqController.deleteMCQ);

module.exports = router;
    