const { ValidationError } = require("express-validation");
const debug = require("debug")("tuitah:errors");
const chalk = require("chalk");

const handlerNotFound = (req, res) => {
  res.status(404).json({ error: "No se ha encontrado la ruta" });
};

// eslint-disable-next-line no-unused-vars
const handlerGeneralError = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    error.code = 400;
    error.message = "Error de validación";
  }
  debug(chalk.red("Ha ocurrido un error: ", error.message));
  const message = error.code ? error.message : "ERROR";
  res.status(error.code || 500).json({ error: message });
};

module.exports = {
  handlerNotFound,
  handlerGeneralError,
};
