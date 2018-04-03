const express = require('express');
const app = express();
const PORT = 3000;
const PATH = require('path');
const bodyParser = require('body-parser');

app.use('/static', express.static('static'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(PATH.join(__dirname, './index.html'));
});

app.get('/api/hello', (req, res) => {
  console.log(req.query);
  const name = req.query.name || 'Guest';
  res.json({
    message: `hello ${name}`,
  });
});

const mentors = [
  { name: 'István', age: 31 },
  { name: 'Bence', age: 42 },
  { name: 'Balázs', age: 27 },
];

const listMentors = (req, res) => {
  console.log(res);
  res.json(mentors);
}

app.get('/api/mentors', listMentors);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});


app.get('/api/mentors/:mentorID', (req, res) => {
  const mentor = mentors[req.params.mentorID - 1];

  if (mentor === undefined) {
    res.status(403);
    res.json({
      message: `no mentors with id ${req.params.mentorID}`
    })
  } else {
    res.json(mentors[req.params.mentorID - 1]);
  }
});

app.post('api/endpoint', (req, res) => {
  console.log(req.body);
  res.json({
    message: 'OK',
  });
});
