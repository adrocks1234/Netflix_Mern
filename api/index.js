const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/lists");
const cors=require("cors");

app.use(cors());

dotenv.config();
// Options for connecting to the database
// Establish a connection to the MongoDB database

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
  });

  app.use(express.json());

  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/movies", movieRoute);
  app.use("/api/lists", listRoute);

app.listen(3000, () => console.log('Server running on port 3000'));