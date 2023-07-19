const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASSPHRASE
    ).toString(),
  });

  try {
    const { password, ...others } = await newUser.save();
    res.status(201).json({ others });
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(401).json("Wrong Email");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.SECRET_PASSPHRASE
    );
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    Originalpassword !== req.body.password &&
      res.status(401).json("Wrong Password");
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET_JWT,
      { expiresIn: "3d" }
    );
    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGOUT
router.post("/logout", async (req, res) => {
  try {
    // res.clearCookie(req.body.accessToken);
    // req.session.destroy();
    console.log("logout")
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
