// Expenses.ts

import * as mongoose from "mongoose";

// Creates and export the typedef of the model
export type ExpensesModel = mongoose.Document & {
    id: Number,
    name: String,
    price: Number
  };

// Schema definition for model creation
const expensesSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});

// Model creation and export
const Expenses = mongoose.model("Expense", expensesSchema);
export default Expenses;