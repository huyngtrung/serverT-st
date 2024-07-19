import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DBNAME || "servertest",
});

export default pool;
