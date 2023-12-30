// import mongoose from "mongoose";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export async function dbConnect() {
	try {
		mongoose.connect(process.env.MONGO_URI!);
		const connection = mongoose.connection;
		connection.on("connect", () => {
			console.log("Mongo DB connected sucessfully");
		});

		connection.on("error", (err) => {
			console.log("Baba you no get Data!");
			console.log(err);
			process.exit();
		});
	} catch (error) {
		console.log("something went wrong Please check your internet connection");
		console.log(error);
	}
}
