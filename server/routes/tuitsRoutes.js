const express = require("express");
/* const { validate } = require("express-validation"); */
// const { tuitValidation } = require("../schemas/tuitSchema");

const {
  getTuits,
  createTuit,
  addFriend,
  deleteTuit,
} = require("../controllers/tuitsControllers");

const router = express.Router();

router.get("/", getTuits);

router.post("/createtuit", /*  validate(tuitValidation), */ createTuit);

router.patch("/patch", addFriend);

router.delete("/delete/:id", deleteTuit);

module.exports = router;
