import express from "express";
import checkDatabaseConnection from "./api.connection/connection";
import todosRouter from "./api.routes/todo.route";
const app = express();
const PORT = process.env.PORT || 3300;
import bodyParser from "body-parser";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/// checking Database connection....
checkDatabaseConnection();
app.use(todosRouter);

// Listening on port 5501
app.listen(PORT, (): void => {
  console.log(`Backend listening on ${PORT}`);
});
