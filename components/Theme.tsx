"use client";

import { motion } from "motion/react";

export default function Theme() {
  return (
    <section
      id="theme"
      className="relative overflow-hidden bg-white px-6 py-24 text-black sm:px-8 sm:py-32 md:px-16 md:py-40"
    >
      {/* Background glow */}
      <div className="absolute right-[-80px] top-20 h-[320px] w-[320px] rounded-full bg-red-100 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-red-600 sm:mb-8">
            Our Theme
          </p>

          <h2 className="text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-8xl">
            The future isn&apos;t something we wait for.
          </h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-4xl font-bold leading-[0.95] tracking-tight text-red-600 sm:mt-6 sm:text-5xl md:text-8xl"
          >
            It&apos;s something we create.
          </motion.h2>
        </motion.div>

        {/* Theme explanation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 grid gap-8 border-t border-black/10 pt-8 sm:mt-24 sm:gap-12 sm:pt-12 md:grid-cols-2"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-600">
              The Future of Us
            </p>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-relaxed text-zinc-700 sm:text-xl md:text-2xl">
              “The Future of Us” explores how the choices we make today shape
              the world we share tomorrow.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-500 sm:mt-6 sm:text-lg">
              Through ideas spanning technology, society, creativity, science
              and human experience, TEDxStChristophersSchool brings together
              voices that challenge us to think about what comes next — and the
              role each of us can play in building it.
            </p>
          </div>
        </motion.div>

        {/* Three ideas */}
        <div className="mt-20 grid gap-12 sm:mt-28 sm:gap-6 md:grid-cols-3">

          {/* Imagine */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="border-t border-black pt-6 sm:pt-8"
          >
            <p className="text-sm text-red-600">01</p>

            <h3 className="mt-4 text-3xl font-semibold sm:mt-5">
              Imagine
            </h3>

            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Question what the future could become and look beyond the limits
              of what already exists.
            </p>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border-t border-black pt-6 sm:pt-8"
          >
            <p className="text-sm text-red-600">02</p>

            <h3 className="mt-4 text-3xl font-semibold sm:mt-5">
              Connect
            </h3>

            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Explore how people, ideas and disciplines come together to shape
              a future greater than any one perspective.
            </p>
          </motion.div>

          {/* Create */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border-t border-black pt-6 sm:pt-8"
          >
            <p className="text-sm text-red-600">03</p>

            <h3 className="mt-4 text-3xl font-semibold sm:mt-5">
              Create
            </h3>

            <p className="mt-4 text-base leading-relaxed text-zinc-500 sm:text-lg">
              Turn possibility into action by asking what we can build, change
              and contribute today.
            </p>
          </motion.div>
        </div>

        {/* Transition to speakers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 border-t border-black/10 pt-8 sm:mt-32 sm:pt-10"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Next
          </p>

          <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-6xl">
            Meet the voices shaping the conversation.
          </h3>
        </motion.div>

      </div>
    </section>
  );
}