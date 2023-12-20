const MCQ = require('../models/mcq');

const mcqController = {
  createMCQ: async (req, res) => {
    try {
      const { question, options, correctAnswer, examId } = req.body;
      const newMCQ = new MCQ({ question, options, correctAnswer, examId });
      const savedMCQ = await newMCQ.save();
      res.json(savedMCQ);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getMCQsByExam: async (req, res) => {
    try {
      const mcqs = await MCQ.find({ examId: req.params.examId });
      res.json(mcqs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updateMCQ: async (req, res) => {
    try {
      const { question, options, correctAnswer } = req.body;
      const updatedMCQ = await MCQ.findByIdAndUpdate(
        req.params.id,
        { question, options, correctAnswer },
        { new: true }
      );
      res.json(updatedMCQ);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deleteMCQ: async (req, res) => {
    try {
      const deletedMCQ = await MCQ.findByIdAndDelete(req.params.id);
      res.json({message: "Deleted Successfully!"});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = mcqController;
