const Tuit = require("../../database/models/Tuit");

const getTuits = async (req, res, next) => {
  try {
    const tuits = await Tuit.find().sort({ date: 1 });
    res.json(tuits);
  } catch {
    const error = new Error("No encontrado");
    error.code = 404;
    next(error);
  }
};

const createTuit = async (req, res, next) => {
  try {
    const tuit = req.body;
    const newTuit = await Tuit.create(tuit);
    res.json(newTuit);
  } catch (error) {
    error.code = 400;
    error.message = "Error creando un tuit";
    next(error);
  }
};

const deleteTuit = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tuit = await Tuit.findByIdAndRemove(id);
    res.json(tuit);
  } catch (error) {
    error.code = 400;
    error.message = "Tuit not found";
    next(error);
  }
};

module.exports = { getTuits, createTuit, deleteTuit };
