"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black px-6 pb-8 pt-24 text-white sm:px-8 sm:pb-10 sm:pt-28 md:px-16 md:pt-36">
      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Main footer heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-500 sm:text-sm sm:tracking-[0.35em]">
            TEDxStChristophersSchool
          </p>

          <h2 className="mt-7 max-w-5xl text-4xl font-bold leading-[0.95] tracking-tight sm:mt-8 sm:text-5xl md:text-8xl">
            The future
            <br />
            <span className="text-red-600">
              starts with us.
            </span>
          </h2>
        </motion.div>

        {/* Main footer content */}
        <div className="mt-16 grid gap-12 border-t border-white/15 pt-10 sm:mt-24 sm:gap-16 sm:pt-12 md:grid-cols-3">

          {/* Event */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              Event
            </p>

            <div className="mt-5 space-y-2 text-sm text-zinc-400 sm:mt-6 sm:space-y-3 sm:text-base">
              <p>TEDx Youth</p>
              <p>St Christopher&apos;s School Hall</p>
              <p>2026</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              Explore
            </p>

            <div className="mt-5 flex flex-col items-start gap-3 sm:mt-6">
              <a
                href="#theme"
                className="text-zinc-400 transition-colors hover:text-red-500"
              >
                Theme
              </a>

              <a
                href="#speakers"
                className="text-zinc-400 transition-colors hover:text-red-500"
              >
                Speakers
              </a>

              <a
                href="#event"
                className="text-zinc-400 transition-colors hover:text-red-500"
              >
                Event
              </a>

              <a
                href="#experience"
                className="text-zinc-400 transition-colors hover:text-red-500"
              >
                Experience
              </a>

              <a
                href="#team"
                className="text-zinc-400 transition-colors hover:text-red-500"
              >
                Team
              </a>

              <a
                href="#faq"
                className="text-zinc-400 transition-colors hover:text-red-500"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* TEDx information */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-600">
              TEDx
            </p>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400 sm:mt-6 sm:text-base">
              TEDx is a global initiative that brings the spirit of
              TED&apos;s mission of ideas worth spreading to local
              communities around the world.
            </p>

            <a
              href="https://www.ted.com/about/programs-initiatives/tedx-program"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-red-500 transition-opacity hover:opacity-60 sm:text-sm"
            >
              Learn about TEDx ↗
            </a>
          </div>
        </div>

        {/* Logo area */}
        <div className="mt-16 border-t border-white/15 pt-10 sm:mt-24 sm:pt-12">
          <div className="break-words text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl">
            <span className="text-red-600">
              TEDx
            </span>
            StChristophersSchool
          </div>

          <p className="mt-5 max-w-xl text-xs leading-relaxed text-zinc-600 sm:text-sm">
            This independent TEDx event is operated under license from TED.
          </p>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-7 text-xs text-zinc-600 sm:mt-16 sm:gap-6 sm:pt-8 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 TEDxStChristophersSchool
          </p>

          <a
            href="#"
            className="w-fit transition-colors hover:text-white"
          >
            Back to top ↑
          </a>
        </div>
      </div>

      {/* Decorative background TEDx */}
      <div className="pointer-events-none absolute -bottom-4 right-[-10%] select-none text-[7rem] font-bold leading-none text-white/[0.015] sm:-bottom-10 sm:right-[-2%] sm:text-[10rem] md:text-[20rem]">
        TEDx
      </div>
    </footer>
  );
}