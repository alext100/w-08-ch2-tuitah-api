const express = require("express");
const { validate } = require("express-validation");

const { getTuits, createTuit } = require("../controllers/tuitsControllers");
const { tuitValidation } = require("../schemas/tuitSchema");

const router = express.Router();

router.get("/", getTuits);

router.post("/createtuit", /*  validate(tuitValidation), */ createTuit);

module.exports = router;
