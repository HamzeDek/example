const express = require('express')
const router = express.Router();
const departmentController = require('../controllers/deparmentController')
router.get('/getAllDepartments',departmentController.getAllDepartments)
router.get('/find/:id',departmentController.findDepartment)
router.post('/new',departmentController.departmentPost)
router.put('/update/:id',departmentController.departmentUpdate)
router.delete('/delete/:id',departmentController.departmentDelete)

module.exports = router;
