const chalk = require("chalk");
const mongoose = require("mongoose");
const debug = require("debug")("tuitah:database");

const initDB = (connectionDBString) =>
  new Promise((resolve, reject) => {
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (doc, ret) => {
        // eslint-disable-next-line no-underscore-dangle
        delete ret._id;
        // eslint-disable-next-line no-underscore-dangle
        delete ret.__v;
      },
    });

    mongoose.connect(connectionDBString, (error) => {
      if (error) {
        debug(chalk.red("No se ha podido conectar con la base de datos"));
        debug(chalk.red(error.message));
        reject();
        return;
      }
      debug(chalk.green("Conectado a la base de datos"));
      resolve();
    });

    mongoose.connection.on("close", () => {
      debug(chalk.green("Desconectado de la base de datos"));
    });
  }).catch((error) => {
    throw error;
  });

module.exports = initDB;
