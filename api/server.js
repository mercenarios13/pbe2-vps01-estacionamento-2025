const express = require('express');
const cors = require('cors');
const routes = require('./src/routes'); // Caminho ajustado para o arquivo routes.js

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('API executando em http://localhost:3000');
});