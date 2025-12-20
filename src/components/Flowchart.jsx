// Import motion from framer-motion
// This library lets us animate React components easily (fade, slide, etc.)
import { motion } from "framer-motion";

// Our data: each string is one "flow point"
// Keeping them in an array makes it easy to loop (map) and render them
const flowPoints = [
  "Blood Sugar Spikes Are More Common In People Who Stay Seated For Long Stretches.",
  "Stiffness And Postural Issues Develop Faster When There Are No Movement Breaks.",
  "Prolonged Sitting Increases The Risk Of Metabolic Syndrome And Insulin Resistance.",
  "Light Activity Spread Throughout The Day Helps Stabilize Energy And Prevent Fatigue.",
];

// Main component
export default function FlowchartSection() {
  return (
    // SECTION wrapper
    // - relative: allows overlay + content positioning
    // - min-h-screen: ensures section fills viewport on mobile
    // - md:min-h-full: normal height on larger screens
    // - bg-cover/bg-center/bg-no-repeat: background image styling
    // - pt/pb: responsive padding (more top padding on mobile so boxes stay higher)
    <section
      id="flowchart"
      className="relative min-h-screen md:min-h-full w-full bg-cover bg-center bg-no-repeat pt-12 pb-8 sm:pt-16 sm:pb-12 md:py-24 px-4 sm:px-6 md:px-12"
      style={{
        backgroundImage: "url('/images/women.jpg')", // background photo
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex w-full h-fit justify-center text-white 
                pb-8 sm:pb-12 md:pb-16 lg:pb-20 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12">
          {/* Who We Support */}
          Move More, Stress Less
        </h2>
      </motion.div>
      {/* Overlay for contrast */}
      {/* absolute inset-0: covers the whole section
          bg-black/30: semi-transparent black overlay
          z-0: sits behind the content */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Flowchart container */}
      {/* relative z-10: ensures content sits above overlay
          max-w-5xl mx-auto: centers content and limits width
          flex flex-col: stack items vertically
          space-y-8 sm:space-y-16 md:space-y-32: vertical gap between boxes
            - small gap on mobile (space-y-8)
            - medium gap on tablets (space-y-16)
            - large gap on desktop (space-y-32) */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col space-y-8 sm:space-y-16 md:space-y-32">
        {flowPoints.map((text, idx) => (
          // Each flow point is wrapped in a flex container
          <div key={idx} className="relative flex w-full">
            {/* Motion div for animation */}
            {/* initial: starting state (invisible + pushed down)
                whileInView: final state (visible + normal position)
                transition: controls speed and delay
                viewport={{ once: true }}: animation runs only once when scrolled into view
                NOTE: This works on all screen sizes, including mobile */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
              viewport={{ once: true }}
              // Box styling:
              // - w-full: full width on mobile
              // - sm:w-[80%]: narrower on small tablets
              // - md:w-[40%]: zigzag layout on desktop
              // - backdrop-blur-md: frosted glass effect
              // - rounded-xl: rounded corners
              // - p-4 sm:p-6 md:p-8: responsive padding
              // - text-white: text color
              // - shadow-lg: drop shadow
              // - border border-white/30: subtle border
              // - flex items-start gap-3: number + text side by side
              // - conditional classes: left vs right alignment
              className={`w-full sm:w-[80%] md:w-[40%] backdrop-blur-md rounded-xl p-4 sm:p-6 md:p-8 text-white shadow-lg border border-white/30 flex items-start gap-3 sm:gap-4
                ${
                  idx % 2 === 0
                    ? "self-start text-left bg-white/10"
                    : "self-start ml-auto text-left bg-white/10"
                }`}
            >
              {/* Number badge */}
              {/* flex-shrink-0: prevents shrinking
                  w-8 h-8 (mobile), sm:w-10 sm:h-10 (tablet+): circle size
                  rounded-full: makes it a circle
                  bg-[#006183]: brand color background
                  flex items-center justify-center: centers number inside circle
                  font-bold text-white: bold white number
                  text-sm sm:text-base: responsive font size */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#006183] flex items-center justify-center font-bold text-white text-sm sm:text-base">
                {idx + 1}
              </div>

              {/* Flow point text */}
              {/* text-base (mobile), sm:text-lg (tablet), md:text-xl (desktop): responsive font size
                  font-medium: medium weight
                  font-[Poppins]: custom font family
                  leading-snug: tighter line spacing for readability */}
              <p className="text-base sm:text-lg md:text-xl font-medium font-[Poppins] leading-snug">
                {text}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
