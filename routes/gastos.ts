import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpenseByID,
  getExpenses,
} from "../controllers/gastos";

const router = Router();

router.get("/", getExpenses);

router.post("/", createExpense);

router.get("/:id", getExpenseByID);

router.delete("/:id", deleteExpense);

export default router;
