const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const authRoute = require("./Routes/auth");
const userRouter = require("./Routes/user");
const productRouter = require("./Routes/product");
const orderRouter = require("./Routes/order");
const stripeRouter = require("./Routes/stripe");
// const stripe = require('stripe')(process.env.STRIPE_KEY);

const cors = require("cors");
dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database Connected Successfully.");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/checkout", stripeRouter);
app.listen(port, () => {
  console.log(`Backend Server is running on port : ${port}`);
});
