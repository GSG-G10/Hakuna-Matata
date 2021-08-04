const fs = require('fs');
const path = require('path');

const searchHandler = (req, res) => {
  const inputPath = path.join(__dirname, '..', 'data.json');
  fs.readFile(inputPath, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-Type': 'text/html' });
      res.end('<h1> ERROR SERVER</h1>');
    } else {
      res.writeHead(200, { 'content-Type': 'application/json' });
      res.end(data);
    }
  });
};

module.exports = searchHandler;
