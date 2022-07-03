import CreateFeedbackUseCase from './create-feedback-use-case';

const createFeedbackSpy = jest.fn();
const sendFeedbackEmailSpy = jest.fn();

const createFeedback = new CreateFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendEmail: sendFeedbackEmailSpy }
);

describe('Create feedback', () => {
  it('should be able to create a feedback', async () => {
    await expect(
      createFeedback.execute({
        type: 'BUG',
        comment: 'Comentário',
        screenshot: 'data:image/png;base64',
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendFeedbackEmailSpy).toHaveBeenCalled();
  });

  it('should not be able to create a feedback without a type', async () => {
    await expect(
      createFeedback.execute({
        type: '',
        comment: 'Comentário',
      })
    ).rejects.toThrow();
  });

  it('should not be able to create a feedback without a comment', async () => {
    await expect(
      createFeedback.execute({
        type: 'BUG',
        comment: '',
      })
    ).rejects.toThrow();
  });

  it('should not be able to create a feedback with an invalid screenshot', async () => {
    await expect(
      createFeedback.execute({
        type: 'BUG',
        comment: 'Comentário',
        screenshot: '123',
      })
    ).rejects.toThrow();
  });
});
