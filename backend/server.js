import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRoute from "./routes/foodRoute.js";
import path from "path";
import fs from "fs";

// App config
const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Ensure 'uploads' folder exists
const uploadDir = path.join(path.resolve(), "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up static folder for uploaded images
app.use("/uploads", express.static(uploadDir));

// Database connection
connectDB();

// API Endpoints
app.use("/api/food", foodRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Start Server
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
