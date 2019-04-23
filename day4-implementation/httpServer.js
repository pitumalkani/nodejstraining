const http = require('http');
// create a web server
// The web server is an event emitter
const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/hello') {
        res.write('Hello world again');
        res.end();
    }

});

port = 3200;

server.on('connection', function (socket) {
    console.log("new connection...");
});
server.listen(port);
console.log("Listening on port " + port);


