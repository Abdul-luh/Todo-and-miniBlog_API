import { Request, Response } from "express";
import { Todo } from "../models/Todos";
import { dbConnect } from "../config/mongoDB";

dbConnect();

export const GetAllItemsHandler = async (req: Request, res: Response) => {
	try {
		console.log(req.method, "All Todos");
		const allTodos = await Todo.find();
		return res.status(200).json(allTodos);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error });
	}
};

export const CreateItemHandler = async (req: Request, res: Response) => {
	try {
		const { id, item, checked = false } = req.body;
		const todo = { id, item, checked };
		console.log(req.method, "New Todo ", todo);
		const insertedItem = await Todo.insertMany(todo);
		return res.status(200).json(insertedItem[0]);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error });
	}
};

export const UpadateItemHandler = async (req: Request, res: Response) => {
	try {
		console.log(req.method, "Update");
		const id = parseInt(req.params.id);
		const checked = req.body.checked;
		const updatedItemd = await Todo.updateOne({ id }, { $set: { checked } });
		return res.status(200).json(updatedItemd);
	} catch (error: any) {
		console.log(error);
		return res.status(500).json({ error });
	}
};

export const DeleteSingleItemHandler = async (req: Request, res: Response) => {
	try {
		const { id } = req.params;
		const deleteItem = await Todo.deleteOne({ id });
		console.log(deleteItem);
		return res.status(200).json(deleteItem);
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error });
	}
};
