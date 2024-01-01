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

module.exports = router;
