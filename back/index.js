require('dotenv').config();
const express = require('express');
const connection = require('./connection');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

connection.query('SELECT id, destination, tips FROM travel', (err, res) => {
    console.log(res);
});

app.listen(process.env.PORT, (err) => {
    if (err) {
      throw new Error('Une erreur s\' est produite')
    }
  })

