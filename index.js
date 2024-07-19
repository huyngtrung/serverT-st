const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const db = require("./models");
const http = require("http");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
dotenv.config();

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
console.log(PORT);

db.sequelize
  .sync()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
