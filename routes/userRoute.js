import express from "express";
import { getAllUser, postUser } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", getAllUser);
userRouter.post("/user", postUser);

export default userRouter;
