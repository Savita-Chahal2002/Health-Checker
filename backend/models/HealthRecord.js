const mongoose = require('mongoose');

const healthRecordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: ['BMI', 'BLOOD_PRESSURE', 'SYMPTOMS', 'GENERAL']
  },
  data: {
    weight: Number,
    height: Number,
    bmi: Number,
    systolic: Number,
    diastolic: Number,
    symptoms: [String],
    bodyPart: String,
    notes: String
  },
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('HealthRecord', healthRecordSchema); 