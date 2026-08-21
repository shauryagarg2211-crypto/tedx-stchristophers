"use client";

import { motion } from "motion/react";

const experiences = [
  {
    number: "01",
    title: "Ideas",
    description:
      "Thought-provoking perspectives that challenge assumptions and open new ways of thinking about the future.",
  },
  {
    number: "02",
    title: "Stories",
    description:
      "Personal experiences and powerful narratives that connect big ideas to the people behind them.",
  },
  {
    number: "03",
    title: "Conversations",
    description:
      "A space for curiosity, reflection and discussion beyond the stage.",
  },
  {
    number: "04",
    title: "Connections",
    description:
      "Bringing together students, speakers and members of our community around ideas worth sharing.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-white px-6 pb-24 pt-12 text-black sm:px-8 sm:pb-32 sm:pt-16 md:px-16 md:pb-40"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-red-600">
            The Experience
          </p>

          <h2 className="mt-8 max-w-5xl text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-8xl">
            More than
            <br />
            <span className="text-red-600">a stage.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500 sm:mt-10 sm:text-xl">
            TEDxStChristophersSchool is designed as a shared experience —
            where ideas are heard, questioned, discussed and carried beyond
            the event itself.
          </p>
        </motion.div>

        {/* Experience cards */}
        <div className="mt-16 grid border-l border-t border-black/15 sm:mt-24 md:grid-cols-2">
          {experiences.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              className="group relative min-h-[250px] overflow-hidden border-b border-r border-black/15 p-6 transition-colors duration-500 hover:bg-black sm:min-h-[300px] sm:p-8 md:min-h-[320px] md:p-10"
            >
              <p className="text-sm text-red-600">
                {item.number}
              </p>

              <h3 className="mt-10 text-3xl font-semibold transition-colors duration-500 group-hover:text-white sm:mt-12 sm:text-4xl md:text-5xl">
                {item.title}
              </h3>

              <p className="mt-5 max-w-md text-base leading-relaxed text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400 sm:mt-6 sm:text-lg">
                {item.description}
              </p>

              <motion.div
                className="absolute bottom-6 right-6 text-2xl text-red-600 sm:bottom-8 sm:right-8 sm:text-3xl"
                initial={{ x: 0 }}
                whileHover={{ x: 8 }}
              >
                ↗
              </motion.div>

              <div className="pointer-events-none absolute -bottom-8 -right-2 text-[8rem] font-bold leading-none text-black/[0.025] transition-colors duration-500 group-hover:text-white/[0.03] sm:-bottom-10 sm:text-[10rem] md:text-[14rem]">
                {item.number}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex flex-col gap-8 border-t border-black/15 pt-8 sm:mt-24 sm:pt-10 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-3xl text-2xl font-medium leading-tight sm:text-3xl md:text-5xl">
            Come for the talks.
            <br />
            <span className="text-red-600">
              Leave with new questions.
            </span>
          </p>

          <a
            href="#event"
            className="text-sm uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-red-600"
          >
            Event details ↑
          </a>
        </motion.div>

      </div>
    </section>
  );
}