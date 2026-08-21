"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md md:px-16 md:py-6">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
          className="text-base font-bold sm:text-xl"
        >
          <span className="text-red-600">TEDx</span>
          StChristophersSchool
        </a>

        {/* Desktop navigation */}
        <div className="hidden gap-8 text-sm md:flex">
          <a href="#theme" className="transition-colors hover:text-red-500">
            Theme
          </a>

          <a href="#speakers" className="transition-colors hover:text-red-500">
            Speakers
          </a>

          <a href="#event" className="transition-colors hover:text-red-500">
            Event
          </a>

          <a href="#experience" className="transition-colors hover:text-red-500">
            Experience
          </a>

          <a href="#team" className="transition-colors hover:text-red-500">
            Team
          </a>

          <a href="#faq" className="transition-colors hover:text-red-500">
            FAQ
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
        >
          <motion.span
            animate={
              menuOpen
                ? { rotate: 45, y: 0 }
                : { rotate: 0, y: -5 }
            }
            transition={{ duration: 0.25 }}
            className="absolute h-px w-6 bg-white"
          />

          <motion.span
            animate={
              menuOpen
                ? { rotate: -45, y: 0 }
                : { rotate: 0, y: 5 }
            }
            transition={{ duration: 0.25 }}
            className="absolute h-px w-6 bg-white"
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-x-0 top-[81px] z-40 border-b border-white/10 bg-black/95 px-6 py-8 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col">
              <a
                href="#theme"
                onClick={closeMenu}
                className="border-b border-white/10 py-5 text-2xl font-medium transition-colors hover:text-red-500"
              >
                Theme
              </a>

              <a
                href="#speakers"
                onClick={closeMenu}
                className="border-b border-white/10 py-5 text-2xl font-medium transition-colors hover:text-red-500"
              >
                Speakers
              </a>

              <a
                href="#event"
                onClick={closeMenu}
                className="border-b border-white/10 py-5 text-2xl font-medium transition-colors hover:text-red-500"
              >
                Event
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="border-b border-white/10 py-5 text-2xl font-medium transition-colors hover:text-red-500"
              >
                Experience
              </a>

              <a
                href="#team"
                onClick={closeMenu}
                className="border-b border-white/10 py-5 text-2xl font-medium transition-colors hover:text-red-500"
              >
                Team
              </a>

              <a
                href="#faq"
                onClick={closeMenu}
                className="py-5 text-2xl font-medium transition-colors hover:text-red-500"
              >
                FAQ
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-red-600" />
              TEDxStChristophersSchool
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}