/* eslint-disable no-undef */
const supertest = require('supertest');
const router = require('../src/router');

test('home route returns a status code of 200 ', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((error, res) => {
      if (error) return done(error);
      expect(typeof res.text).toBe('string');
      return done();
    });
});
