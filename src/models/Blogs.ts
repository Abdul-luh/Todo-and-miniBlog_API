import mongoose, { Schema } from "mongoose";
import { Post_Iface } from "../types/postSchemaType";

const postSchema: Schema<Post_Iface> = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	dateTime: {
		type: String,
		required: true,
		unique: false,
	},
	title: {
		type: String,
		required: true,
	},
	body: { type: String, required: true },
});

// const Post = mongoose.model<Post_Iface>("Post", postSchema);
const Post =
	mongoose.models.posts || mongoose.model<Post_Iface>("posts", postSchema);
// const Movie =  mongoose.models.movies || mongoose.model<Movie_Iface>("movies", movieSchema);

export { Post };
