const express = require("express");
const Router = express.Router();
const Organisation = require("../model/Organisation");

/* Registere organisation users */
Router.post("/register", (req, resp) => {
  Organisation.insertMany(req.body).then((res) => {
    resp.send({ code: 200 });
  });
});

module.exports = Router;

//* Get all organisations */
Router.get("/list", async (req, res) => {
  try {
    const users = await Organisation.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500);
    res.json({ message: "Please Try Again" });
  }
});
