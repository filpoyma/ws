const express = require('express');

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
