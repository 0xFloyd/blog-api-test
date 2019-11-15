import 'dotenv/config';
import models from "./models";
import express from "express";
import cors from "cors";
import uuidv4 from "uuid/v4";

const app = express();

//  Middleware. All routes use this
app.use(cors());
// Express exposes this built-in middleware (based on (body-parser) under the covers) to transform two of the body types we might receive - json, and urlencoded.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//  Let's do a simple version of a middleware that determines a pseudo "authenticated" user that is sending the request.
app.use((req, res, next) => {
    req.context = {
      models,
      me: models.users[1]
    };
  next();       //  The next function, which is available as third argument, is called to signalize that the middleware has finished its job. 
});








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
app.get("/users", (req, res) => {
  return res.send(Object.values(req.context.models.users));
});
app.post("/users", (req, res) => {
  return res.send("POST HTTP method on user resource");
});
app.put("/users", (req, res) => {
  return res.send("PUT HTTP method on user resource");
});
app.delete("/users", (req, res) => {
  return res.send("DELETE HTTP method on user resource");
});


// Individual Users
app.get("/users/:userId", (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});
app.put("/users/:userId", (req, res) => {
    return res.send(users[req.params.userId]);
});
app.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});


// Session
app.get("/session", (req, res) => {
  return res.send(req.context.models.users[req.context.me.id]);
});


//  Messages
app.get("/messages", (req, res) => {
  return res.send(Object.values(req.context.models.messages));
});
app.get("/messages/:messageId", (req, res) => {
  return res.send(req.context.models.messages[req.params.messageId]);
});
app.post("/messages", (req, res) => {
  const id = uuidv4();  //only using this since we dont have a database to generate unique IDs
  const message = {
    id,
    text: req.body.text, //  post method allwos data to be sent as payload in the body
    userId: req.context.me.id //   Then it's possible to append authenticated user from middleware from the request as message creator to the message:
  };

    req.context.models.messages[id] = message;
  return res.send(message);
});


app.delete("/messages/:messageId", (req, res) => {
   const {[req.params.messageId]: message, ...otherMessages } = req.context.models.messages;

   req.context.models.messages = otherMessages;

  return res.send(message);
});




app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);