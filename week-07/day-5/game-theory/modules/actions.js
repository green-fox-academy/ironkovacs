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

module.exports = {
  playerCoop, playerCheat, opponentCoop, opponentCheat,
};
