 const express = require("express")
 const stripe = require("stripe")(process.env.STRIPE_SERVER_KEY);

 const router = express.Router()



 /**
  * @route POST /api/payments/create-payment-intent
  * @desc Creates a payment intent
  * @access Public
  * @returns {object} PaymentIntent
  * @see {@link https://stripe.com/docs/api/payment_intents/create}
  */
router.post("/create-payment-intent", async (req, res) => {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 4500,
            currency: "usd",
        },
        {
            stripeAccount: process.env.STRIPE_ACC
        },
        )
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    })

module.exports = router

