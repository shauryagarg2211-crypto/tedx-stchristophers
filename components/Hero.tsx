"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { MouseEvent } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const visualX = useSpring(mouseX, {
    stiffness: 40,
    damping: 20,
  });

  const visualY = useSpring(mouseY, {
    stiffness: 40,
    damping: 20,
  });

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    mouseX.set(x * 0.025);
    mouseY.set(y * 0.025);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      className="relative flex min-h-screen overflow-hidden px-6 pt-40 md:px-16"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* LEFT SIDE */}
      <div className="relative z-10 flex w-full items-center lg:w-1/2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-sm uppercase tracking-[0.35em] text-red-500"
          >
            Youth • TEDx 2026
          </motion.p>

          <h1 className="text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl md:text-8xl xl:text-9xl">
            <motion.span
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              THE
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              FUTURE
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.41,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              OF{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.9,
                }}
                className="text-red-600"
              >
                US.
              </motion.span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.85,
            }}
            className="mt-8 max-w-lg text-base leading-relaxed text-gray-400 sm:text-lg"
          >
            Ideas, perspectives and conversations exploring the world
            we are creating together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.05,
            }}
            className="mt-6 flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-gray-500 sm:flex-row sm:flex-wrap sm:gap-x-5"
          >
            <span>TEDx Youth</span>

            <span className="hidden text-red-600 sm:inline">
              •
            </span>

            <span>St Christopher&apos;s School Hall</span>

            <span className="hidden text-red-600 sm:inline">
              •
            </span>

            <span>2026</span>
          </motion.div>

          <motion.a
            href="#theme"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.15,
            }}
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="mt-10 inline-block border border-white px-7 py-3 text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black"
          >
            Explore
          </motion.a>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <motion.div
        style={{
          x: visualX,
          y: visualY,
        }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.5,
        }}
        className="absolute right-0 top-0 hidden h-full w-1/2 lg:block"
      >
        <motion.div
          animate={{
            opacity: [0.25, 0.5, 0.25],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[18%] top-[28%] h-[360px] w-[360px] rounded-full bg-red-600/10 blur-3xl"
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[12%] top-[18%] h-[420px] w-[420px] rounded-full border border-white/10"
        >
          <div className="absolute left-[12%] top-[18%] h-2 w-2 rounded-full bg-white/70" />
        </motion.div>

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 32,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[20%] top-[27%] h-[280px] w-[280px] rounded-full border border-red-500/30"
        >
          <div className="absolute right-[16%] top-[9%] h-3 w-3 rounded-full bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.8)]" />
        </motion.div>

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-[28%] top-[36%] h-[140px] w-[140px] rounded-full border border-white/20"
        />

        <motion.div
          animate={{
            opacity: [0.15, 0.7, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute right-[33%] top-[24%] h-[250px] w-px rotate-[35deg] bg-gradient-to-b from-transparent via-red-500/70 to-transparent"
        />

        <motion.div
          animate={{
            opacity: [0.1, 0.45, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute right-[20%] top-[45%] h-px w-[300px] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        />

        <motion.div
          animate={{
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: 0.6,
          }}
          className="absolute right-[38%] top-[48%] h-[220px] w-px rotate-[-28deg] bg-gradient-to-b from-transparent via-white/30 to-transparent"
        />

        <motion.div
          animate={{
            x: [0, 16, -7, 0],
            y: [0, -14, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[31%] top-[31%] h-3 w-3 rounded-full bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.8)]"
        />

        <motion.div
          animate={{
            x: [0, -12, 8, 0],
            y: [0, 10, -12, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[17%] top-[44%] h-2 w-2 rounded-full bg-white"
        />

        <motion.div
          animate={{
            x: [0, 10, -9, 0],
            y: [0, -8, 13, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[42%] top-[54%] h-2 w-2 rounded-full bg-white/70"
        />

        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute right-[36%] top-[43%] h-3 w-3 rounded-full bg-red-600 shadow-[0_0_40px_rgba(220,38,38,0.9)]"
        />
      </motion.div>
    </section>
  );
}