import { Router } from "express";
import {
	CreateItemHandler,
	DeleteSingleItemHandler,
	GetAllItemsHandler,
	UpadateItemHandler,
} from "../controllers/Todos";

export const router = Router();

router.get("/items", GetAllItemsHandler);

router.post("/items", CreateItemHandler);

router.put("/items/:id", UpadateItemHandler);

router.delete("/items/:id", DeleteSingleItemHandler);
