/* eslint-disable no-undef */
const supertest = require('supertest');
const router = require('../src/router');

const testPublic = (endpoint) => {
  const contentType = {
    css: 'text/css',
    png: 'image/png',
    jpg: 'image/jpeg',
    html: 'text/html',
    mp3: 'audio/mpeg',
    js: 'application/javascript',
  };
  const fileExtention = endpoint.split('.')[1];
  test(`${fileExtention} file route returns a status code of 200`, (done) => {
    supertest(router)
      .get(endpoint)
      .expect(200)
      .expect('Content-Type', contentType[fileExtention])
      .end((error) => {
        if (error) return done(error);
        return done();
      });
  });
};

['/public/style.css', '/public/audio/hakuna-matata_2.mp3', '/public/images/logo.png', '/public/xhr.js', '/public/dom.js', '/public/images/4897726.jpg'].forEach((element) => {
  testPublic(element);
});

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

