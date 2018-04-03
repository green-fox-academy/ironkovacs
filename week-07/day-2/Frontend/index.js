const express = require('express');
const app = express();
const PORT = 8080;
const PATH = require('path');
const bodyParser = require('body-parser');

app.use('/static', express.static('static'));
app.use('/assets', express.static('assets'));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(PATH.join(__dirname, './index.html'));
});

//EX1 DOubling
app.get('/doubling', (req, res) => {
  const inputEx1 = req.query.input;
  if (inputEx1 != undefined) {
    res.json({
      received: inputEx1,
      result: inputEx1 * 2,
    });
  } else {
    res.json({
      error: "Please provide an input!",
    })
  }
});

//EX2 Greeter
app.get('/greeter/', (req, res) => {
  const inputEx2 = req.query;
  console.log(inputEx2);
  if (inputEx2.name != undefined && inputEx2.title != undefined) {
    res.json({
      welcome_message: `Oh, hi there ${inputEx2.name}, my dear ${inputEx2.title}!`,
    });
  } else if (inputEx2.name == undefined) {

    res.json({
      "error": "Please provide a name!",
    })
  } else if (inputEx2.title == undefined) {

    res.json({
      "error": "Please provide a title!",
    })
  }
});

//EX3 AppendA
app.get('/appenda/:appendable', (req, res) => {
  const inputEx3 = req.params.appendable + 'a';
  res.json({
    appended: inputEx3,
  });
});


//EX4 Do until
app.post('/dountil/:what', (req, res) => {
  const num = req.body.until;
  const what = req.params.what;
  let result = 0;
  if (what === "sum") {
    for (let i = 0; i <= num; i++) {
      result += i;
    }
    res.json({
      "result": result
    });
  } else if (what === "factor") {
    result++;
    if (num <= 0) {
      res.json({
        "result": result
      })
    }
    else {
      for (let i = 1; i <= num; i++) {
        result = result * i;
      }
      res.json({
        "result": result
      });
    }
  }
  if (num === undefined || num === NaN) {
    res.json({
      "error": "Please provide a number!",
    })
  }
});

//EX5 Array handler

//EX6 Yoda

//EX7 The Hungarian CamelIzer Service
app.post('/translate/', (res, req) => {
  function teve(text) {
    let vowels = ['a', 'á', 'e', 'é', 'i', 'í', 'o', 'ó', 'ö', 'ő', 'u', 'ú', 'ü', 'ű']
    vowels.forEach(e => {
      let replce = new RegExp(e, "g");
      text = text.replace(replce, `${e}v${e}`)
    });
    return text;
  }

  const text = req.query.text;
  const lang = req.query.lang;



  if (lang == undefined || text == undefined) {
    res.json({
      "error": "I can't translate that!"
    })
  }
  if (text != undefined) {
    if (lang == 'hu') {
      teve(text);
    }
    if (lang == 'en') {
      gibberish(text);
    }
  }

})