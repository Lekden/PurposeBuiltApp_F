const mongoose = require("../database");

const UserJobSchema = mongoose.Schema({
  email: String,
  name: String,
  jobId: String,
  title: String,
  orgEmail: String,
  verify: Boolean,
});

module.exports = mongoose.model("UserJob", UserJobSchema);
