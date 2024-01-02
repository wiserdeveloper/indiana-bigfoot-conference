require("dotenv").config()

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('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')
const app = express();

const port = 3001;

// const corsOptions = {
//   origin: "https://www.indianabigfootconference.com/",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 200
// };

app.use(cors({origin: ["https://www.indianabigfootconference.com/", "http://localhost:3000/", "http://localhost:3000"]}))

// app.use(cors(corsOptions));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", require("./routes/index"));

// stripe method
app.post("/checkout", async (req, res) => {

  console.log(req.body);

  const items = req.body.items;
  let lineItems = []
  items.forEach((item) => {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  })

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: "https://www.indianabigfootconference.com/success", // update to indianabigfootconference.com when not in testing
    cancel_url: "https://www.indianabigfootconference.com/cancel" // ditto ^^
  })

  res.send(JSON.stringify({
    url: session.url
  }));

})

app.listen(3001, () => ("Listening on port 3001!"))

module.exports = app;


// KEYS

// Test Secret Key: sk_test_51Nj2nuBvXyDWVtmI0ZlcbnIH7cSrxMK5TFvYGM7ng9tQlZiBtS6PEAnd5IaMUJjZAldf0Na69eVlBdfojc0Bb0Oz00BUMjIbsx
// Test Publishable Key: pk_test_51Nj2nuBvXyDWVtmIHmJRaKQozVcxcghT53PNrWEd896fMlWKpYRLpAlk6uDaYGS3RvZcai7Ba8xdQyJ74pqPAFjd00dOSpH7Hx

// Conference Hoodie (White) Key: price_1OS3M5BvXyDWVtmIhdSMDPOO
// Conference Hoodie (Green) Key: price_1OS3LmBvXyDWVtmIrhn21QO0

// Conference V-Neck Shirt (White) Key: price_1OS3LKBvXyDWVtmIUvplYWK9
// Conference V-Neck Shirt (Green) Key: price_1OS3KvBvXyDWVtmIGe6dU8Bm

// Conference Shirt (White) Key: price_1OS3KfBvXyDWVtmI1TyKMtSC
// Conference Shirt (Green) Key: price_1OS3KOBvXyDWVtmIY5xHf4xZ

// Ticket Key: price_1OSpe8BvXyDWVtmI6n85uySt