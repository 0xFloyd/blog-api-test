import 'dotenv/config';
import express from "express";
import bodyParser from "body-parser";
var mongoose = require("mongoose");
import cors from "cors";
import uuidv4 from "uuid/v4";
var models = require('../models');
var userModel = require('../models/user');
var messageModel = require("../models/message");
var routes = require("../routes/index"); //jwt stuff
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

//passport stuff
const passport = require("passport");
//const jwtStrategry = require("./strategies/jwt");
//passport.use(jwtStrategry);

var userRouter = require("../routes/user");
var messageRouter = require("../routes/message");
var sessionRouter = require("../routes/session");
var loginRouter = require("../routes/login");
var authRouter = require("../routes/auth");


const app = express();



//  Middleware. All routes use this
app.use(cors());
// Express exposes this built-in middleware (based on (body-parser) under the covers) to transform two of the body types we might receive - json, and urlencoded.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  if (!req.headers.authorization) {
    console.log("no header");
  }
  else {
    console.log(req.headers.authorization);
  }
  next();
});

app.use("/session", sessionRouter);
app.use("/user", userRouter);
app.use("/message", messageRouter);
app.use("/auth", authRouter);


//  Let's do a simple version of a middleware that determines a pseudo "authenticated" user that is sending the request.
//  Pass models via the context object to every Express route with an application-wide Express middleware 



const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
};

//  re-initialize db on every start, and clear out all old data
const eraseDatabaseOnSync = false;

//  connects to the database asynchronously. deletes all data if eraseDatabase true
connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      userModel.deleteMany({}),
      messageModel.deleteMany({})
    ]);

    //createUsersWithMessages();
  }   // creates  seed data in db 

  app.listen(process.env.PORT, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

// MIDDELWARE FOR KEEPING TRACK OF LOGIN 
/*
app.use(async (req, res, next) => {
  req.context = {
    models,
    userModel,
    messageModel
    //me: await userModel.findByLogin("ryan")
  };
  next(); //  The next function, which is available as third argument, is called to signalize that the middleware has finished its job.
});
*/

//  Seed database with sample data 

const createUsersWithMessages = async () => {
  const user1 = new userModel({
    username: "ryan"
  });
  const user2 = new userModel({
    username: "steve"
  });
  const message1 = new messageModel({
    text: "sample message 1",
    user: user1.id
  });
  const message2 = new messageModel({
    text: "another sample message",
    user: user2.id
  });

 
  await user1.save();
  await user2.save();

  await message1.save();
  await message2.save();
};


// the following function initiated data in databse
 createUsersWithMessages();

//  Home
app.get("/", (req, res) => {
  return res.send("Received a GET HTTP method");
});
app.post("/", (req, res) => {
  return res.send("Received a POST HTTP method");
});
app.put("/", (req, res) => {
  return res.send("Received a PUT HTTP method");
});
app.delete("/", (req, res) => {
  return res.send("Received a DELETE HTTP method");
});


// Users

app.post("/user", (req, res) => {
  return res.send("POST HTTP method on user resource");
});
app.put("/user", (req, res) => {
  return res.send("PUT HTTP method on user resource");
});
app.delete("/user", (req, res) => {
  return res.send("DELETE HTTP method on user resource");
});


// Individual Users

app.put("/users/:userId", (req, res) => {
    return res.send(users[req.params.userId]);
});
app.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});







