const mongoose = require("mongoose");

const config = {
  username: "root",
  password: "",
  url: "mongodb://localhost:27017/PurposeBuiltDB",
};

// mongoose.connect(config.url, (err, db) => {
//   if (err) throw err;
//   console.log("Connect MongoDb Success!");
// });

mongoose.connect(config.url, { useNewUrlParser: true }); //avoid warning for deprecated service
const con = mongoose.connection;

con.on("open", () => {
  console.log("Connect MongoDb Success!");
});

module.exports = mongoose;
