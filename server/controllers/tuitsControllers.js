const Tuit = require("../../database/models/Tuit");

const getTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find();
    res.json(tuits);
  } catch {
    const error = new Error("No encontrado");
    error.code = 404;
    next(error);
  }
};

module.exports = { getTuits };
