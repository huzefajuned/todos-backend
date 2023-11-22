import { Request, Response } from "express";
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//
export const createTodo = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const payload = req.body;

    const todo = await prisma.todo.create({
      data: payload,
    });

    console.log(todo);
  } catch (error) {
    console.log(error);
  }
};

export const ReadTodos = async (req: Request, res: Response) => {
  res.send({ name: "huzefa" });
};
// export default createTodo ReadTodos ;
