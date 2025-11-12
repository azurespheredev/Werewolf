import { ReactNode } from "react";

interface BackgroundBoxProps {
  src: string;
  className: string;
  children: ReactNode;
}

export default function BackgroundBox({ children, className, src }: BackgroundBoxProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
      }}
      className={`relative bg-cover bg-center overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
