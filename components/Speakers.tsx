"use client";

import { motion } from "motion/react";

export default function Speakers() {
  return (
    <section
      id="speakers"
      className="relative flex min-h-[75vh] items-center overflow-hidden bg-black px-6 py-24 text-white sm:px-8 sm:py-32 md:px-16"
    >
      {/* Large background question mark */}
      <div className="pointer-events-none absolute right-[-8%] top-1/2 -translate-y-1/2 text-[14rem] font-bold leading-none text-white/[0.025] sm:right-[-2%] sm:text-[18rem] md:text-[30rem]">
        ?
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-[0.35em] text-red-500"
        >
          Speakers
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-8 max-w-4xl text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-8xl"
        >
          New voices.
          <br />
          <span className="text-red-600">
            Bold ideas.
          </span>
        </motion.h2>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 flex flex-col gap-8 border-t border-white/15 pt-8 sm:mt-16 sm:pt-10 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
              Our speaker lineup is taking shape.
            </p>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              The voices behind TEDxStChristophersSchool will be revealed soon.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500 sm:text-sm">
            <motion.span
              animate={{
                opacity: [0.25, 1, 0.25],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-red-600"
            />

            Coming Soon
          </div>
        </motion.div>
      </div>
    </section>
  );
}