const express = require("express");
const route = express.Router();
const user_login = require("../model/login");
const user_register = require("../model/register");

//login
route.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  if (!email && !password) {
    return res.status(400).json({
      status: "false",
      message: "missing username and password!",
    });
  }

  try {
    const userIn = await user_register.findOne({
      $or: [{ email: email }, { user_name: email }],
    });

    console.log(userIn);

    if (userIn.password == password) {
      console.log("user login success");
    }

    const new_login = new user_login({
      user_pass: email,
      password: password,
    });

    await new_login.save();
    res.json({
      status: "true",
      message: "User login successfull",
    });
  } catch {}
});



//signup

route.post("/register", async (req, res) => {
  const { fname, lname, email, username, password, repassword } = req.body;

  if (!fname) {
    return res.status(400).json({
      status: "false",
      message: "registration faild.",
    });
  }
  const new_register = new user_register({
    first_name: fname,
    last_name: lname,
    email: email,
    user_name: username,
    password: password,
    re_password: repassword,
  });

  try {
    await new_register.save();
    res.json({
      status: "true",
      message: "Registration successfull!",
    });
  } catch {
    console.log("error");
  }
});

module.exports = route;
