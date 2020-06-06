const express = require("express");
const app = express();

const { resolve } = require("path");

// Real test secret API key
const stripe = require("stripe")("sk_test_iEvUARu6PgOHCbHgRxJM2OVn006pKfdEWY");

// Body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser');

// Log filestream
var fs = require('fs')
app.use(express.static("."));
app.use(express.json());

// Set price of hotdog pins $12 on the server
const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1200;
};

// Create payment intent on Stripe with order amount and currency
app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});

// Log successful payments in a log file with paymentIntentId and Created DateTime
app.post("/log-successful-payment", async (req, res) => {
  
	fs.appendFile('successfulPayments_Log.txt', 'Payment Successfully completed | ' + req.body.paymentIntent.id + ' | ' + req.body.paymentIntent.created, function (err) {
	  if (err) {
		console.log(" Appending to log errored out.");
	  } else {
		console.log(" Successful payment appended to logs");
	  }
})
  
  res.send({ });
});


app.listen(4242, () => console.log('Node server listening on port 4242!'));
