const HealthRecord = require('../models/HealthRecord');

exports.createRecord = async (req, res) => {
  try {
    const newRecord = new HealthRecord({
      userId: req.user.userId,
      ...req.body
    });

    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ message: 'Error creating health record' });
  }
};

exports.getRecords = async (req, res) => {
  try {
    const records = await HealthRecord.find({ userId: req.user.userId })
      .sort({ date: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching health records' });
  }
};

exports.getRecord = async (req, res) => {
  try {
    const record = await HealthRecord.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });
    
    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }
    
    res.json(record);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching health record' });
  }
};

exports.updateRecord = async (req, res) => {
  try {
    const record = await HealthRecord.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      req.body,
      { new: true }
    );

    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json(record);
  } catch (err) {
    res.status(500).json({ message: 'Error updating health record' });
  }
};

exports.deleteRecord = async (req, res) => {
  try {
    const record = await HealthRecord.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId
    });

    if (!record) {
      return res.status(404).json({ message: 'Record not found' });
    }

    res.json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting health record' });
  }
}; 