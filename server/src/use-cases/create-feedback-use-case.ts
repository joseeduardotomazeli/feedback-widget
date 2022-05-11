import FeedbacksRepository from '../repositories/feedbacks-repository';

interface CreateFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

class CreateFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository;

  constructor(feedbacksRepository: FeedbacksRepository) {
    this.feedbacksRepository = feedbacksRepository;
  }

  async execute(request: CreateFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
  }
}

export default CreateFeedbackUseCase;
