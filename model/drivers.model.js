const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    vehicleType: {
        type: String,
        required: true
    },
    vehicleColor: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    deliveryArea: {
        type: String,
        required: true
    }
});

const DriverModel = mongoose.model("Driver", DriverSchema);

module.exports = DriverModel;