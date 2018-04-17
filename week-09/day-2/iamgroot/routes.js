const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  message = req.query.message;

  if (message === undefined) {
    res.status(500).send({ error: 'Status is not Ok' })
  } else {
    res.json({
      "received": message,
      "translated": "I am Groot!"
    })
  }
});

module.exports = app;
