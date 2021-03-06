const express = require('express'); //express 모듈 추출 (서버 모듈)
//const http = require('http'); //http 모듈 추출 (서버 모듈)
var fs = require('fs'); //fs 모듈 추출 (파일 입출력 관련 모듈)

const app = express();
//const server = http.createServer(app);
//웹 서버 생성

app.listen(3000, function () {
    console.log('server running at http://127.0.0.1:3000');
});//server 실행

app.use('/public', express.static(__dirname + '/public'))//public 폴더 경로 설정.

app.get('/', function (request, response) {
    fs.readFile("./page/main.html", function (error, data) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
    });
}); //메인 화면

app.get('/kakao', function (request, response) {
    fs.readFile('./page/kakao.html', function (error, data) {
        response.send(data.toString());
    });
}); //Kakao Open API 활용

app.get('/data', function (request, response) {
    fs.readFile('./page/data.html', function (error, data) {
        response.send(data.toString());
    });
}); //공공데이터 Open API + Youtube API 활용