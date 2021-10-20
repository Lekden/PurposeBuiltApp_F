const express = require("express");
const Router = express.Router();
const UserJob = require("../model/UserJob");

/* INDIVIDUAL APPLIES A JOB */
Router.post("/req", (req, resp) => {
  const { email, orgEmail, jobId, title, name } = req.body;
  UserJob.insertMany({
    email,
    orgEmail,
    jobId,
    name,
    title,
    verify: false,
  }).then(() => {
    resp.send({ code: 200 });
  });
});

/* Fetch Message to INBOX to CHECK APPLICANTS*/
Router.get("/list/:email", (req, resp) => {
  const email = req.params.email;
  UserJob.find({ orgEmail: email }).then((res) => {
    resp.send({
      code: 200,
      userJobs: res,
    });
  });
});

/* Fetch Message to MYJOBS of INDIVIDUALS */
Router.get("/jobList/:email", (req, resp) => {
  const email = req.params.email;
  UserJob.find({ email: email }).then((res) => {
    resp.send({
      code: 200,
      jobs: res,
    });
  });
});

/* Search job list by title */
Router.get("/searchlist/:title", (req, resp) => {
  const { title } = req.params;
  UserJob.find({
    title: { $regex: title },
  }).then((res) => {
    resp.send({ code: 200, jobs: res });
  });
});
module.exports = Router;

/*remove a job from myjob list of individuals*/
Router.delete("/:id", async (req, res) => {
  try {
    const job = await UserJob.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json(job);
  } catch (err) {
    res.status(500);
    res.json({ message: "Try Again" });
  }
});
