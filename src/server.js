const http=require("http");
require("env2")(".env");
const router=require("../src/router");
const server = http.createServer(router);
const PORT = process.env.PORT || 9000;

server.listen(PORT,() => {
    console.log(`server is runing at : http://localhost:${PORT}`);
});
