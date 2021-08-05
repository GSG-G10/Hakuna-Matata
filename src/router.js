const handlers = require('./handlers/handlers');

const router = (req, res) => {
  const endPoint = req.url;
  if (endPoint === '/') {
    handlers.homeHandler(req, res);
  } else if (endPoint.includes('public')) {
    handlers.publicHandler(req, res);
  } else if (endPoint === '/input') {
    handlers.searchHandler(req, res);
  } else {
    res.writeHead(404, {"Content-Type" : "text/plain"})
    res.end("Page Not Found!")
  }
};

module.exports = router;
