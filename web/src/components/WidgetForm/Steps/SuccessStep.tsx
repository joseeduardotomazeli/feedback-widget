import CloseButton from '../../CloseButton';

import success from '../../../assets/success.svg';

interface SuccessStepProps {
  onResetFeedback: () => void;
}

const SuccessStep = (props: SuccessStepProps) => {
  const { onResetFeedback } = props;

  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={success} alt="Ícone de sucesso" />
        <span className="mt-2 text-xl">Agradecemos o feedback!</span>

        <button
          type="button"
          className="mt-8 px-6 py-2 border-transparent focus:border-brand-500 rounded-md bg-zinc-800 hover:bg-zinc-700 text-sm leading-6 transition-colors"
          onClick={onResetFeedback}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};

export default SuccessStep;
