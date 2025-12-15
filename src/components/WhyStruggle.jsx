import { motion } from "framer-motion";

const items = [
  {
    title: "Long sitting hours",
    subtitle: "Most people spend 8–10 hours at a desk",
    body: "Many workers remain sitting at computers throughout most of the workday. Remaining still for long periods causes muscles to disengage while bodily processes slow. As a result, circulation drops, joints tighten, and alignment suffers. Gradually, this pattern contributes to ongoing tiredness and conditions tied to sedentary habits.",
    image: "/images/chair.jpg",
  },
  {
    title: "Persistent stiffness",
    subtitle: "Stillness stresses the spine and muscles",
    body: "Sitting at a desk keeps your body still for extended periods, so the spine gets stressed while nearby muscles stiffen. Discomfort often appears in the neck, shoulders, or lower back - particularly when working nonstop. Over time, this strain accumulates slowly until it feels like a normal daily experience. Some overlook it completely, yet eventually it impacts focus and emotional well-being.",
    image: "/images/image1.png",
  },
  {
    title: "Daily energy drain",
    subtitle: "Sedentary routines zap focus and motivation",
    body: "Without movement breaks, energy levels dip and concentration fades. Small circulation boosts and posture resets are missing from most routines, leaving professionals sluggish and less productive throughout the day.",
    image: "/images/late_night.jpg",
  },
  {
    title: "No time for workouts",
    subtitle: "Packed schedules kill consistency",
    body: "Even with packed schedules - jammed full of meetings, chores, travel, or kid stuff - not many carve out 45 to 60 minutes daily for workouts. People keen on staying healthy usually feel mentally drained by nightfall. Because of this, solid plans seldom become real habits. Health slips down the priority list, seeing how typical workout routines don't match up with everyday life.",
    image: "/images/image2.png",
  },
];

export default function WhyStruggle() {
  return (
    <section id="whyStruggle" className="bg-white py-20 px-6 md:px-12">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "linear" }}
        viewport={{ once: true }}
        className="text-center text-2xl md:text-4xl font-bold text-[#006183]"
      >
        Why Most Working Professionals Struggle With Daily Health
      </motion.h2>

      {/* Four separate sections */}
      <div className="mt-12 space-y-24 max-w-6xl mx-auto">
        {items.map((it, idx) => {
          const isEven = idx % 2 === 0; // 0,2 → image left; 1,3 → image right
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${
                !isEven ? "md:flex-row-reverse" : ""
              } items-center gap-8`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded-[20px] shadow-md overflow-hidden h-[400px] md:w-1/2 w-full"
              >
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-xl shadow-md bg-white p-6 flex flex-col justify-center md:w-1/2 w-full"
              >
                <h3
                  className="text-xl font-semibold text-[#006183]"
                  style={{ fontFamily: "Poppins", fontSize: "40px" }}
                >
                  {it.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{it.subtitle}</p>
                <p
                  className="mt-3 text-gray-700 pt-5"
                  style={{ fontFamily: "Poppins", fontSize: "20px" }}
                >
                  {it.body}
                </p>
              </motion.div>
            </div>
          );
        })}

        {/* Quote block underneath last image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3
            className="w-full text-center  md:text-center text-2xl md:text-4xl font-bold text-[#006183]"
            style={{ fontFamily: "Poppins" }}
          >
            “Extended sitting pushes blood sugar in the wrong direction.”
          </h3>
          <p
            className="text-right text-gray-600 mt-2"
            style={{ fontFamily: "Poppins", fontSize: "18px" }}
          >
            — Times of India
          </p>
        </motion.div>
      </div>
    </section>
  );
}