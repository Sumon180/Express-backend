import express from "express";
import cors from "cors";
import axios from "axios";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();
const PORT = 3000;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

// In-memory data store
let contacts = [];

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

// Pass the Axios instance to the route handlers
app.use("/contacts", contactRoutes(axiosInstance, contacts));

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
