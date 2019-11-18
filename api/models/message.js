import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}); // assigns user to message by grabbing the user id 

messageSchema.virtual('username').get(function() {
  return this.user.username;
})

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
