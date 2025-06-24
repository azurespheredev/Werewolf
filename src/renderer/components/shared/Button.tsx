import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`px-4 py-2 text-xl text-orange-100 active:text-lg tracking-wider bg-orange-600 rounded-xl border-4 border-t-orange-200 border-r-orange-700 border-b-orange-900 border-l-orange-700 active:border-t-orange-900 active:border-r-orange-700 active:border-b-orange-200 active:border-l-orange-700 hover:bg-orange-500 outline outline-2 outline-red-950 shadow-md
        ${className}`}
    >
      {children}
    </button>
  );
}
