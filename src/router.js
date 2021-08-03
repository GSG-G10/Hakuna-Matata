const homeHandler = require('./handlers/homeHandler');

const router = (req, res) => {
  const endPoint = req.url;
  if (endPoint === '/') {
    homeHandler(req, res);
  }
};

module.exports = router;
