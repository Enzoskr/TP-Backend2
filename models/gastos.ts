import { Model, Schema, model } from "mongoose";

export interface ISExpenses {
  id: number;
  date: string;
  description: string;
  amount: number;
  category: string;
}

const ExpenseSchema = new Schema<ISExpenses>({
  id: { type: Number, required: true, unique: true },
  date: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  category: { type: String },
});

const Expense: Model<ISExpenses> = model<ISExpenses>("Expense", ExpenseSchema);

export default Expense;
