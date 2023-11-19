const express = require('express')
const router = express.Router();
const CountriesController = require('../controllers/countriesController')
router.get('/getAllCountries',CountriesController.getAllCountries)
router.post('/new',CountriesController.CountryPost)
router.put('/update/:id',CountriesController.CountryUpdate)
router.delete('/delete/:id',CountriesController.countryDelete)

module.exports = router;
