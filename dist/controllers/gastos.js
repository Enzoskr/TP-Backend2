"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.createExpense = exports.getExpenseByID = exports.getExpenses = void 0;
const gastos_1 = __importDefault(require("../models/gastos"));
const getExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const condicion = {
    //   estado: true,
    // };
    const expenses = yield gastos_1.default.find();
    res.json({
        msg: "Gastos hechos",
        expenses,
    });
});
exports.getExpenses = getExpenses;
const getExpenseByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const expense = yield gastos_1.default.findOne({ id: id });
    res.json({
        expense,
    });
});
exports.getExpenseByID = getExpenseByID;
const createExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const expensesData = req.body;
    const { id, date, amount, category, description } = expensesData;
    if (!id || !date || !amount || !category || !description) {
        res.json({
            msg: "Datos incompletos",
        });
        return;
    }
    const expenseinDb = yield gastos_1.default.findOne({ id: id });
    if (expenseinDb) {
        res.json({
            msg: "Ya existe un gasto con ese ID",
        });
        return;
    }
    const expense = new gastos_1.default({
        id,
        date,
        amount,
        category,
        description,
    });
    yield expense.save();
    res.json({
        msg: "Gasto creado",
        expense,
    });
});
exports.createExpense = createExpense;
const deleteExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const expenseinDb = yield gastos_1.default.findOne({ id: id });
    if (!expenseinDb) {
        res.json({
            msg: "El gasto no existe",
        });
    }
    const expense = yield gastos_1.default.findOneAndDelete({ id: id });
    // const expense = await Expense.findOneAndUpdate(
    //   { id: id },
    //   { estado: false },
    //   { new: true }
    // );
    res.json({
        msg: "Gasto borrado",
        expense,
    });
});
exports.deleteExpense = deleteExpense;
