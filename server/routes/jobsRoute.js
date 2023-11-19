const express = require('express')
const router = express.Router();
const jobsController = require('../controllers/jobsController')
router.get('/jobs',jobsController.getAllJobs)
router.get('/find/:id',jobsController.findJob)
router.post('/new',jobsController.jobsPost)
router.put('/update/:id',jobsController.jobUpdate)
router.delete('/delete/:id',jobsController.jobDelete)

module.exports = router;
