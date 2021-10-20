const mongoose = require("../Database");

const jobSchema = new mongoose.Schema({
  email: String,
  title: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  description: { type: String, required: true },

  avatar: String,
});

module.exports = mongoose.model("Job", jobSchema);
