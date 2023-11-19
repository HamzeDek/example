const express = require('express')
const router = express.Router();
const jobHistoryController = require('../controllers/jobHistoryController')
router.get('/getAllJobHistory',jobHistoryController.getallJobHistory)
router.get('/filter/:id',jobHistoryController.filterJobHistory)
router.post('/new',jobHistoryController.postJobHistory)
router.delete('/delete/:id',jobHistoryController.deleteJobHistory)

module.exports = router;
