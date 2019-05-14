const http = require('http');

http.createServer(( req, res )=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080, ()=> {
    console.log('Server listening at port 8080');
});