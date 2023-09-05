require("dotenv").config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;


//Currently not using this function
async function retrieveStripeAccount() {
  const account = await stripe.accounts.retrieve('acct_1Nj2nuBvXyDWVtmI')
  return account
}

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());




app.use("/api", require("./routes/index"));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
