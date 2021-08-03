/* eslint-disable linebreak-style */
const path = require('path');
const fs = require('fs');

const publicHandler = (req, res) => {
  const endpoint = req.url;
  const fileExtention = endpoint.split('.')[1];
  const contentType = {
    css: 'text/css',
    png: 'image/png',
    jpg: 'image/jpeg',
    html: 'text/html',
    mp3: 'audio/mpeg',
    js: 'application/javascript',
  };
  const publicPath = path.join(__dirname, '..', '..', endpoint);
  fs.readFile(publicPath, (error, data) => {
    if (error) {
      res.writeHeader(500, { 'Content-Type': contentType[fileExtention] });
      res.end('Server Error!');
    } else {
      res.writeHeader(200, { 'Content-Type': contentType[fileExtention] });
      res.end(data);
    }
  });
};

module.exports = publicHandler;
