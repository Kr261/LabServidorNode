import chalk from 'chalk';
import http from 'http';

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  const response = JSON.stringify({ nombre: 'Kristin', mensaje: 'Hola desde mi servidor!' });
  res.end(response);
});

server.listen(port, host, () => {
  console.log(chalk.green(`El servidor está escuchando en http://${host}:${port}`));
});
