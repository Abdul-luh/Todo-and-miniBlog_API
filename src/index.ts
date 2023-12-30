import express from "express"; // const express = require("express");
import cors from "cors"; // const cors = require("cors");
// import { dbConnect } from "./config/mongoDB";
const path = require("path");
const app = express();
import dotenv from "dotenv";
import { router as postRoutes } from "./routes/posts";
import { router as todoRoutes } from "./routes/Todos";
dotenv.config();

const PORT = process.env.PORT || 9002; // const port = process.env.PORT || 3005; 3005
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { Request, Response } from "express";
import { redirectAPIToRoot } from "./middleware/RedirectRoot";

// app.use(redirectAPIToRoot);

app.use("/api", postRoutes);
app.use("/api", todoRoutes);

// Set the 'public' directory as a static folder
app.use(express.static(path.join(__dirname, "..", "public")));

// Serve index.html when accessing the root URL
app.get("/", (req: Request, res: Response) => {
	res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.listen(PORT, () => {
	console.log("running on port " + PORT);
});
