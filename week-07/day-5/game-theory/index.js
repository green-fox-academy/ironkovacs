'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');


let player = {
  points: 14,
};

let opponent = {
  points: 0,
};

let playerResult = [0, 0, 1, 1, 0,];
let opponentResult = [1, 1, 1, 1, 1];
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