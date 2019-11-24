var express = require("express");
var router = express.Router();
var userModel = require("../models/user");
var messageModel = require("../models/message");
const auth = require("../middleware/auth");

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

router.post("/signup", async (req, res) => {
  // Create a new user
  try {
    const user = new userModel(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  //Login a registered user
  try {
    const { email, password } = req.body;
    const user = await userModel.findByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;
