const mongoose = require("../database");

const UserSchema = mongoose.Schema({
  name: String,
  password: String,
  email: {
    type: String,
    required: true,
    index: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  phone: String,
  companyAddress: String,
  socialWorker: Boolean,
  isLogin: Boolean,
});

module.exports = mongoose.model("User", UserSchema);
