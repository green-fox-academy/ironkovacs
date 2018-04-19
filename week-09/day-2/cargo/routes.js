const express = require('express');
const app = express();

let ship = {
  "caliber25": 0,
  "caliber30": 0,
  "caliber50": 0,
  "shipstatus": '',
  "ready": false
}

function shipStatus() {
  let cargoStatus = (ship.caliber25 + ship.caliber30 + ship.caliber50);
  if (cargoStatus === 0) {
    ship.shipstatus = 'empty';
  }
  if (cargoStatus > 0 && cargoStatus < 12500) {
    ship.shipstatus = `${cargoStatus / 125}%`;
  }
  if (cargoStatus === 12500) {
    ship.shipstatus = 'full';
  }
  if (cargoStatus > 12500) {
    ship.shipstatus = 'overloaded';
  }
  ship.ready = (ship.shipstatus === 'full');
}

app.get('/rocket', (req, res) => {
  if (req === undefined) {
    res.status(500).send({ error: 'Status is not Ok' })
  } else {
    shipStatus()
    res.json(ship)
  }
});

app.get('/rocket/fill', (req, res) => {
  input = req.query;
  caliber = input.caliber;
  amount = input.amount;
  console.log(input);
  if (input === '{}') {
    res.status(500).send({ error: 'Status is not Ok' })
  } else {
    switch (caliber) {
      case '.25':
        ship.caliber25 = parseInt(ship.caliber25) + parseInt(amount);
        break;
      case '.30':
        ship.caliber30 = parseInt(ship.caliber30) + parseInt(amount);
        break;
      case '.50':
        ship.caliber50 = parseInt(ship.caliber50) + parseInt(amount);
        break;
    }
    shipStatus()

    res.json({
      "recived": caliber,
      "amount": amount,
      "shipstatus": ship.shipstatus,
      "ready": ship.ready,
    })
  }
});
module.exports = app;
