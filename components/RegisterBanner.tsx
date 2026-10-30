
"use client";

import { motion } from "motion/react";

export default function RegisterBanner() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-[72px] z-40 w-full bg-red-600 px-6 py-3 text-white md:top-[88px]"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
          Registration now open
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSesTrmSGoj1eMhJjagBMIOiDbonbLA2TMfMDfMZcPeKGlZknA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-xs font-semibold uppercase tracking-[0.2em] underline underline-offset-4 transition-opacity hover:opacity-70 sm:text-sm"
        >
          Register →
        </a>
      </div>
    </motion.div>
  );
}
