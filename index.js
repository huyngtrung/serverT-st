const express = require("express");
const app = express();
const db = require("./models");

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running....");
  });
});
