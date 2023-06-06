const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userID: { type: String, required: true },
    product: [
      {
        productID: { type: String },
        Quantity: { type: Number , default : 1},
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart",cartSchema);
