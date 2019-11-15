var mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  }
});

// method to check for duplicate username and prevent it 
userSchema.statics.findByLogin = async function(login) {
  let user = await this.findOne({
    username: login
  });
  if (!user) {
    user = await this.findOne({ email: login });
  }
  return user;
};

// if user is deleted, pre hook to our user schema to remove all messages of this user
userSchema.pre("remove", function(next) {
  this.model("Message").deleteMany({ user: this._id }, next);
});


const User = mongoose.model("User", userSchema);

module.exports = User;
