import { useState, FormEvent } from 'react';
import { ArrowLeft } from 'phosphor-react';

import { feedbackTypes, FeedbackType } from '..';

import Loader from '../../Loader';
import CloseButton from '../../CloseButton';
import ScreenshotButton from '../ScreenshotButton';

import api from '../../../services/api';

interface ContentStepProps {
  feedbackType: FeedbackType;
  onResetFeedback: () => void;
  onSendFeedback: () => void;
}

function ContentStep(props: ContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const { feedbackType, onResetFeedback, onSendFeedback } = props;

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setIsSendingFeedback(true);

    await api.post('/feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onSendFeedback();
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onResetFeedback}
        >
          <ArrowLeft fontWeight="bold" className="w-4 h-4" />
        </button>

        <span className="flex items-center gap-2 text-xl leading-6">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />

          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-4 w-full" onSubmit={handleSubmit}>
        <textarea
          placeholder="Conte em detalhes o que está acontecendo..."
          className="min-w-[304px] w-full min-h-[112px] border-zinc-600 focus:border-brand-500 rounded-md bg-transparent text-zinc-100 placeholder-zinc-400 text-sm resize-none scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTaken={setScreenshot}
          />

          <button
            type="submit"
            className="flex flex-1 items-center justify-center p-2 border-transparent rounded-md bg-brand-500 hover:bg-brand-300 disabled:hover:bg-brand-500 text-sm disabled:opacity-50 transition-colors"
            disabled={!comment.length || isSendingFeedback}
          >
            {isSendingFeedback ? <Loader /> : 'Enviar feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}

export default ContentStep;
