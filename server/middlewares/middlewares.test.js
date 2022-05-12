const { notFoundError, serverError } = require(".");

describe("Given the notFoundError", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 404", () => {
      const res = {
        status: jest.fn(),
        json: () => {},
      };
      const expectedStatus = 404;

      notFoundError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call its method json with {'msg': 'Not found'}", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const expectedMessage = { msg: "Not found" };

      notFoundError(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});

describe("Given the serverError", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 500", () => {
      const res = {
        status: jest.fn(),
        json: () => {},
      };
      const expectedStatus = 500;

      serverError(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call its method json with {'msg': 'Error del servidor'}", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const expectedMessage = { msg: "Error del servidor" };

      serverError(null, res);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
