const express = require("express");
const router = express.Router();
const Instamojo = require('instamojo-node');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const apiKey =  "test_ffc6a08b9c5507c87a39e86e5a4"  
const apiSecret = "7fae65e1be1b44709e069aef4bed94de"
const Client = new Instamojo(apiKey, apiSecret);

router.post('/payment', urlencodedParser, jsonParser, function(req, res) {
    // Get payment details from the client
    const paymentData = req.body;
  
    // Create a new payment request
    Client.paymentRequestCreate(paymentData, function(err, payment) {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Could not create payment request' });
      }
  
      // Return the payment request URL to the client
      res.json({ payment_request_url: payment.payment_request.longurl });
    });
  });
  

module.exports = router;
