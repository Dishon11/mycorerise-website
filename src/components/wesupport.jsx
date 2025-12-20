// Import motion for animations
import { motion } from "framer-motion";

// Import images for icons and tagline illustration
import officework from "../assets/black_office.png";
import freelance from "/images/freelance.png";
import student from "/images/student.png";
import anyone from "/images/anyone.png";
import health from "/images/health.jpg";

export default function WhoWeSupport() {
  // Data for the group cards
  // Each object has a title, description, and icon
  const groups = [
    {
      title: "Office Workers",
      desc: "Sit 8–10 hours a day at desks.",
      icon: officework,
    },
    {
      title: "Freelancers & Remote Workers",
      desc: "Spend long hours on screens.",
      icon: freelance,
    },
    { title: "Students", desc: "Study for extended periods.", icon: student },
    {
      title: "Anyone",
      desc: "Wanting simple daily health without long workouts.",
      icon: anyone,
    },
  ];

  // Animation variants for the container
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
  // Adds staggered delay based on index (i)
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "linear" },
    }),
  };

  return (
    // Main section wrapper
    // py-20: vertical padding
    // bg-gradient-to-b: background gradient from white → purple → white
    <motion.section
      id="feature"
      className="section py-20 bg-gradient-to-b from-white via-purple-50 to-white"
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
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#006183] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          {/* Who We Support */}
          Who We Support & How We Help
        </motion.h2>

        {/* Grid of groups */}
        {/* grid: enables CSS grid
            md:grid-cols-2: 1 column on mobile, 2 columns on medium+
            gap-8: spacing between cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {groups.map((g, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              // group: enables hover effects on children
              // flex-row: icon + text side by side
              // p-6: padding inside card
              // rounded-2xl: rounded corners
              // backdrop-blur-md: frosted glass effect
              // hover:scale-105: zoom effect on hover
              // hover:bg-[#006183]: background color change on hover
              className="group flex flex-row items-center p-6 rounded-2xl 
                         bg-white/30 backdrop-blur-md border border-white/40 
                         shadow-lg transition hover:scale-105 text-left hover:bg-[#006183]"
            >
              {/* Logo on left */}
              <img
                src={g.icon}
                alt={g.title}
                className="w-12 h-12 sm:w-14 sm:h-14 mr-6 filter group-hover:invert"
              />

              {/* Content on right */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-white">
                  {g.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2 group-hover:text-white">
                  {g.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline + image */}
        {/* grid: 1 column on mobile, 2 columns on medium+
            mt-16: margin top
            pt-10: padding top */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "linear" }}
        >
          {/* Tagline text */}
          <h3 className="text-xl sm:text-2xl md:text-4xl lg:text-[70px] font-bold text-[#006183] flex items-center text-center md:text-left">
            Health That Works Where You Work
          </h3>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={health}
              alt="health"
              className="w-full sm:w-[400px] md:w-[500px] lg:w-[660px] h-auto object-cover rounded-2xl m-2"
            />
          </div>
        </motion.div>
      </div>

      {/* 5 feature cards with motion */}
      {/* flex-wrap: allows wrapping on small screens
          gap-10: spacing between cards
          p-5: padding
          mt-20: margin top */}
      <motion.div
        className="flex justify-center flex-wrap gap-6 sm:gap-10 p-5 mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {[
          {
            title: "Clinically-informed 2–5 Minute Desk Movement Routines",
            desc: "Evidence-based micro-movements designed to ease stiffness, improve circulation, and fit seamlessly into your workday.",
          },
          {
            title: "Research-Backed Post-Meal Activity",
            desc: "Structured light-activity prompts based on clinical findings that link short walks with healthier post-meal glucose responses.",
          },
          {
            title: "Focus-Boosting Micro Breaks",
            desc: "Guided pauses that restore clarity and energy, helping professionals stay sharp through long stretches of work.",
          },
          {
            title: "Habit-Science–Driven Tracking",
            desc: "Minimal, behavior-backed checklists that make it easier to stay consistent and turn tiny actions into long-term habits.",
          },
          {
            title: "Workstyle–Adaptive Protocols",
            desc: "Flexible routines designed to work in offices, remote setups, IT floors, and freelance schedules without disrupting real work.",
          },
        ].map((f, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            // max-w: limits width of card
            // h-fit: height adjusts to content
            // p-6: padding
            // rounded-xl: rounded corners
            // text-center: center text
            // backdrop-blur-2xl: stronger frosted glass
            // bg-gradient-to-b: gradient background
            className="max-w-[300px] h-fit p-6 sm:p-8 rounded-xl text-center 
                       backdrop-blur-2xl bg-gradient-to-b from-[#A3DFFF] to-white"
          >
            <h1 className="font-bold pb-3 sm:pb-5 text-[#006183] text-base sm:text-lg md:text-xl">
              {f.title}
            </h1>
            <p className="text-sm sm:text-base">{f.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Closing tagline */}
      <motion.div
        className="font-bold text-2xl font-[Poppins] sm:text-3xl md:text-5xl text-center pt-12 sm:pt-16 text-[#006183] mb-12 sm:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        “Small movements Big improvements”
      </motion.div>
    </motion.section>
  );
}
