import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

// Start the server only after the database connection is established
const startServer = async () => {
    try {
      await connectDB(); // Ensure DB connection is successful
      app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
      });
    } catch (error) {
      console.error("Failed to start the server:", error);
    }
  };
  
  startServer();
