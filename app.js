const http = require("http");

const server = http.createServer((request, response) => {
  // console.log("Server get request");
  const { url } = request;

  switch (url) {
    case "/":
      response.write("Home page");
      break;

    case "/contacts":
      response.write("Contacts page");
      break;

    default:
      response.write("Not found");
      break;
  }
  response.end();

  //   response.write("Welcome to hell!");
  //   response.end();
});

server.listen(3000);
