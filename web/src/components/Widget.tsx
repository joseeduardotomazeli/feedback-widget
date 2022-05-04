import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

function Widget() {
  return (
    <Popover className="absolute right-5 bottom-5">
      <Popover.Panel></Popover.Panel>

      <Popover.Button className="group flex items-center px-3 h-12 bg-brand-500 text-white rounded-full">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 group-hover:max-w-xs overflow-hidden transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
}

export default Widget;
