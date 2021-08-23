const DriversModel = require("../model/drivers.model");

exports.createDriver = (req, res, next) => {
    const createdModel = DriversModel.create(req.body);
    res.status(201).json(createdModel);
}

// Driver lookup: Search using vehicle type and delivery location
exports.getDriversInfo = (vehichleType, area, deliveryInfo) => {
    let drivers = [];
    for (var i = 0; i < deliveryInfo.length; i++) {
        if (deliveryInfo[i].vehichleType === vehichleType) {
            if(deliveryInfo[i].deliveryAreas[0].name === area)
            drivers.push(deliveryInfo[i]);
        }
    }
    return drivers.length > 0 ? drivers : "There are no drivers with the vehicle type " + vehichleType + " in the location " + area;
}

// Insert a new driver into the mock data
exports.addDriver = (isActive, vehicleType, vehicleColor, firstName, lastName, email, phone, deliveryArea) => {
  return {
    "id": 2,
    "isActive": isActive,
    "vehicleType": vehicleType,
    "VehiclColor": vehicleColor,
    "name": {
      "first": firstName,
      "last": lastName
    },
    "email": email,
    "phone": phone,
    "deliveryAreas": [
      {
        "name": deliveryArea
      }
    ]
  }
}