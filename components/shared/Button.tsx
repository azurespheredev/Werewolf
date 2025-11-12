import { ButtonHTMLAttributes } from "react";
import Loader from "./Loader";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export default function Button({ className, children, loading = false, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`flex justify-center items-center text-xl text-orange-100 active:text-lg tracking-wider bg-orange-600 rounded-xl border-4 border-t-orange-200 border-r-orange-700 border-b-orange-900 border-l-orange-700 active:border-t-orange-900 active:border-r-orange-700 active:border-b-orange-200 active:border-l-orange-700 hover:bg-orange-500 focus:bg-orange-500 disabled:bg-orange-800 disabled:border-orange-800 outline-2 outline-red-950 shadow-md
        ${className}`}
      disabled={loading}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
