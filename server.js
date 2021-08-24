const http = require("http");
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let db = mysql.createConnection({
  host: "database-iot-exam.cznnddfnyfw9.ap-southeast-1.rds.amazonaws.com",
  user: "admin",
  password: "barly1997",
  database: "iot_exam",
});

db.connect((err) => {
  if (err) throw err;
  console.log("connected to AWS RDS");
});

app.get("/", function (w, r, n) {
  db.query("SELECT * FROM info", function (err, result) {
    if (err) response.status(400).send("Error in database operation");
    r.json(result);
  });
});

app.listen(8080, function () {
  console.log("server @ 8080");
});
