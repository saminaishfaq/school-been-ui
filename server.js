const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const users = require("./Modules/User/route");

const app = express();

db = "mongodb://localhost/DomeDB";
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((error) => {
    console.log(`${error} occured in connecting`);
  });

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.status(200).end("Welcome to dome api")
})

//Routes
app.use("/api/user", users);

const port = 3005 || process.env.PORT;
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`server started ${port}`);
  }
});
