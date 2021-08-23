'use strict'

const firebase = require('../db');
const firestore = firebase.firestore();
const drivers = require('../tests/mock-data/data.json');

function getDriversInfo(vehichleType, area, deliveryInfo) {
    let drivers = [];
    for (var i = 0; i < deliveryInfo.length; i++) {
        if (deliveryInfo[i].vehichleType === vehichleType) {
            if(deliveryInfo[i].deliveryAreas[0].name === area)
            drivers.push(deliveryInfo[i]);
        }
    }
    return drivers.length > 0 ? drivers : "There are no drivers with the vehicle type " + vehichleType + " in the location " + area;
}

// Get Request: Search using vehicle type and delivery location
const getDrivers = async (req, res, next) => {
    try {
        res.json(getDriversInfo("scooter", "City Center", drivers));
    } catch (err) {
        res.status(400).send(err.message);
    }
}
// Post Request: Add driver to firestore database
const addDriver = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('drivers').doc().set(data);
        res.send('New driver added successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = {
    addDriver,
    getDrivers
}