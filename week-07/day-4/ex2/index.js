const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  const inputName = req.query.name;
  console.log(inputName);
  if (inputName !== undefined) {
    res.render('home', {
      name: inputName
    });
  } else {
    res.render('home', {
      name: 'Guest'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});