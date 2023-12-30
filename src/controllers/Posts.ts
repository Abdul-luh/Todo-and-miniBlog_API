import { Request, Response } from "express";
import { dbConnect } from "../config/mongoDB";
import { Post } from "../models/Blogs";
import { Post_Iface } from "../types/postSchemaType";

dbConnect();

export async function GetAllPostsHandler(req: Request, res: Response) {
	try {
		console.log(req.method, "All Posts");
		const allPosts = await Post.find();
		return res.status(200).json(allPosts);
	} catch (error: any) {
		console.log({ error: error.message });
		return res.status(500).json({ error: error.message });
	}
}

export async function GetSinglePostHandler(req: Request, res: Response) {
	try {
		const id = req.params.id;
		console.log(req.method, "Single Post With id: ", id);
		const singlePost = await Post.findOne({ id });
		return res.status(200).json(singlePost);
	} catch (error: any) {
		console.log({ error: error.message });
		return res.status(500).json({ error: error.message });
	}
}

export async function CreatePostHandler(req: Request, res: Response) {
	try {
		const { id, dateTime, title, body } = req.body;
		const post: Post_Iface = { id, dateTime, title, body };
		console.log(req.method, "New post", post);
		const newPost = await Post.insertMany(post);

		// RETURN THE INNER OBJECT OF THE POST
		return res.status(200).json(newPost[0]);
	} catch (error: any) {
		console.log({ error: error.message });
		return res.status(500).json({ error: error.message });
	}
}

export async function UpdatePostHandler(req: Request, res: Response) {
	try {
		const id = req.params.id;
		console.log(req.method, "Post With id: ", id);
		const { title, body } = req.body;
		const updatedPost = await Post.updateOne({ id }, { title, body });
		return res.status(200).json(updatedPost);
	} catch (error: any) {
		console.log(error);
		return res.status(500).json({ error: error.message });
	}
}

export async function DeletePostHandler(req: Request, res: Response) {
	try {
		const id = req.params.id;
		console.log(req.method, "Post With id: ", id);
		const deletedPost = await Post.deleteOne({ id });
		return res.status(200).json(deletedPost);
	} catch (error: any) {
		console.log(error);
		return res.status(500).json({ error: error.message });
	}
}
