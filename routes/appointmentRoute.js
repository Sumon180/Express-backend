import express from "express";


const appointmentRoute = express.Router();

appointmentRoute.get("/appointments");
appointmentRoute.get("/appointment/");
appointmentRoute.post("/appointment");
appointmentRoute.put("/appointment/");
appointmentRoute.delete("/appointment/");

export default appointmentRoute;
