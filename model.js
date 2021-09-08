const mongoose = require("mongoose");

//MongoDB schema
const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true,'firstName is required'],
    minlength: 5,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  userName:{
    type:String,
    required:true,
    minlength:5,
    maxlength:50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
});

const UserModal = mongoose.model("User", userSchema);

module.exports = UserModal;
