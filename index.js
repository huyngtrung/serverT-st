const express = require("express");
const app = express();
const dotenv = require("dotenv");
const sequelize = require("./models/index");

dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const PORT = process.env.PORT || 5000;

sequelize.then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
