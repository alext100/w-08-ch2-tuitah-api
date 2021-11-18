const express = require("express");
const { validate } = require("express-validation");

const {
  getTuits,
  createTuit,
  addFriend,
} = require("../controllers/tuitsControllers");
const { tuitValidation } = require("../schemas/tuitSchema");

const router = express.Router();

router.get("/", getTuits);

router.post("/createtuit", /*  validate(tuitValidation), */ createTuit);

router.patch("/patch", addFriend);

module.exports = router;
