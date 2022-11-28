const express = require('express');
const ws = require('ws');
const morgan = require('morgan');

const app = express();

const renderTemplate = require('./lib/renderTemplate')
const Index = require('./views/Index');
const Err404 = require('./views/Err404');

app.use(express.static('public'));
app.use(morgan('dev'))

app.get('/', (req, res) => {
  renderTemplate(Index, {}, res);
});

app.get('*', (req, res) => {
  renderTemplate(Err404, {}, res);
});

const port = process.env.PORT ?? 3000;

const httpServer = app.listen(port, () => {
  console.log('Server started at: http://localhost:%s', port);
});

const wsServer = new ws.WebSocketServer({
  server: httpServer
})

wsServer.on('connection', (currentClient) => { // слушатель на соединение с клиентом
 
  console.log('Clients connected:', wsServer.clients.size); // wsServer.clients - итерируемый обьект Set, содержащий всех клиентов
  // wsServer.clients.delete(currentClient)
  // console.log(wsServer.clients.size);

  currentClient.on('message', (data) => { // слушатель срабатывает на сообщение от клиента
    const message = JSON.parse(data);
    console.log('Сохраняем сообщение в БД...', message)
    wsServer.clients.forEach((client) => { // рассылка сообщений всем подключеным клиентам
      client.send(JSON.stringify(message));
    });
  })
})

