const express = require('express');
const {addDriver, getDrivers } = require('../controllers/driverController');

const router = express.Router();

router.get('/scooters-info', getDrivers);

router.post('/driver', addDriver);

module.exports = {
    routes: router
}