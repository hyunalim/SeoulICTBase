const http = require('http');
//morgan에서 morgan 가져오기
const morgan=require("morgan")
//logger로 저장
const logger=morgan("combined")


const hostname = '127.0.0.1';
const port = 3000;

//logger에 콜백함수 넣기
const server = http.createServer(function (req, res) {
  logger(req, res, function (err) {
    if (err) return console.log(err)
 
    res.statusCode = 200;
    res.setHeader('content-type', 'text/plain')
    res.end('hello, world!')
  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});