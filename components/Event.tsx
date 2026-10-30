
"use client";

import { motion } from "motion/react";

const eventDetails = [
  {
    label: "VENUE",
    value: "Catalyst Lecture Theatre",
    subtitle: "",
  },
  {
    label: "EVENT",
    value: "TEDx Youth",
    subtitle: "",
  },
  {
    label: "AUDIENCE",
    value: "Up to 100 attendees",
    subtitle: "",
  },
  {
    label: "DATE",
    value: "23rd November 2026",
    subtitle: "",
  },
];

export default function Event() {
  return (
    <section
      id="event"
      className="bg-white px-6 py-24 text-black sm:px-8 sm:py-32 md:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">

        {eventDetails.map((detail, index) => (
          <motion.div
            key={detail.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="grid grid-cols-1 gap-4 border-t border-zinc-200 py-10 md:grid-cols-[25%_75%] md:gap-8"
          >
            {/* Label */}
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
                {detail.label}
              </p>
            </div>

            {/* Value */}
            <div>
              <h3 className="text-3xl font-normal tracking-tight sm:text-4xl">
                {detail.value}
              </h3>

              {detail.subtitle && (
                <p className="mt-3 text-lg text-zinc-500">
                  {detail.subtitle}
                </p>
              )}
            </div>
          </motion.div>
        ))}

        <div className="border-t border-zinc-200" />

      </div>
    </section>
  );
}
