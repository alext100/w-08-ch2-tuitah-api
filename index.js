require("dotenv").config();
const initDB = require("./database");
const { initServer } = require("./server");

const port = process.env.PORT ?? process.env.SERVER_PORT ?? 2000;

(async () => {
  await initDB(process.env.MONGODB_STRING_NETWORKS);
  await initServer(port);
})();
