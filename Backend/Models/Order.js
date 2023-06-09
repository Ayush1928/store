const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    product: [
      {
        productID: { type: String },
        Quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Pending" },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order",orderSchema);
