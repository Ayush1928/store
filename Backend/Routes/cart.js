const { verifyTokenandAuth, verifyTokenandAdmin } = require("./verifyToken");
const express = require("express");
const router = express.Router();
const CryptoJS = require("crypto-js");
const Cart = require("../Models/Cart");

//Create
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update
router.put("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", verifyTokenandAuth, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted.");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get User Cart
router.get("/find/:id",verifyTokenandAuth, async (req, res) => {
  try {
    const cart = await Cart.findOne({id:req.params.id});
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all
router.get("/", verifyTokenandAdmin ,async (req, res) => {
  try{
    const carts = await Cart.find();
    res.status(200).json(carts);
  }catch(err){
    res.status(500).json(err);
  }
});
module.exports = router;
