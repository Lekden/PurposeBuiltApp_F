const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Router = express.Router();
const User = require("../model/User");
const Organisation = require("../model/Organisation");

/* Login */
const login = async ({ email, password }) => {
  const user = await User.findOne({ email, password });

  if (user) {
    User.findByIdAndUpdate(user["_id"], { isLogin: true });
    return {
      code: 200,
      userInfo: {
        email,
        name: user["name"],
        role: user["socialWorker"] ? 1 : 0,
      },
    };
  } else {
    const orgUser = await Organisation.findOne({ email, password });
    if (orgUser)
      return {
        code: 200,
        userInfo: {
          email,
          name: orgUser["name"],
          role: 2,
        },
      };
  }
  return {
    code: 0,
  };
};

/* User Login*/
Router.post("/login", (req, resp) => {
  login(req.body).then((res) => {
    resp.send(res);
  });
});

Router.get("/SocialWorker", (req, resp) => {
  User.find({
    //isLogin: true,
    socialWorker: true,
  }).then((res) => {
    resp.send({ code: 200, list: res });
  });
});

//* Get all Users */
Router.get("/list", async (req, resp) => {
  try {
    const users = await User.find();
    resp.status(200).json(users);
  } catch (err) {
    resp.status(500);
    resp.json({ message: "Please Try Again" });
  }
});

/* User registration */
// Router.post("/register", (req, resp) => {
//   req.body.isLogin = false;
//   User.insertMany(req.body).then((value) => {
//     resp.send({
//       code: 200,
//     });
//   });
// });

Router.post("/register", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    const phone = req.body.phone;
    const socialWorker = req.body.socialWorker;

    /* Hash the password using bcrypt*/
    //const hashedPassword = await bcrypt.hash(password, 10);

    /*If it is a duplicate email, throw an error*/
    const userExists = await User.exists({ email });
    if (userExists) throw new Error("Email already exists");

    // Create user on database using mongoose model
    const newUser = new User({
      name,
      phone,
      socialWorker,
      email,
      password,
    });

    await newUser.save();

    // //Log user in by creating a JWT auth token which is signed using their id, email and a secret JWT key
    const authToken = jwt.sign(
      { id: newUser._id, email: newUser.email },
      "secretkey"
    );
    return res.status(200).json({
      name: newUser.name,
      status: 200,
      message: "SUCCESS",
      authToken,
    });
  } catch (err) {
    return res.status(422).json({ status: 422, message: err.message });
  }
});

module.exports = Router;
