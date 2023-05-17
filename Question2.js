// Write a simple Express.js route that takes in a parameter from the URL and returns it as a
// response.

const express = require('express');
const app = express();
const port = 3000;

app.get('/parameter/:param', (req, res) => {
  const paramValue = req.params.param;
  res.send(`Parameter value: ${paramValue}`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});