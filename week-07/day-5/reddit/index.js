'use strict';
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',

});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

app.get('/post', (req, res) => {
  const post = req.query;
  res.json({
    posts: [
      {
        id: post.id,
        title: post.title,
        url: post.url,
        timestamp: timestamp,
        score: post.score,
      },]
  });
});

app.post


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
