import { ReactNode } from 'react';
import BackgroundBox from './BackgroundBox';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
}

export default function Modal({ isOpen, children }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0">
      <BackgroundBox
        src="/images/bg_home.jpg"
        className="flex flex-col justify-center items-center gap-8 min-w-[512px] min-h-72 p-4 text-orange-50 rounded-lg border-4 border-amber-600 shadow-2xl"
      >
        {children}
      </BackgroundBox>
    </div>
  );
}
