const express = require('express');
const veiculoRoutes = require('./veiculo');
const estadiaRoutes = require('./estadia');

const routes = express.Router();

routes.use('/veiculos', veiculoRoutes);
routes.use('/estadias', estadiaRoutes);

routes.get('/', (req, res) => {
  return res.json({ titulo: 'Estacionamento ACME' });
});

module.exports = routes;