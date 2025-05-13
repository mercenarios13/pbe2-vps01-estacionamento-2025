const { PrismaClient } = require('@prisma/client');
const express = require('express');

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { placa, modelo, cor, ano } = req.body;
  try {
    const veiculo = await prisma.veiculo.create({
      data: { placa, modelo, cor, ano },
    });
    res.json(veiculo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar veículo.' });
  }
});

module.exports = router;