import express from "express";
import app from 'express'
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import healthRoutes from "./routes/healthRoutes.js";

dotenv.config();
const PORT=4000;

app.use(express.json());
app.use("/auth",authRoutes);
app.use("/health",healthRoutes);

mongoose.connect("mongodb://localhost:27017/healthDB")
.then(()=>{
	console.log("connected to mongoDb");
})
.catch((err)=>{
	console.error("error coonecting to mongodb:",err)
});
app.listen(PORT,(req,res)=>{
	console.log("app started on port:",PORT);
});