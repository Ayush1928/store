const express = require("express");
const router = express.Router();
// const KEY = process.env.STRIPE_KEY;
const stripe = require("stripe")(
  "sk_test_51MuqHvSFJJGANshzHoUkckD9Ufav5FEYsU0q7ryysHQtZ5t9djZcQDIGwXqrArx4oZbvcn73Gtlz8nDRuT2OmVLX00Pc71pNBl"
);

router.post("/payment", async (req, res) => {
  const { tokenId, units, items } = req.body;
  try {
    console.log("Triggered");
    const session = await stripe.checkout.sessions.create({
      success_url: "http://localhost:3000/success",
      line_items: items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.title,
          },
          unit_amount: item.price * 100,
        },
        quantity: units,
      })),

      mode: "payment",
      client_reference_id: tokenId,
    });
    console.log(session.url)
    return session;
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
