
"use client";

import Countdown from "./Countdown";

export default function RegisterBanner() {
  return (
    <section
      id="register"
      className="relative overflow-hidden bg-black px-6 py-20 text-center text-white"
    >
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Be Part of TEDx St Christopher&apos;s
        </h2>

        {/* Event details */}
        <p className="mb-8 text-lg text-gray-300">
          23 November 2026 | 9:00 AM
          <span className="block">
            Catalyst Lecture Theatre
          </span>
        </p>

        {/* Countdown */}
        <div className="mb-10">
          <Countdown />
        </div>

        {/* Registration button - no Google Form link */}
        <button
          type="button"
          disabled
          className="inline-flex cursor-not-allowed items-center justify-center rounded-full bg-red-600 px-10 py-4 text-lg font-semibold text-white"
        >
          Register Now
        </button>
      </div>
    </section>
  );
}
