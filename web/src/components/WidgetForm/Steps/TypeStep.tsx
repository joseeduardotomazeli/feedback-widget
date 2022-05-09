import { feedbackTypes, FeedbackType } from '..';

import CloseButton from '../../CloseButton';

interface TypeStepProps {
  onChangeFeedback: (type: FeedbackType) => void;
}

function TypeStep(props: TypeStepProps) {
  const { onChangeFeedback } = props;

  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex gap-2 py-8 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              className="flex flex-1 flex-col gap-2 items-center py-5 w-24 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 rounded-lg bg-zinc-800"
              onClick={() => onChangeFeedback(key as FeedbackType)}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export default TypeStep;
