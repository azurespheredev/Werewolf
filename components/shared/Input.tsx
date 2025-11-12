import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      {...props}
      className={`outline-none border-b-2 border-b-black p-1 bg-transparent placeholder:text-black placeholder:text-opacity-30 text-center disabled:opacity-50 ${className}`}
    />
  );
}
