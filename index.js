const express = require("express");
const app = express();
const db = require("./models");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
