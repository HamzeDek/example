const express  = require('express');
const router = express.Router();
const userController =  require('../controllers/userController')
router.get('/all',userController.getAllUser)
router.get('/find/:id',userController.findByUserId)
router.post('/new',userController.registerUser)
router.post('/login',userController.login)
router.get('/find/:id',userController.getUser)
router.put('/role/:id',userController.updateRoleUser)
router.delete('/delete/:id',userController.deleteUser)

module.exports = router