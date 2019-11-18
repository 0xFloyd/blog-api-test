var express = require("express");
var router = express.Router();
var userModel = require("../models/user");
var messageModel = require("../models/message");

// Notice how we don't need to define the /users URI (path) but only the subpaths, , because we did this already in the mounting process of the route in the Express application (see src/index.js file).
// user routes in the offer RESTful API endpoints for fetching users or a single user by id
router.get("/", async (req, res) => {
  const users = await userModel.find();
  return res.send(users);
});   //doesn't get any input parameters from the request. 

router.get("/:userId", async (req, res) => {
  const user = await req.context.userModel.findById(req.params.userId);
  return res.send(user);
});

module.exports = router;
