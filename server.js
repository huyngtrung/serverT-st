import express from "express";
import dotenv from "dotenv";
import initRoutes from "./src/routes"; // Điều chỉnh đường dẫn đến index.js trong thư mục router
import connectDatabase from "./src/config/connectDb";

dotenv.config(); // Load biến môi trường từ .env

const app = express();
app.use(express.json()); // Phân tích cú pháp JSON cho các yêu cầu

initRoutes(app); // Khởi tạo các route
connectDatabase();

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
