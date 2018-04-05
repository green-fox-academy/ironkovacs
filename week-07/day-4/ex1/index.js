const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page
app.get('/', (req, res) => {
  // render `home.ejs`
  res.render('home',{
    title: 'hello world'
  });
});

//Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

