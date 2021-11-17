const express = require("express");

const { getTuits, createTuit } = require("../controllers/tuitsControllers");

const router = express.Router();

router.get("/", getTuits);

router.post("/createtuit", createTuit);

module.exports = router;
