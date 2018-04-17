const action = require('./actions');

function copycat() {
  if (opponentResult.length <= 0 || playerStrategy[playerStrategy.length - 1] === 'coop') {
    action.opponentCoop();
  }
  if (playerStrategy[playerStrategy.length - 1] === 'cheat') {
    action.opponentCheat();
  }
}

function mrCheat() {
  action.opponentCheat();
}

function msCoop() {
  action.opponentCoop();
}

function avenger() {
  if (playerStrategy.indexOf('cheat') !== -1) {
    action.opponentCoop();
  } else {
    action.opponentCheat();
  }
}

module.exports = {
  copycat, mrCheat, msCoop, avenger,
};
