const express = require('express')
const router = express.Router();
const attendanceController = require('../controllers/attendanceController')
router.get('/getAllAttendance',attendanceController.getAllAttendance)
router.get('/find/:id',attendanceController.findAttendances)
router.post('/new',attendanceController.attendancePost)
router.put('/update/:id',attendanceController.AttendanceUpdate)
router.delete('/delete/:id',attendanceController.attendanceDelete)

module.exports = router;
