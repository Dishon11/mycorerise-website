import { motion } from "framer-motion";

export default function Founders() {
  const founders = [
    {
      name: "Divyank Surum",
      role: "Co‑Founder",
      bio: "Marketing leader and strategist who helped bring the idea to life, focused on guiding teams, shaping brand vision, and driving growth through creative campaigns.",
      img: "/images/mck_final.png", // replace with actual photo
    },
    {
      name: "Dishon John Siddapur",
      role: "Co‑Founder",
      bio: "Engineer and tech enthusiast passionate about building scalable systems, solving complex problems, and creating reliable products.",
      img: "/images/mck_final.png", // replace with actual photo
    },
  ];

  return (
    <motion.section
      id="about"
      className="section py-20 bg-gradient-to-b from-white via-purple-50 to-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "linear" }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#006183] mb-28"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          Meet the Founders
        </motion.h2>

        {/* Founders grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {founders.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.2 }}
              className="bg-white/30 backdrop-blur-md border border-white/40 rounded-2xl shadow-lg p-6 text-left hover:scale-105 transition"
            >
              <img
                src={f.img}
                alt={f.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-6 border-4 border-[#006183]"
              />
              <h3 className="text-xl font-semibold text-[#006183] text-center">
                {f.name}
              </h3>
              <p className="text-sm text-gray-600 text-center">{f.role}</p>
              <p className="mt-4 text-gray-700 text-sm leading-relaxed text-center">
                {f.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
