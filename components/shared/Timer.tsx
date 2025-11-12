"use client";

import { useEffect, useState } from "react";

interface TimerProps {
  initialTime: number;
  onTimeEnd?: () => void;
  className?: string;
}

export default function Timer({ initialTime, onTimeEnd, className = "" }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onTimeEnd) {
        onTimeEnd();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeEnd]);

  const progress = (timeLeft / initialTime) * 100;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const colorClass = progress > 50 ? "text-green-400" : progress > 25 ? "text-yellow-400" : "text-red-400";

  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="8" fill="none" className="text-gray-700" />
        <circle
          cx="60"
          cy="60"
          r="54"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          className={`${colorClass} transition-all duration-1000`}
          style={{
            strokeDasharray: `${2 * Math.PI * 54}`,
            strokeDashoffset: `${2 * Math.PI * 54 * (1 - progress / 100)}`,
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-4xl font-bold ${colorClass}`}>
          {minutes}:{seconds.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
