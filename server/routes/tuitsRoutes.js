const express = require("express");

const { getTuits } = require("../controllers/tuitsControllers");

const router = express.Router();

router.get("/", getTuits);

module.exports = router;
