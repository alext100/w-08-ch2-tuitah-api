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

const addFriend = async (req, res, next) => {
  const { id } = req.body;
  try {
    const updatedPost = await Tuit.findById(id);
    if (!updatedPost) {
      const error = new Error("Tuit no encontrado");
      error.code = 404;
      return next(error);
    }
    updatedPost.likes += 1;
    updatedPost.save();
    res.json(updatedPost);
  } catch {
    const error = new Error("No se ha podido añadir el like");
    next(error);
  }
};

module.exports = { getTuits, createTuit, addFriend };
