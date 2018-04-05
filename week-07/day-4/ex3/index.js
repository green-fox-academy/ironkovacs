const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

const todos = [
  'get up',
  'survive',
  'go back to bed',
];

// home page
app.get('/', (req, res) => {
  const input = req.query;
  res.render('home', {
    todos
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
