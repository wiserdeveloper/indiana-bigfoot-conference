const express = require("express");
const router = express.Router();
const paymentRouter = require("./payments");
const stripe = require("stripe")(process.env.STRIPE_SERVER_KEY);

router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/payments", paymentRouter);

router.get("/products", async (req, res, next) => {
  const products = await stripe.products.list({
    limit: 100,
  });
  console.log(products.data.length);
  res.status(200).send(products);
});

router.get("/prices", async (req, res, next) => { 
  const { productPrice } = req.query
  console.log(productPrice)
  const price = await stripe.prices.retrieve(productPrice)
  console.log(price)
  res.status(200).send(price)
})

module.exports = router;
