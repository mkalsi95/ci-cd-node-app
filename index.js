const http = require('http');
const { getRandomQuote } = require('./quotes');

const server = http.createServer((req, res) => {
  if (req.url === '/quote') {
    const quote = getRandomQuote();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ quote }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});