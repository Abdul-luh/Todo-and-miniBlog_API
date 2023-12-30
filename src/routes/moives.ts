import { Router } from "express";
import { db } from "../config";
import { dbConnect } from "../config/mongoDB";
export const router = Router();

// router("/get", (req, res) => {
// 	const sqlSelect = "SELECT * FROM movie_reviews";
// 	db.query(sqlSelect, (err, result) => {
// 		err ? console.log(err) : res.send(result);
// 	});
// 	res.send("hello world");
// })

dbConnect();

router.get("/getallmovies", (req, res) => {
	const sqlSelect = "SELECT * FROM movie_reviews";
	db.query(sqlSelect, (err, result) => {
		err ? console.log(err) : res.send(result);
	});
	console.log(req.method, req.url);
});
