const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const stripe = require("stripe")('sk_test_51Nj2nuBvXyDWVtmI0ZlcbnIH7cSrxMK5TFvYGM7ng9tQlZiBtS6PEAnd5IaMUJjZAldf0Na69eVlBdfojc0Bb0Oz00BUMjIbsx');
const account = await stripe.accounts.retrieve('acct_1Nj2nuBvXyDWVtmI');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 4500,
    currency: "usd",
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    automatic_payment_methods: {
      enabled: true,
    },
  },
  {
    stripeAccount: 'acct_1Nj2nuBvXyDWVtmI'
  },
  )

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.use("/api", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
