import { useState } from 'react';

import TypeStep from './Steps/TypeStep';
import ContentStep from './Steps/ContentStep';
import SuccessStep from './Steps/SuccessStep';

import Footer from '../Footer';

import bug from '../../assets/bug.svg';
import idea from '../../assets/idea.svg';
import thought from '../../assets/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bug,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: idea,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thought,
      alt: 'Imagem de uma nuvem de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [isFeedbackSent, setIsFeedbackSent] = useState(false);

  function onChangeFeedback(type: FeedbackType) {
    setFeedbackType(type);
  }

  function onResetFeedback() {
    setFeedbackType(null);
    setIsFeedbackSent(false);
  }

  function onSendFeedback() {
    setIsFeedbackSent(true);
  }

  return (
    <div className="relative flex flex-col items-center mb-4 p-4 w-[calc(100vw-2rem)] md:w-auto rounded-2xl bg-zinc-900 shadow-lg">
      {isFeedbackSent ? (
        <SuccessStep onResetFeedback={onResetFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <TypeStep onChangeFeedback={onChangeFeedback} />
          ) : (
            <ContentStep
              feedbackType={feedbackType}
              onResetFeedback={onResetFeedback}
              onSendFeedback={onSendFeedback}
            />
          )}
        </>
      )}

      <Footer />
    </div>
  );
}

export default WidgetForm;
