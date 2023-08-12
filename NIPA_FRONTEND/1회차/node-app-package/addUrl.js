const http = require('http'); //인터넷 프로토콜을 사용해 읽기
const fs = require('fs'); 
const url = require('url'); //서버가 문서의 주소 해석 후 제공 
var morgan = require('morgan') //생략가능
 
var logger = morgan('tiny') //로그기록
const hostname = '127.0.0.1'; //로컬호스트
const port = 3000; 

//createServer 서버만들기  
const server = http.createServer(function (req, res) {
  
  //서버 앱 내에서 접근할 경로를 해석
  const pageURL = req.url;  //요청주소 읽어들이기
  const pathname = url.parse(pageURL, true).pathname; //parse메소드가 주소 해석 

  logger(req, res, function (err) { //logger: 기능이 구현될 것 
    if (err) return console.log(err)
 
    if (pathname === "/"){ // pathname ==='/' (3000이면) 경로따로 지정하지 않음 
      
    fs.readFile("./public/lotto.html", function(err, data){ //lotto.html 제공이 기본값
      res.statusCode = 200;
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(data)
    })
 
  } else if (pathname === "/style.css"){  //주소 경로가 해당 파일을 요청하면 제공하겠다는 if문 
      fs.readFile("./public/style.css", 'utf8', function(err, data){
        res.writeHead(200);
        res.write(data);
        res.end();
      })
  } else if (pathname === "/script.js"){ 
    fs.readFile("./public/script.js", 'utf8', function(err, data){
      res.writeHead(200);
      res.write(data);
      res.end();
    })
  }

  })
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});