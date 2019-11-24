var express = require("express");
var router = express.Router();
var userModel = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const message = "email: " + email + " pasword: " + password;
    return res.send({message});

});



module.exports = router;