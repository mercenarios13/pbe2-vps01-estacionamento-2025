const express = require('express');
const veiculoRoutes = require('./veiculo'); // Certifique-se de que o caminho está correto
const estadiaRoutes = require('./estadia'); // Certifique-se de que o caminho está correto

const routes = express.Router();

routes.use('/veiculos', veiculoRoutes); // Define as rotas de veículos
routes.use('/estadias', estadiaRoutes); // Define as rotas de estadias

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Estacionamento ACME' });
});

module.exports = routes;