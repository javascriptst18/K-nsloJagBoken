const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (request, res, err) => {
  res.sendFile('index.html');
});
