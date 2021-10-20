const UserController = require("../controller/userController");
const OrganisationController = require("../controller/OrganisationController");
const UserJobController = require("../controller/UserJobController");
const JobController = require("../controller/jobController");

/*Configure Routing*/
module.exports = (app) => {
  app.use("/user", UserController);
  app.use("/organisation", OrganisationController);
  app.use("/job", JobController);
  app.use("/userJob", UserJobController);
};
