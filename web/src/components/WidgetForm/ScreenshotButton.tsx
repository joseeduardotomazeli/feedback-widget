import { useState } from 'react';
import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';

import Loader from '../Loader';

interface ScreenshotButtonProps {
  screenshot: null | string;
  onScreenshotTaken: (screenshot: null | string) => void;
}

function ScreenshotButton(props: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  const { screenshot, onScreenshotTaken } = props;

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');

    onScreenshotTaken(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="flex items-end justify-end w-10 h-10 p-1 border-transparent rounded-md text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTaken(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'bottom right',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      className="p-2 border-transparent rounded-md bg-zinc-800 hover:bg-zinc-700 transition-colors"
      onClick={handleTakeScreenshot}
    >
      {isTakingScreenshot ? <Loader /> : <Camera className="w-6 h-6" />}
    </button>
  );
}

export default ScreenshotButton;
