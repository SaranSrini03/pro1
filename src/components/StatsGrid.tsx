"use client";
import { useState, useEffect } from "react";

// ✅ Reusable hook for number counting
function useCountUp(end: number, duration = 1) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 20); // ~60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 5000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

type Stat = { value: number; label: string };

export default function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
      {stats.map((stat, idx) => {
        const count = useCountUp(stat.value, 2);
        return (
          <div
            key={idx}
            className="border rounded-lg p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition"
          >
            <div className="text-3xl text-black font-semibold">
              {count.toLocaleString()}
            </div>
            <div className="text-gray-500 text-sm">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
