const { getTuits, createTuit } = require("../controllers/tuitsControllers");
const Tuit = require("../../database/models/Tuit");

jest.mock("../../database/models/Tuit");

describe("Given getTuits controller", () => {
  describe("When receives a res object", () => {
    test("Then it should called the method find with the all tuits", async () => {
      const res = {
        json: jest.fn(),
      };
      const tuits = [
        {
          _id: "619543652fcce01db2355c0a",
          text: "Como mola no dormir, te hace ser mas productivo!",
          likes: 4,
          date: "2021-11-17T18:01:09.484Z",
          __v: 0,
        },
      ];

      Tuit.find = jest.fn().mockResolvedValue(tuits);

      await getTuits(null, res);

      expect(Tuit.find).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalledWith(tuits);
    });
  });

  describe("When receives a rejected error", () => {
    test("Then it should called next function with error, error.message 'No encontrado' and error.code 404", async () => {
      const res = {
        json: jest.fn(),
      };
      Tuit.find = jest.fn().mockRejectedValue(null);
      const next = jest.fn();
      const error = new Error("No encontrado");

      await getTuits(null, res, next);

      expect(next).toHaveBeenCalledWith(error);
      expect(next.mock.calls[0][0]).toHaveProperty("message", error.message);
      expect(next.mock.calls[0][0]).toHaveProperty("code", 404);
    });
  });
});

describe("Given a createTuit function", () => {
  describe("When it receives a tuit", () => {
    test("It should invoke a res with the method json", async () => {
      const req = {
        body: {
          tuit: {
            text: "Start nodemon index en package.json!",
            likes: 1111,
            date: "2021-11-17T17:40:55.096Z",
          },
        },
      };
      const tuit = req.body;
      const res = {
        json: jest.fn(),
      };

      Tuit.create = jest.fn().mockResolvedValue(tuit);

      await createTuit(req, res, null);

      expect(res.json).toHaveBeenCalledWith(tuit);
    });
  });
  describe("When createTuit reject", () => {
    test("Then it should invoke the next function with error reqected with error code 400", async () => {
      const error = {};
      Tuit.create = jest.fn().mockRejectedValue(error);
      const req = {
        body: {
          tuit: {
            text: "Start nodemon index en package.json!",
            likes: 1111,
            date: "2021-11-17T17:40:55.096Z",
          },
        },
      };
      const res = {};
      const next = jest.fn();

      await createTuit(req, res, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
