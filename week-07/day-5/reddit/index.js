const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();
const PORT = 3000;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'reddit',
  port: 3306,
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use(express.json());

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!'); //eslint-disable-line
});

app.get('/', (req, res) => {
  let sql = 'SELECT * FROM reddit_post LIMIT 20;';
  let queryInputs = [];
  if (req.query.type !== undefined) {
    sql = 'SELECT * FROM reddit_post WHERE type = ? LIMIT 20;';
    queryInputs = [req.query.type];
  }
  connection.query(sql, queryInputs, (err, result) => {
    if (err) {
      console.log(err); //eslint-disable-line
      res.sendStatus(500);
    }
    console.log(result);
    res.render('home', {
      title: 'JETit!',
      history: result,
    });
  });
});

app.get('/newpost', (req, res) => {
  res.render('newPost.ejs', {
    title: 'JETit!',
  });
});

app.post('/post', (req, res) => {
  const sql = 'INSERT INTO reddit_post (title, url, score) VALUES (?, ?, ?);';
  const post = req.body;
  const queryInputs = [post.title, post.url, 0];

  connection.query(sql, queryInputs, (err, result, fields) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      console.log(result);
      console.log(fields);
      res.json({
        id: 3,
        title: post.title,
        url: post.url,
        score: post.score,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`); //eslint-disable-line
});
