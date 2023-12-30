import mongoose, { Schema } from "mongoose";
import { TodoSchema_Iface } from "../types/todoSchemaType";

const TodoSchema: Schema<TodoSchema_Iface> = new Schema({
	id: {
		type: Number,
		require: true,
		unique: true,
	},
	item: {
		type: String,
		require: true,
		unique: false,
	},
	checked: {
		type: Boolean,
		require: true,
	},
});

export const Todo =
	mongoose.models.post || mongoose.model<TodoSchema_Iface>("todos", TodoSchema);
