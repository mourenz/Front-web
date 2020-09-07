const http = require('http')

let server = http.createServer((request, response) => {
    console.log(request.url);
    // console.log("url->"+request.url);
    console.log("---request start-----");
    response.end('200 ok');
    console.log("---response end------");
})

server.listen(8888, () => {
    console.log('-----server start----');
})

