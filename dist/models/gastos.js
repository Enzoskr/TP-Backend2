"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ExpenseSchema = new mongoose_1.Schema({
    id: { type: Number, required: true, unique: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String },
});
const Expense = (0, mongoose_1.model)("Expense", ExpenseSchema);
exports.default = Expense;
