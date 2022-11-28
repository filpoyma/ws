// @ts-nocheck
const express = require('express');
const ws = require('ws');

const app = express();

const renderTemplate = require('./lib/renderTemplate')
const Index = require('./views/Index')

app.use(express.static('public'));

app.get('/', (req, res) => {
  renderTemplate(Index, {}, res);
});

const port = process.env.PORT ?? 3000;

const httpServer = app.listen(port, () => {
  console.log('Server started at: http://localhost:%s', port);
});

const wsServer = new ws.WebSocketServer({
  server: httpServer,
});

// // EventEmitter  Эхо сервер для одного клиента
wsServer.on('connection', (client) => { // on('connection') - когда присоединился клиент
  console.log('>>>> client connected <<<<<');
  client.on('message', (data) => { // client.on('message') - дожидаемся от клиента сообщений (прилетает дата)
    const message = data.toString()
    console.log('>>client send message<<', message);
    client.send(message); // отправляет сообщение обратоно
  });
});


// EventEmitter Эхо сервер для многих клиентов
// wsServer.on('connection', (currentClient) => {
//   console.log('>>>> client connected. clients: ',  wsServer.clients.size); // wsServer.clients -  итерируемый обьект Set
//   // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Set
//
//   currentClient.on('message', (data) => {
//     const message = JSON.parse(data);
//     console.log('>>> save to DataBase');
//     console.log('>>> send messages to all clients', message);
//     wsServer.clients.forEach((client) => {
//       client.send(JSON.stringify(message));
//     });
//   });
//
//   currentClient.on('close', (client) => {
//     console.log('>>>> client disconnected. clients: ',  wsServer.clients.size);
//   });
// });
