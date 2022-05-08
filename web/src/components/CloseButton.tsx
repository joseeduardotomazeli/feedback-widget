import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

function CloseButton() {
  return (
    <Popover.Button
      title="Fechar formulário de feedback"
      className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-100"
    >
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
  );
}

export default CloseButton;
