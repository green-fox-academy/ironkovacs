const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'game_theory',
  port: 3306,
});

let sql = 'SELECT * FROM game_theory LIMIT 5;';

connection(sql, (err, result) => {
  if (err) {
    console.log(err); //eslint-disable-line
  }
  console.log(result);
});
