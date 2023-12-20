const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  mcqs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MCQ',
  }],
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
