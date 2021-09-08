const mongoose = require("mongoose");
const UserModal = require("./model");

exports.checkUserByUserName = async (userName) => {
  const result = await UserModal.findOne({ userName }).lean().exec();
  return result;
};
exports.checkUserByEmail = async (email) => {
  const result = await UserModal.findOne({ email }).lean().exec();
  return result;
};
exports.getUser = async (userName,password) => {
  const result = await UserModal.findOne({ userName, password: password }).lean().exec();
  return result;
};

exports.postUser = async (data) => {
  try {
    const user = new UserModal(data);
    const newUser =await user.save();
    //console.log(data);
     return newUser;
  } catch (error) {
    return error;
  }
};
