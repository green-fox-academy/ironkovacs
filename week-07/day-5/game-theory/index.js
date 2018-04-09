'use strict';
const express = require('express');
const app = express();
const PORT = 3000;

import { copycat, mrCheat, msCoop, avenger, analytic } from './modules/personality';

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

//Game methods

let player = {
  points: 0,
};

let opponent = {
  points: 0,
};

let playerStrategy = '';
let opponentStrategy = '';
let playerResult = [];
let opponentResult = [];

//basic functions
function playerCoop() {
  playerStrategy = 'coop';
}
function playerCheat() {
  playerStrategy = 'cheat';
}
function opponentCoop() {
  opponentStrategy = 'coop';
}
function opponentCheat() {
  opponentStrategy = 'cheat';
}

if (playerStrategy === 'coop') {
  playerResult.push('Cooperated');
  if (playerResult.length > 4) {
    playerResult.splice(0, 1)
  };
  if (opponentStrategy === 'coop') {
    opponent.push('Cooperated');
    if (opponentResult.length > 4) {
      opponentResult.splice(0, 1)
    };
    player.points += 2;
    opponent.points += 2;

  } else if (opponentStrategy === 'cheat') {
    opponent.push('Cheated');
    if (opponentResult.length > 4) {
      opponentResult.splice(0, 1)
    };
    player.points--;
    opponent.points += 3;
  }
} else if (playerStrategy === 'cheat') {
  playerResult.push('Cheateded');
  if (playerResult.length > 4) {
    playerResult.splice(0, 1)
  };
  if (opponentStrategy === 'coop') {
    opponent.push('Cooperated');
    if (opponentResult.length > 4) {
      opponentResult.splice(0, 1);
    };
    player.points += 3;
    opponent.points--;

  } else if (opponentStrategy === 'cheat') {
    opponent.push('Cheated');
    if (opponentResult.length > 4) {
      opponentResult.splice(0, 1)
    };
  }
}

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home', {
    player,
    opponent,
    playerStrategy,
    playerResult,
    playerResult,
    opponentResult

  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
