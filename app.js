//http

// const http = require("http");

// const server = http.createServer((request, response) => {
//   // console.log("Server get request");
//   const { url } = request;

//   switch (url) {
//     case "/":
//       response.write("Home page");
//       break;

//     case "/contacts":
//       response.write("Contacts page");
//       break;

//     default:
//       response.write("Not found");
//       break;
//   }
//   response.end();

//   //   response.write("Welcome to hell!");
//   //   response.end();
// });
// server.listen(3000);

// express
// const express = require("express");
// const fs = require("fs/promises");
// const moment = require("moment");

// const app = express();

// app.use(async (req, res, next) => {
//   const date = moment().format("DD-MM-YYYY_hh:mm:ss");
//   const { url, method } = req;
//   await fs.appendFile("server.log", `\n ${date} ${method} ${url}`);
//   next();
// });

// app.get("/", (req, res) => {
//   res.send("<h2>Home page</h2>");
// });
// app.get("/contacts", (req, res) => {
//   res.send("<h2>Contacts page</h2>");
// });

// app.use((_, res) => {
//   res.status(404).send("Not found");
// });

// app.listen(4000);

const express = require("express");
const cors = require("cors");

const products = require("./products");

const app = express();

app.use(cors());

app.get("/products", (req, res) => {
  res.json(products);
  // res.send(products);
});

app.listen(4000);
