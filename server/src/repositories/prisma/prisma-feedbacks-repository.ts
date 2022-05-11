import FeedbacksRepository, {
  CreateFeedbackData,
} from '../feedbacks-repository';

import prisma from '../../prisma';

class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create(data: CreateFeedbackData) {
    const { type, comment, screenshot } = data;

    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}

export default PrismaFeedbacksRepository;
