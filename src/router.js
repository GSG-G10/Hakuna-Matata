const homeHandler = require('./handlers/homeHandler');
const publicHandler = require('./handlers/publicHandler');
const searchHandler = require('./handlers/searchHandler');

const router = (req, res) => {
  const endPoint = req.url;
  if (endPoint === '/') {
    homeHandler(req, res);
  } else if (endPoint.includes('public')) {
    publicHandler(req, res);
  } else if (endPoint === '/input') {
    searchHandler(req, res);
  }
};

module.exports = router;
