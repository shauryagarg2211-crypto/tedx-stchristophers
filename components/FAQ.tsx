"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "What is TEDxStChristophersSchool?",
    answer:
      "TEDxStChristophersSchool is an independently organized TEDx Youth event bringing together ideas, stories and perspectives from within and beyond the school community.",
  },
  {
    question: "Who can attend the event?",
    answer:
      "Attendance information will be shared closer to the event. The event is designed as an intimate TEDx Youth experience, with capacity limited to approximately 100 attendees.",
  },
  {
    question: "When and where will the event take place?",
    answer:
      "The event will take place at The Catalyst Lecture Theatre in the Junior School. The confirmed event date and timings will be announced soon.",
  },
  {
    question: "How can I register?",
    answer:
      "Registration details will be released once attendance arrangements are finalized. A registration link will be added to this website when applications or tickets open.",
  },
  {
    question: "Who are the speakers?",
    answer:
      "The speaker lineup is currently being finalized. Speaker announcements and talk information will appear on this website as they are confirmed.",
  },
  {
    question: "Will there be a published schedule?",
    answer:
      "Yes. Once the programme has been finalized, this website will include session timings, breaks and other important event information.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-6 py-24 text-black sm:px-8 sm:py-32 md:px-16 md:py-40"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid gap-8 sm:gap-12 md:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-red-600">
              FAQ
            </p>

            <h2 className="mt-8 text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-7xl">
              Questions?
              <br />
              <span className="text-red-600">
                Start here.
              </span>
            </h2>
          </div>

          <div className="md:pt-16">
            <p className="max-w-xl text-lg leading-relaxed text-zinc-500 sm:text-xl">
              Everything you need to know about attending
              TEDxStChristophersSchool. We&apos;ll continue updating this page
              as the event approaches.
            </p>
          </div>
        </motion.div>

        {/* Accordion */}
        <div className="mt-16 border-t border-black/15 sm:mt-24">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className="border-b border-black/15"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-start justify-between gap-4 py-6 text-left sm:gap-8 sm:py-8"
                  aria-expanded={isOpen}
                >
                  <div className="flex min-w-0 gap-4 sm:gap-6 md:gap-10">
                    <span className="shrink-0 pt-1 text-xs text-red-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="text-lg font-medium leading-snug sm:text-xl md:text-2xl">
                      {faq.question}
                    </h3>
                  </div>

                  <motion.span
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 text-2xl font-light sm:text-3xl"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-8 pr-6 sm:pb-8 sm:pl-10 md:pl-[74px]">
                        <p className="max-w-3xl text-base leading-relaxed text-zinc-500 sm:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col gap-6 border-t border-black/15 pt-8 sm:mt-16 sm:gap-4 sm:pt-10 md:flex-row md:items-center md:justify-between"
        >
          <p className="text-sm leading-relaxed text-zinc-500 sm:text-base">
            Still have a question? Contact information will be added soon.
          </p>

          <a
            href="#"
            className="text-sm uppercase tracking-[0.25em] text-red-600 transition-opacity hover:opacity-60"
          >
            Back to top ↑
          </a>
        </motion.div>

      </div>
    </section>
  );
}
