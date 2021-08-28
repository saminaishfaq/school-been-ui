const mongoose = require("mongoose");
const UserModal = require("./model");

exports.checkUserByEmail = async (email) => {
  const result = await UserModal.findOne({ email }).lean().exec();
  return result;
};
exports.getUser = async (email,password) => {
  const result = await UserModal.findOne({ email: email, password: password }).lean().exec();
  return result;
};

exports.postUser = async (data) => {
  try {
    const user = new UserModal(data);
    return await user.save();
  } catch (error) {
    return error;
  }
};
