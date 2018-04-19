'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

//The overall status of the ship and test for empty
test('/rocket endpoint', (t) => {
  request(app)
    .get('/rocket')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "caliber25": 0,
      "caliber30": 0,
      "caliber50": 0,
      "shipstatus": "empty",
      "ready": false
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

//The status when you fill some items
test('/rocket/load endpoint load from empty', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.30&amount=1500')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "recived": ".30",
      "amount": "1500",
      "shipstatus": "12%",
      "ready": false
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('/rocket/load endpoint 2nd load', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=1500')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "recived": ".50",
      "amount": "1500",
      "shipstatus": "24%",
      "ready": false
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});



// That the shipstatus is:"40%" when its 40%
test('/rocket/load endpoint 3rd load for 40%', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.25&amount=2000')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "recived": ".25",
      "amount": "2000",
      "shipstatus": "40%",
      "ready": false
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
test('/rocket endpoint for 40%', (t) => {
  request(app)
    .get('/rocket')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "caliber25": 2000,
      "caliber30": 1500,
      "caliber50": 1500,
      "shipstatus": "40%",
      "ready": false
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

// That the shipstatus is:"full" when its 100%
test('/rocket/load endpoint 3rd load for 100%', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=7500')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "recived": ".50",
      "amount": "7500",
      "shipstatus": "full",
      "ready": true
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
test('/rocket endpoint for 100%', (t) => {
  request(app)
    .get('/rocket')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "caliber25": 2000,
      "caliber30": 1500,
      "caliber50": 9000,
      "shipstatus": "full",
      "ready": true
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

// That the shipstatus is:"overloaded" when its above 100%
test('/rocket/load endpoint 3rd load for Overladed', (t) => {
  request(app)
    .get('/rocket/fill?caliber=.50&amount=500')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "recived": ".50",
      "amount": "500",
      "shipstatus": "overloaded",
      "ready": false
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
test('/rocket endpoint for Overloaded', (t) => {
  request(app)
    .get('/rocket')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "caliber25": 2000,
      "caliber30": 1500,
      "caliber50": 9500,
      "shipstatus": "overloaded",
      "ready": false
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

