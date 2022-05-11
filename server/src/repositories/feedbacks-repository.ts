export interface CreateFeedbackData {
  type: string;
  comment: string;
  screenshot?: string;
}

interface FeedbacksRepository {
  create: (data: CreateFeedbackData) => Promise<void>;
}

export default FeedbacksRepository;
