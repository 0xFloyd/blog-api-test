var express = require("express");
var router = express.Router();
var userModel = require("../models/user");
const auth = require("../middleware/auth");


router.get("/userloggedin", auth, async (req, res) => {
  // View logged in user
  return res.send(req.user);
});


module.exports = router;