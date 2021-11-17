const { getTuits } = require("../controllers/tuitsControllers");
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
});
