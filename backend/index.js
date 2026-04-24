const http = require('http');
const url = require('url');

const races = [
  { id: 1, race: "Australian Grand Prix",     winner: "Lando Norris" },
  { id: 2, race: "Chinese Grand Prix",        winner: "Oscar Piastri" },
  { id: 3, race: "Japanese Grand Prix",       winner: "Max Verstappen" },
  { id: 4, race: "Bahrain Grand Prix",        winner: "Oscar Piastri" },
  { id: 5, race: "Saudi Arabian Grand Prix",  winner: "George Russell" },
  { id: 6, race: "Miami Grand Prix",          winner: "Lando Norris" },
  { id: 7, race: "Emilia Romagna Grand Prix", winner: "Max Verstappen" },
  { id: 8, race: "Monaco Grand Prix",         winner: "Charles Leclerc" },
  { id: 9, race: "Spanish Grand Prix",        winner: "Lando Norris" },
  { id: 10, race: "Canadian Grand Prix",      winner: "Kimi Antonelli" },
];

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const parsed = url.parse(req.url, true);

  if (parsed.pathname === '/races') {
    res.writeHead(200);
    res.end(JSON.stringify(races));
  } else if (parsed.pathname === '/winner') {
    const id = parseInt(parsed.query.id);
    const race = races.find(r => r.id === id);
    if (race) {
      res.writeHead(200);
      res.end(JSON.stringify({ winner: race.winner }));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Race not found' }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(3000, () => {
  console.log('Backend running on port 3000');
});
