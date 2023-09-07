const express = require("express");
const router = express.Router();
const paymentRouter = require("./payments");



router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/payments", paymentRouter);


module.exports = router; 
