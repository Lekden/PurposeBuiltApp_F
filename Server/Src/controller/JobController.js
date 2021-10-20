const express = require("express");
const Router = express.Router();
const Job = require("../model/Job");
const { get } = require("./userController");

/* Add job */
Router.post("/post", (req, resp) => {
  Job.insertMany(req.body).then(() => {
    resp.send({ code: 200 });
  });
});

/* Search job list by title */
Router.get("/searchlist/:title", (req, resp) => {
  const { title } = req.params;
  Job.find({
    title: { $regex: title },
  }).then((res) => {
    resp.send({ code: 200, jobs: res });
  });
});

/* View all JOBS POSTED by an ORGN */
Router.get("/list/:email", (req, resp) => {
  const email = req.params.email;
  Job.find({ email: email }).then((res) => {
    resp.send({
      code: 200,
      jobs: res,
    });
  });
});

/* Get all jobs */
Router.get("/list", (req, resp) => {
  Job.find().then((jobs) => {
    resp.send({ code: 200, jobs });
  });
});
module.exports = Router;

/*change job details*/
Router.patch("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    job.jobDescription = req.body.jobDescription;
    const jobPost = await job.save();
    res.status(200).json(jobPost);
  } catch (err) {
    res.status(500);
    res.json({ message: "Try Again" });
  }
});

/*delete a job from the database by orgn*/
Router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json(job);
  } catch (err) {
    res.status(500);
    res.json({ message: "Try Again" });
  }
});
