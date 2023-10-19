const moongose = require("mongoose");

const userSchema = moongose.Schema({
  name: {
    type: String,
    require: true,
    unique: true
  },
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  profilePicture: {
    type: String
  },
  joinDate: {
    type: Date,
    default: Date.now
  },
  sentFollowRequest: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User"
  },
  receivedFollowRequest: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User"
  },
  followers: {
    type: moongose.Schema.Types.ObjectId,
    ref: "User"
  },
  verified: {
    type: Boolean,
    default: false
  },
  verificationToken: String
});


const User = moongose.models("User", userSchema)


module.exports = User