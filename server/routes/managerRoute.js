const express = require('express')
const router = express.Router();
const managerController = require('../controllers/managerControllers')
router.get('/',managerController.getAllManagers)
router.post('/new',managerController.managerPost)
router.put('/update/:id',managerController.managerUpdate)
router.delete('/delete/:id',managerController.managerDelete)

module.exports = router;
