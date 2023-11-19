const express = require('express')
const router = express.Router();
const regionsController = require('../controllers/regionsController')
router.get('/regions',regionsController.getAllRegions)
router.post('/new',regionsController.postNewRegion)
router.put('/update/:id',regionsController.updateRegion)
router.delete('/delete/:id',regionsController.deleteRegion)

module.exports = router