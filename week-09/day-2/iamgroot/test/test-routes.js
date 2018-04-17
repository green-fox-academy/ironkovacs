'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');



test('groot endpoint', (t) => {
  request(app)
    .get('/groot/?message=somemessage')
    .expect(200)
    .expect('Content-Type', /json/)
    .expect({
      "received": "somemessage",
      "translated": "I am Groot!"
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});

test('groot endpoint', (t) => {
  request(app)
    .get('/groot/')
    .expect(500)
    .expect('Content-Type', /json/)
    .expect({
      error: 'Status is not Ok'
  })
    .end((err, res) => {
      t.error(err);
      t.end();
    });
});
