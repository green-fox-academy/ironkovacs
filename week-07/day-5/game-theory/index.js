const express = require('express');
const path = require('path');
const mysql = require('mysql');
const Personality = require('./modules/personality');

const app = express();
const PORT = 3000;
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'game_theory',
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


// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

// Game methods
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


if (playerStrategy === 'coop') {
  playerResult.push('Cooperated');
  if (playerResult.length > 4) {
    playerResult.splice(0, 1);
  };
  if (opponentStrategy === 'coop') {
    opponent.push('Cooperated');
    if (opponentResult.length > 4) {
      opponentResult.splice(0, 1);
    };
    player.points += 2;
    opponent.points += 2;

  } else if (opponentStrategy === 'cheat') {
    opponent.push('Cheated');
    if (opponentResult.length > 4) {
      opponentResult.splice(0, 1);
    }
    player.points -= 1;
    opponent.points += 3;
  }
} else if (playerStrategy === 'cheat') {
  playerResult.push('Cheateded');
  if (playerResult.length > 4) {
    playerResult.splice(0, 1);
  }
  if (opponentStrategy === 'coop') {
    opponent.push('Cooperated');
    if (opponentResult.length > 4) {
      opponentResult.splice(0, 1);
    }
    player.points += 3;
    opponent.points -= 1;
  } else if (opponentStrategy === 'cheat') {
    opponent.push('Cheated');
    if (opponentResult.length > 4) {
      opponentResult.splice(0, 1);
    }
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
    opponentResult,
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); //eslint-disable-line
});
