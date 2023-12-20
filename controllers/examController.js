const Exam = require('../models/exam');

const examController = {
  createExam: async (req, res) => {
    try {
      const { title, duration, mcqs } = req.body;
      const newExam = new Exam({ title, duration, mcqs });
      const savedExam = await newExam.save();
      res.json(savedExam);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getExams: async (req, res) => {
    try {
      const exams = await Exam.find().populate('mcqs');
      res.json(exams);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateExam: async (req, res) => {
    try {
      const { title, duration, mcqs } = req.body;
      const updatedExam = await Exam.findByIdAndUpdate(
        req.params.id,
        { title, duration, mcqs },
        { new: true }
      );
      res.json(updatedExam);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteExam: async (req, res) => {
    try {
      const deletedExam = await Exam.findByIdAndDelete(req.params.id);
      res.json({message: "Deleted Successfully"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = examController;
