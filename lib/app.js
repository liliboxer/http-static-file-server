const { createServer } = require('http');
const { parse } = require('url');

const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/plain');
  if(pathname === '/index.html') {
    res.end('path working');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

module.exports = app;
