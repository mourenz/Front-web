const querystring =  require('querystring')
const http =  require('http')

let queryParams = 'foo=bar&abc=xyz&abc=123';
console.log(querystring.parse(queryParams)); //=> { foo: 'bar', abc: [ 'xyz', '123' ] }

let server = http.createServer((request, response) => {
    console.log(request.url);
    console.log("---request start-----");
    response.end('200 ok');
    console.log("---response end------");
})




server.listen(8888, () => {
    // console.log(ejs);
    console.log('-----server start----');
})
