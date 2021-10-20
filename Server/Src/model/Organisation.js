const mongoose = require("../database");

const OrganisationSchema = mongoose.Schema({
  name: String,
  password: String,
  email: {
    type: String,
    required: true,
    index: true,
    trim: true,
    lowercase: true,
    unique: true,
  },
  companyAddress: String,
  phone: String,
});

module.exports = mongoose.model("Organisation", OrganisationSchema);
