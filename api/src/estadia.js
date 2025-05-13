import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req, res) => {
  const { veiculoId } = req.body;
  try {
    const estadia = await prisma.estadia.create({
      data: { veiculoId },
    });
    res.json(estadia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao cadastrar estadia.' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { saida, valorHora } = req.body;
  try {
    const estadia = await prisma.estadia.update({
      where: { id: parseInt(id) },
      data: {
        saida: new Date(saida),
        valorTotal: valorHora * (new Date(saida) - new Date(estadia.entrada)) / 3600000,
      },
    });
    res.json(estadia);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar estadia.' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.estadia.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Estadia excluída com sucesso!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir estadia.' });
  }
});

export default router;