const express = require('express')
const router = express.Router();
const locationController = require('../controllers/locationController')
router.get('/getAllLocation',locationController.getAllLocation)
router.post('/new',locationController.locationPost)
router.put('/update/:id',locationController.locationUpdate)
router.delete('/delete/:id',locationController.locationDelete)

module.exports = router;
