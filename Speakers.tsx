"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

const speakers = [
  {
    name: "Anakin Peswani Lopez",
    year: "Year 8",
    images: ["/pictures/anakin.png"],
    topic: "Habits: Making and Breaking Them",
    description:
      "The life and origin of habits, their pros and cons, and how they affect us and the future.",
    funFact: "I love reading.",
  },
  {
    name: "Jude Dmello",
    year: "Year 9",
    images: ["/pictures/jude.png"],
    topic:
      "Why the Future of Us Depends on Using Our Brains, Not Just Our GPS",
    description:
      "My talk explores how relying on GPS can weaken the hippocampus, the part of the brain that handles memory and direction, and why using our own navigation skills helps keep our brains strong.",
    funFact:
      "I'm currently writing a book, Where the River Meets the Sea.",
  },
  {
    name: "Sena Gokkent & Hibbah Ali",
    year: "Year 13",
    images: ["/pictures/sena.png", "/pictures/hibbah.png"],
    topic: "Superconductors",
    description:
      "Sena and Hibbah explore superconductors, their uses, their importance, and the role they could play in the future. Their talk aims to inspire students interested in engineering and materials science.",
    funFact: "Hibbah wants to be an astronaut.",
  },
  {
    name: "Sarah Ghorayeb",
    year: "Year 8",
    images: ["/pictures/sarah.png"],
    topic: "The Shortage of Libraries in Bahrain",
    description:
      "Why do we rely on malls or coffee shops to study? We should have a quiet place of our own to read, study, and relax.",
    funFact:
      "I love playing the guitar, singing, running, and spending time with my friends.",
  },
  {
    name: "Niveditha Pathiyil",
    year: "Year 13",
    images: ["/pictures/nivi.png"],
    topic: "The Efficiency Trap",
    description:
      "In an era dominated by instant gratification and automated convenience, the relentless pursuit of efficiency may actually be working against human well-being. This talk challenges the modern economic assumption that friction is merely an obstacle to be eliminated.",
    funFact: "I'm a bit of a cinephile.",
  },
];

export default function Speakers() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section
      id="speakers"
      className="relative overflow-hidden bg-black px-6 py-24 text-white sm:px-8 sm:py-32 md:px-16"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.35em] text-red-500"
        >
          Speakers
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-8xl"
        >
          New voices.
          <br />
          <span className="text-red-600">Bold ideas.</span>
        </motion.h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Meet the voices shaping the future through powerful stories,
          fresh perspectives, and ideas worth spreading.
        </p>

        {/* Speaker cards */}
        <div className="mt-16 grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden border border-white/15 bg-zinc-950 transition-colors hover:border-red-600"
            >
              {/* Smaller speaker photographs */}
              <div
                className={`grid h-[240px] overflow-hidden bg-zinc-900 sm:h-[260px] ${
                  speaker.images.length > 1
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {speaker.images.map((image, imageIndex) => (
                  <div
                    key={image}
                    className="relative min-w-0 overflow-hidden"
                  >
                    <Image
                      src={`/tedx-stchristophers${image}`}
                      alt={
                        speaker.images.length > 1
                          ? `Portrait of ${
                              speaker.name.split(" & ")[imageIndex]
                            }`
                          : `Portrait of ${speaker.name}`
                      }
                      fill
                      sizes={
                        speaker.images.length > 1
                          ? "(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 192px"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                      }
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* Speaker information */}
              <div className="p-6">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-500">
                  {speaker.year} · TEDx Speaker
                </p>

                <h3 className="text-2xl font-bold">
                  {speaker.name}
                </h3>

                <p className="mt-4 text-base font-medium leading-relaxed text-zinc-300">
                  {speaker.topic}
                </p>

                {/* Expand button */}
                <button
                  type="button"
                  aria-expanded={expanded === index}
                  aria-controls={`speaker-details-${index}`}
                  onClick={() =>
                    setExpanded(expanded === index ? null : index)
                  }
                  className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-red-500 hover:text-red-400"
                >
                  {expanded === index ? "Show Less" : "Read More"}

                  <span aria-hidden="true" className="text-lg">
                    {expanded === index ? "−" : "+"}
                  </span>
                </button>

                {/* Expandable description */}
                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      id={`speaker-details-${index}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 border-t border-white/10 pt-5">
                        <p className="text-sm leading-relaxed text-zinc-400">
                          {speaker.description}
                        </p>

                        {speaker.funFact && (
                          <div className="mt-6">
                            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-red-500">
                              Fun Fact
                            </p>

                            <p className="text-sm text-zinc-400">
                              {speaker.funFact}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border-t border-white/15 pt-8 text-sm text-zinc-500"
        >
          Ideas worth spreading. Voices worth hearing.
        </motion.p>
      </div>
    </section>
  );
}