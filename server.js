import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.send(`<h1>Running</h1>`);
});

app.listen(4500, () => {
  console.log("Server is running on 4500");
});
