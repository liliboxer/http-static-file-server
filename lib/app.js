const { createServer } = require('http');
// const { parse } = require('url');

const app = createServer((req, res) => {
  // const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/plain');
  res.end('i work');
});

module.exports = app
;
