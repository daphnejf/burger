var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "@D#ImA1908",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;