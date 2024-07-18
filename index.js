const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

const PORT = process.env.PORT || 3001;

const db = require("./models");
// db.sequelize
//   .sync()
//   .then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// })
// .catch((err) => {
//   console.error("Unable to connect to the database:", err);
// });
