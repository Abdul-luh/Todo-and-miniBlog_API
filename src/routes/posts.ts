import { Router } from "express";
import {
	GetAllPostsHandler,
	GetSinglePostHandler,
	CreatePostHandler,
	DeletePostHandler,
	UpdatePostHandler,
} from "../controllers/Posts";

export const router = Router();

router.get("/posts", GetAllPostsHandler);

router.get("/posts/:id", GetSinglePostHandler);

router.post("/posts", CreatePostHandler);

router.put("/posts/:id", UpdatePostHandler);

router.delete("/posts/:id", DeletePostHandler);
