const express = require("express");
/* const { validate } = require("express-validation"); */

const {
  getTuits,
  createTuit,
<<<<<<< HEAD
  addFriend,
} = require("../controllers/tuitsControllers");
const { tuitValidation } = require("../schemas/tuitSchema");
=======
  deleteTuit,
} = require("../controllers/tuitsControllers");
/* const { tuitValidation } = require("../schemas/tuitSchema"); */
>>>>>>> master

const router = express.Router();

router.get("/", getTuits);

router.post("/createtuit", /*  validate(tuitValidation), */ createTuit);

<<<<<<< HEAD
router.patch("/patch", addFriend);
=======
router.delete("/delete/:id", deleteTuit);
>>>>>>> master

module.exports = router;
