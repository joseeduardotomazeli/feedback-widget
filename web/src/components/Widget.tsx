import { Popover } from '@headlessui/react';
import { ChatTeardropDots } from 'phosphor-react';

import WidgetForm from './WidgetForm';

function Widget() {
  return (
    <Popover className="absolute right-4 bottom-4 md:right-8 md:bottom-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

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
