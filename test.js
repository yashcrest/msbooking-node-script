//this is vanilla nodeJS
const port = 3000;
const http = require('http');
const { hostname } = require('os');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Testing with vanilla node HTTP module to check for MS Booking\n');
})

server.listen((port, hostname, () => {
    console.log(`server running on http://${hostname}/${port}/`);
}))