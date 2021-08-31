const express = require("express");
const cors = require("cors");
const logger = require("morgan");

// const products = require("./products");
const api = require("./api");

const app = express();

app.use(cors());
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

app.use("/api/v1/products", api.products);

app.listen(4000);

// 1 вариант деструктуризауции порта с присвоением
// const { PORT = 3000 } = process.env;

// 2 вариант, тоже самое что и первый, но хуже
// const PORT = process.env.PORT || 3000;
