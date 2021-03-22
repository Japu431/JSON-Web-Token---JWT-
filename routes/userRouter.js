const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mongo Connected");
    }
  }
);
router.post("/register", userController.register);

router.post("/login", userController.login);

module.exports = router;
