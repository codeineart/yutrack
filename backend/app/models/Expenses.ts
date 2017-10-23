// Expenses.ts

import * as mongoose from "mongoose";

export type ExpensesModel = mongoose.Document & {
    id: Number,
    name: String,
    price: Number
  };

const expensesSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});

const Expenses = mongoose.model("Expense", expensesSchema);
export default Expenses;