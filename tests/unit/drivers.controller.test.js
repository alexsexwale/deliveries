const DriversController = require("../../controllers/drivers.controller");
const DriversModel = require("../../model/drivers.model");
const httpMocks = require("node-mocks-http");
const drivers = require("../mock-data/data.json");

DriversModel.create = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    next = null;
}); 

describe("DriversController", () => {
    beforeEach(() => {
      req.body = drivers;
    });

    it("should have a getDriversInfo function", () => {
        expect(typeof DriversController.getDriversInfo).toBe("function");
    });

    it("should call DriversModel.create", () => {
        DriversController.createDriver(req, res, next);
        expect(DriversModel.create).toBeCalledWith(drivers);
    })

    it("should return 201 response code for createDriver", () => {
        DriversController.createDriver(req, res, next);
        expect(res.statusCode).toBe(201);
        expect(res._isEndCalled()).toBeTruthy();
    }); 

    it("should return json body in response", () => {
        DriversModel.create.mockReturnValue(drivers);
        DriversController.createDriver(req, res, next);
        expect(res._getJSONData()).toStrictEqual(drivers);
      });
});