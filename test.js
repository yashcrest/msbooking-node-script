//this is vanilla nodeJS
const port = 3000;
const http = require('http');
const { hostname } = require('os');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello world\n');
})

server.listen((port, hostname, () => {
    console.log(`server running on http://${hostname}/${port}/`);
}))