"use strict";
// Expenses.ts
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const expensesSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number
});
const Expenses = mongoose.model("Expense", expensesSchema);
exports.default = Expenses;
