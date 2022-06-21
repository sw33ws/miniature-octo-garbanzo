const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection(
  {
    host:'localhost',
    user: 'root',
    password: '',
    database: 'EmployeeTracker_db'
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  module.exports = db;