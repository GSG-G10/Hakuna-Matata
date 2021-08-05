const fs = require('fs');
const path = require('path');

const homeHandler = (res) => {
  const homePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(homePath, 'UTF-8', (error, data) => {
    if (error) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Server Error</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};

module.exports = homeHandler;
