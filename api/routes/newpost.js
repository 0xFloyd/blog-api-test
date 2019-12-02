var uuidv4 = require('uuid/v4');
var express = require("express");
var router = express.Router();
var userModel = require("../models/user");
var messageModel = require("../models/message");
const auth = require("../middleware/auth");



router.get("/", auth, async (req, res) => {
    console.log("newpost Get fired");
    console.log(req.user);
    res.send(req.user);
});

// create new message, creating a unique id for that message, 
router.post("/", async (req, res) => {
    const tempUser = await userModel.findByCredentials("test@gmail.com", "meow");
    const message = await messageModel.create({
        text: req.body.text,
        user: tempUser
    });
    return res.send({ message, tempUser });
});

module.exports = router;