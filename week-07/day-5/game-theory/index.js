'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

let player = {
  points: 14,
};

let opponent = {
  points: 0,
};

let playerResult = ['Cheat', 'Cheat', 'Cooperate', 'Cooperate', 'Cheat'];
let opponentResult = ['Cooperate', 'Cooperate', 'Cooperate', 'Cooperate', 'Cheat'];
// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    player,
    opponent,
    playerResult,
    opponentResult

  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});