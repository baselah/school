const http = require('http');
const app = require('./app');

const port = 8001;
const server = http.createServer(app);
server.listen(port, function () {
    console.log(`Server is listening on localhost:${server.address().port}`);
});


