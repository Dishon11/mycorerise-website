// Import motion for animations
import { motion } from "framer-motion";

export default function SimpleRoutine() {
  // Steps data: each object has a number, title, and description
  // Keeping them in an array makes it easy to loop (map) and render
  const steps = [
    {
      num: "01",
      title: "Follow the Micro‑Exercises",
      desc: "Short, guided steps that fit between meetings or breaks.",
    },
    {
      num: "02",
      title: "Track Your Energy and Comfort",
      desc: "Notice changes in focus, posture, and blood sugar stability.",
    },
    {
      num: "03",
      title: "Build Long‑Term Consistency",
      desc: "Small habits practiced daily lead to real metabolic benefits.",
    },
  ];

  // Animation variants for the whole section
  // hidden: start state (invisible, pushed down)
  // visible: end state (visible, normal position)
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "linear" },
    },
  };

  // Animation variants for each card
  // hidden: start state (invisible, shifted right)
  // visible: end state (visible, normal position)
  // delay: staggered entry based on index (i)
  const cardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "linear" },
    }),
  };

  return (
    // Main section wrapper
    // py-10: vertical padding
    // bg-gradient-to-b: background gradient from white → purple → white
    <motion.section
      className="section py-10 bg-gradient-to-b from-white via-purple-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Content container */}
      {/* max-w-6xl: limits width for readability
          mx-auto: centers horizontally
          px-6: horizontal padding
          text-center: center text by default */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading motion */}
        {/* text-3xl → md:text-5xl: responsive font sizes
            font-bold: bold weight
            text-[#006183]: brand color
            mb-12: margin bottom */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#006183] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          A Simple Routine You Can Stick To
        </motion.h2>

        {/* Steps grid with motion */}
        {/* grid: enables CSS grid
            grid-cols-1: 1 column on mobile
            sm:grid-cols-2: 2 columns on small tablets
            md:grid-cols-3: 3 columns on medium+
            gap-8 → gap-20: spacing between cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-20">
          {steps.map((s, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              // flex-col: stack content vertically
              // items-start: align items to start
              // p-6 → md:p-8: responsive padding
              // rounded-2xl: rounded corners
              // bg-[#006183]: brand background
              // text-white: text color
              // shadow-lg: drop shadow
              // hover:scale-105: zoom effect on hover
              className="flex flex-col items-start p-6 md:p-8 rounded-2xl bg-[#006183] text-white shadow-lg transition hover:scale-105"
            >
              {/* Step number */}
              {/* text-5xl → md:text-7xl: responsive font sizes
                  w-full text-center: center horizontally
                  font-bold: bold weight
                  mb-4 → md:mb-6: responsive spacing */}
              <div className="text-5xl md:text-7xl w-full text-center font-bold mb-4 md:mb-6">
                {s.num}
              </div>

              {/* Step title */}
              {/* text-lg → md:text-xl: responsive font sizes
                  w-full text-center: center horizontally
                  font-semibold: medium-bold weight */}
              <h3 className="text-lg md:text-xl w-full text-center font-semibold">
                {s.title}
              </h3>

              {/* Step description */}
              {/* mt-2 → md:mt-3: responsive spacing
                  text-sm → md:text-base: responsive font sizes
                  text-white/80: slightly transparent white for softer look
                  w-full text-center: center horizontally */}
              <p className="mt-2 md:mt-3 text-sm md:text-base text-white/80 w-full text-center">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}