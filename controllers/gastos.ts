import { Request, Response } from "express";

import Expense, { ISExpenses } from "../models/gastos";

export const getExpenses = async (req: Request, res: Response) => {
  const condicion = {
    estado: true,
  };

  const expenses = await Expense.find(condicion);

  res.json({
    msg: "Gastos hechos",
    expenses,
  });
};

export const getExpenseByID = async (req: Request, res: Response) => {
  const { id } = req.params;

  const expense: ISExpenses | null = await Expense.findOne({ id: id });

  res.json({
    expense,
  });
};

export const createExpense = async (req: Request, res: Response) => {
  const expensesData: ISExpenses = req.body;

  const { id, date, amount, category, description } = expensesData;

  if (!id || !date || !amount || !category || !description) {
    res.json({
      msg: "Datos incompletos",
    });
    return;
  }

  const expenseinDb = await Expense.findOne({ id: id });
  if (expenseinDb) {
    res.json({
      msg: "Ya existe un gasto con ese ID",
    });
    return;
  }

  const expense = new Expense({
    id,
    date,
    amount,
    category,
    description,
  });

  await expense.save();

  res.json({
    msg: "Gasto creado",
    expense,
  });
};

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params;

  const expenseinDb = await Expense.findOne({ id: id });

  if (!expenseinDb) {
    res.json({
      msg: "El gasto no existe",
    });
  }
  const expense = await Expense.findOneAndDelete({ id: id });

  // const expense = await Expense.findOneAndUpdate(
  //   { id: id },
  //   { estado: false },
  //   { new: true }
  // );

  res.json({
    msg: "Gasto borrado",
    expense,
  });
};
