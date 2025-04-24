const express = require('express');
const router = express.Router();
const healthController = require('../controllers/health.controller');
const auth = require('../middleware/auth');

router.post('/records', auth, healthController.createRecord);
router.get('/records', auth, healthController.getRecords);
router.get('/records/:id', auth, healthController.getRecord);
router.put('/records/:id', auth, healthController.updateRecord);
router.delete('/records/:id', auth, healthController.deleteRecord);

module.exports = router; 