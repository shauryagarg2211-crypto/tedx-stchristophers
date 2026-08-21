"use client";

import { motion } from "motion/react";

const teamMembers = [
  {
    name: "Name One",
    role: "Lead Organizer",
  },
  {
    name: "Name Two",
    role: "Co-Organizer",
  },
  {
    name: "Name Three",
    role: "Design & Media",
  },
  {
    name: "Name Four",
    role: "Operations",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-8 sm:py-32 md:px-16 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-red-500">
            The Team
          </p>

          <h2 className="mt-8 max-w-5xl text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-8xl">
            The people
            <br />
            <span className="text-red-600">
              behind the ideas.
            </span>
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="mt-16 grid gap-x-6 gap-y-12 sm:mt-24 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/[0.04] sm:text-7xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute inset-0 bg-red-600/0 transition duration-500 group-hover:bg-red-600/10" />
              </div>

              <div className="mt-5 border-t border-white/20 pt-4 sm:mt-6 sm:pt-5">
                <p className="text-lg font-medium sm:text-xl">
                  {member.name}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500 sm:text-sm">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 grid gap-8 border-t border-white/15 pt-10 sm:mt-32 sm:gap-10 sm:pt-12 md:grid-cols-2"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-red-500">
            Together
          </p>

          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl md:text-2xl">
            TEDxStChristophersSchool is brought to life by students and
            organizers working together to create a platform for ideas worth
            sharing.
          </p>
        </motion.div>
      </div>
    </section>
  );
}