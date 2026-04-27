const http = require('http');
const url = require('url');

const races = [
  { id: 1,  race: "Australian Grand Prix",        winner: "Lando Norris" },
  { id: 2,  race: "Chinese Grand Prix",           winner: "Oscar Piastri" },
  { id: 3,  race: "Japanese Grand Prix",          winner: "Max Verstappen" },
  { id: 4,  race: "Bahrain Grand Prix",           winner: "Oscar Piastri" },
  { id: 5,  race: "Saudi Arabian Grand Prix",     winner: "Oscar Piastri" },
  { id: 6,  race: "Miami Grand Prix",             winner: "Oscar Piastri" },
  { id: 7,  race: "Emilia Romagna Grand Prix",    winner: "Max Verstappen" },
  { id: 8,  race: "Monaco Grand Prix",            winner: "Lando Norris" },
  { id: 9,  race: "Spanish Grand Prix",           winner: "Oscar Piastri" },
  { id: 10, race: "Canadian Grand Prix",          winner: "George Russell" },
  { id: 11, race: "Austrian Grand Prix",          winner: "Dr. Vitályos Eszter (hiányzol)" },
  { id: 12, race: "British Grand Prix",           winner: "Lando Norris" },
  { id: 13, race: "Belgian Grand Prix",           winner: "Oscar Piastri" },
  { id: 14, race: "Hungarian Grand Prix",         winner: "Lando Norris" },
  { id: 15, race: "Dutch Grand Prix",             winner: "Oscar Piastri" },
  { id: 16, race: "Italian Grand Prix",           winner: "Max Verstappen" },
  { id: 17, race: "Azerbaijan Grand Prix",        winner: "Max Verstappen" },
  { id: 18, race: "Singapore Grand Prix",         winner: "George Russell" },
  { id: 19, race: "United States Grand Prix",     winner: "Max Verstappen" },
  { id: 20, race: "Mexico City Grand Prix",       winner: "Lando Norris" },
  { id: 21, race: "São Paulo Grand Prix",         winner: "Lando Norris" },
  { id: 22, race: "Las Vegas Grand Prix",         winner: "Max Verstappen" },
  { id: 23, race: "Qatar Grand Prix",             winner: "Max Verstappen" },
  { id: 24, race: "Abu Dhabi Grand Prix",         winner: "Max Verstappen" },
];;

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
