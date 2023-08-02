const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/index"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
