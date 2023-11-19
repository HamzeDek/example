const express = require('express')
const router = express.Router();
const EmplooyeeController = require('../controllers/emplooyeeController')
router.get('/getAllEmplooyee',EmplooyeeController.getAllEmplooyee)
router.post('/new',EmplooyeeController.emplooyeePost)
router.put('/update/:id',EmplooyeeController.emplooyeeUpdate)
router.delete('/delete/:id',EmplooyeeController.EmplooyeeDelete)

module.exports = router;
