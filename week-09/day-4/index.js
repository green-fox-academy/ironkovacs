const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'game_theory',
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

let score = 0;

app.get('/', (req, res) => {
  let sqlQ = 'SELECT * from questions;';
  let queryInputs = [];

  conn.query(sqlQ, queryInputs, (errQ, rowsQ) => {
    if (errQ) {
      console.log(errQ); // eslint-disable-line
      res.status(500).send();
      return;
    }

    const questionID = Math.floor(Math.random() * rowsQ.length);
    const sqlA = `SELECT * from answers where question_id = ${questionID + 1};`;

    conn.query(sqlA, queryInputs, (errA, rowsA) => {
      if (errA) {
        console.log(errA); // eslint-disable-line
        res.status(500).send();
        return;
      }
      console.log(rowsA); // eslint-disable-line
      res.render('index', {
        score,
        id: questionID,
        question: (rowsQ[questionID].question),
        answers: rowsA,
      });
    });
  });
});

app.post('/quiz/new', (req, res) => {
  const {
    question, answer0, answer1, answer2, answer3, 
  }
  let sql = `INSERT INTO 'game_theory'.'questions' (question) VALUES (${});`);

});


app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`); // eslint-disable-line
});
