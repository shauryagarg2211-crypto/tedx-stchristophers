
"use client";

import { useEffect, useState } from "react";

// 23 November 2026 at 9:00 AM Bahrain time.
// Change the time if your event starts later.
const EVENT_DATE = new Date("2026-11-23T09:00:00+03:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  finished: boolean;
};

function calculateTimeLeft(): TimeLeft {
  const difference = Math.max(EVENT_DATE - Date.now(), 0);

  return {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    finished: difference === 0,
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const update = () => setTimeLeft(calculateTimeLeft());

    update();

    const timer = window.setInterval(update, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const units = [
    { label: "DAYS", value: timeLeft?.days ?? 0 },
    { label: "HOURS", value: timeLeft?.hours ?? 0 },
    { label: "MINUTES", value: timeLeft?.minutes ?? 0 },
    { label: "SECONDS", value: timeLeft?.seconds ?? 0 },
  ];

  return (
    <section className="w-full border-b border-white/10 bg-[#080808] px-5 py-5 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400 sm:text-xs">
          COUNTDOWN TO TEDx 2026
        </p>

        {timeLeft?.finished ? (
          <p className="text-lg font-bold tracking-widest text-white">
            THE FUTURE IS HERE.
          </p>
        ) : (
          <div
            className="flex items-center justify-center gap-4 sm:gap-7"
            role="timer"
            aria-label="Time remaining until TEDx 2026"
          >
            {units.map((unit) => (
              <div key={unit.label} className="text-center">
                <div className="text-xl font-bold tabular-nums text-white sm:text-2xl">
                  {timeLeft
                    ? String(unit.value).padStart(2, "0")
                    : "--"}
                </div>

                <div className="mt-1 text-[9px] font-semibold tracking-[0.12em] text-red-500 sm:text-[10px]">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
