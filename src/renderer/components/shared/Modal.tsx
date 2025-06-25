import { ReactNode } from 'react';
import BackgroundBox from './BackgroundBox';

interface ModalProps {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0">
      <BackgroundBox
        src="/images/land.jpg"
        className="min-w-[400px] min-h-72 p-4 rounded-lg border-8 border-t-red-100 border-r-red-900 border-b-red-950 border-l-red-300"
      >
        {children}
      </BackgroundBox>
    </div>
  );
}
