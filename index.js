const http = require("http");
const express = require("express");
const app = express();

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Welcome to the about us page");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to the contact us page");
});

app.listen(8000, () => console.log("Sever Started!"));
