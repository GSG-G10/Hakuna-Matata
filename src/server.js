const http = require('http');
require('env2')('.env');
const router = require('./router');

const port = process.env.PORT || 9000;
const server = http.createServer(router);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is runing at : http://localhost:${port}`);
});
