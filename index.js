import express from "express";
import cors from "cors";
import userRouter from "./routes/userRoute.js";

const app = express();
const PORT = 3000;

// Enable CORS middleware
app.use(cors());
app.use(express.json());

// Define your routes here
app.use("/", userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening to http://localhost:${PORT}`);
});