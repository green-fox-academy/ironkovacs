
function copycat() {
  if (opponentResult.length <= 0 || playerStrategy[playerStrategy.length - 1] === 'coop') {
    opponentCoop();
  }
  if (playerStrategy[playerStrategy.length - 1] === 'cheat') {
    opponentCheat();
  }
}

function mrCheat() {
  opponentCheat();
}

function msCoop() {
  opponentCoop();
}

function avenger() {
  if (playerStrategy.indexOf('cheat') !== -1) {
    opponentCoop();
  } else {
    opponentCheat();
  }
}

function analytic() {
  if (opponentStrategy.length > 0) {
    opponentStrategy = [];
  }
}

module.exports = { copycat, mrCheat, msCoop, avenger, analytic };