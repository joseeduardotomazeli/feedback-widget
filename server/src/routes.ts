import express from 'express';

import PrismaFeedbacksRepository from './repositories/prisma/prisma-feedbacks-repository';
import CreateFeedbackUseCase from './use-cases/create-feedback-use-case';

const routes = express.Router();

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();

  const createFeedbackUseCase = new CreateFeedbackUseCase(
    prismaFeedbacksRepository
  );

  await createFeedbackUseCase.execute({ type, comment, screenshot });

  return res.status(201).send();
});

export default routes;
