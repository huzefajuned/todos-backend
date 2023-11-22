// 1. Creating a  single todo--
import express, { Request, Response } from "express";
import { ReadTodos, createTodo } from "../api.controllers/todo.controller";
const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.send("test route---");
});
router.post("/create", createTodo);
router.get("/read", ReadTodos);

export default router;
