const { createServer } = require('http');
const { parse } = require('url');
const { readFile } = require('./read-file');

const app = createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/html');
  if(pathname === '/index.html') {
    readFile('./public/index.html', (err, content) => {
      if(err && err.code === 'ENOENT') {
        res.end('Not Found');
      }
      res.end(content);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

module.exports = app;
