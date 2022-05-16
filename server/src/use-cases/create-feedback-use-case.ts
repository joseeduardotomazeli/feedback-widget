import FeedbacksRepository from '../repositories/feedbacks-repository';
import EmailAdapter from '../adapters/email-adapter';

interface CreateFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

class CreateFeedbackUseCase {
  private feedbacksRepository: FeedbacksRepository;
  private emailAdapter: EmailAdapter;

  constructor(
    feedbacksRepository: FeedbacksRepository,
    emailAdapter: EmailAdapter
  ) {
    this.feedbacksRepository = feedbacksRepository;
    this.emailAdapter = emailAdapter;
  }

  async execute(request: CreateFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) throw new Error('Type is required.');
    if (!comment) throw new Error('Comment is required.');

    if (screenshot && !screenshot.startsWith('data:image/png;base64'))
      throw new Error('Invalid screenshot format.');

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.emailAdapter.sendEmail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; color: #111">`,
        `<span>Tipo: ${type}</span>`,
        `<br />`,
        `<span>Comentário: ${comment}</span>`,
        `<br />`,
        screenshot ? `<img src="${screenshot}" />` : '',
        `</div>`,
      ].join(''),
    });
  }
}

export default CreateFeedbackUseCase;
