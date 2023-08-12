//노드 기반의 서버를 생성하자!
// http 기반의 데이터 송수신을 진행하는 서버
const http = require('http'); //http모듈로부터 http를 반환 받기

const hostname = '127.0.0.1'; //서버 주소 "로컬호스트" 
const port = 3000; //데이터가 송수신되는 통로

//화살표함수: 함수의 표현 방법을 간결하게 만든 것.
//function 지우고 매게변수 뒤에 화살표 추가 
const server = http.createServer((req, res) => { 
//콜백 함수에 req, res 전달. req: 요청, res: 응답
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}); 

//listen: 서버가 구동 중인 상태 (3000번 포트에서 로컬호스로) 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});