"use client";

import { motion } from "motion/react";

export default function Event() {
  return (
    <section
      id="event"
      className="relative overflow-hidden bg-white px-6 pb-20 pt-24 text-black sm:px-8 sm:pb-24 sm:pt-32 md:px-16 md:pt-40"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.35em] text-red-600"
        >
          The Event
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-5xl text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-8xl"
        >
          One stage.
          <br />
          <span className="text-red-600">
            Ideas that move us forward.
          </span>
        </motion.h2>

        {/* Event facts */}
        <div className="mt-16 border-t border-black/15 sm:mt-24">

          {/* Venue */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-3 border-b border-black/15 py-7 sm:gap-4 sm:py-8 md:grid-cols-[220px_1fr]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 sm:text-sm">
              Venue
            </p>

            <p className="text-xl font-medium leading-snug sm:text-2xl md:text-3xl">
              St Christopher&apos;s School Hall

              <span className="mt-1 block text-sm font-normal text-zinc-500 sm:text-base md:text-lg">
                Junior School
              </span>
            </p>
          </motion.div>

          {/* Event type */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="grid gap-3 border-b border-black/15 py-7 sm:gap-4 sm:py-8 md:grid-cols-[220px_1fr]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 sm:text-sm">
              Event
            </p>

            <p className="text-xl font-medium sm:text-2xl md:text-3xl">
              TEDx Youth
            </p>
          </motion.div>

          {/* Audience */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-3 border-b border-black/15 py-7 sm:gap-4 sm:py-8 md:grid-cols-[220px_1fr]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 sm:text-sm">
              Audience
            </p>

            <p className="text-xl font-medium sm:text-2xl md:text-3xl">
              Up to 100 attendees
            </p>
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid gap-3 border-b border-black/15 py-7 sm:gap-4 sm:py-8 md:grid-cols-[220px_1fr]"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400 sm:text-sm">
              Date
            </p>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
              <p className="text-xl font-medium sm:text-2xl md:text-3xl">
                2026
              </p>

              <span className="rounded-full border border-red-600 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-red-600 sm:text-xs sm:tracking-[0.2em]">
                To be announced
              </span>
            </div>
          </motion.div>
        </div>

        {/* What to expect */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-8 sm:mt-24 sm:gap-10 md:grid-cols-2"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-600">
              What to expect
            </p>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 sm:text-xl md:text-2xl">
              A focused gathering of ideas, stories and perspectives exploring
              how we shape the future together.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 sm:mt-6 sm:text-lg">
              Speaker announcements, timings and further event information will
              be released as TEDxStChristophersSchool approaches.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}