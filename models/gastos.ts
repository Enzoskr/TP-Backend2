import { Model, Schema, model } from "mongoose";

export interface ISExpenses {
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
  estado: boolean;
}

const ExpenseSchema = new Schema<ISExpenses>({
  id: { type: Number, required: true, unique: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String },
  estado: { type: Boolean, required: true, default: true },
});

const Expense: Model<ISExpenses> = model<ISExpenses>("Expense", ExpenseSchema);

export default Expense;
