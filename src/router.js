const homeHandler = require('./handlers/homeHandler');
const publicHandler = require('./handlers/publicHandler')

const router = (req, res) => {
  const endPoint = req.url;
  if (endPoint === '/') {
    homeHandler(req, res);
  } else if (endPoint.includes('public')) {
    publicHandler(req, res);
  }
};

module.exports = router;
