const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "D3_96338_ayush",
  password: "Ayush@2003",
  database: "test",
});

module.exports = pool;
