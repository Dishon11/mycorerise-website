import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false); // track mobile menu state

  // Scroll listener to auto-highlight based on section in view
  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      const about = document.getElementById("about");
      const faq = document.getElementById("faq");

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (home && scrollY < about.offsetTop - windowHeight / 3) {
        setActive("home");
      } else if (about && scrollY < faq.offsetTop - windowHeight / 3) {
        setActive("about");
      } else {
        setActive("faq");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper for smooth scroll
  const handleNavClick = (id, section) => {
    setActive(section);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu after click
  };

  // const scrollToSection = () => {
  //   const section = document.getElementById("footer");
  //   section.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.png')",
      }}
    >
      {/* Logo */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2">
        <img
          src="/images/final_4.svg"
          alt="MCR Logo"
          className="h-10 w-10 sm:h-12 sm:w-12 object-contain p-1"
        />
        <span className="text-white text-lg sm:text-xl font-semibold tracking-wide drop-shadow-lg">
          MyCoreRise
        </span>
      </div>

      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "linear" }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 md:left-1/2 md:transform md:-translate-x-1/2 z-40 flex justify-center"
      >
        {/* Desktop Navbar */}
        <nav className="hidden md:flex  rounded-4xl w-[500px] justify-evenly bg-white/20 backdrop-blur-md border border-white/30 shadow-lg text-white px-4 py-2 space-x-4">
          {["home", "about", "faq"].map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section, section)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ease-linear ${
                active === section
                  ? "bg-white text-black shadow-md w-full"
                  : "hover:bg-white/30 w-full"
              }`}
            >
              {section === "home"
                ? "Home"
                : section === "about"
                ? "About Us"
                : "FAQ"}
            </button>
          ))}
        </nav>

        {/* Mobile Navbar */}
        <div className="md:hidden relative">
          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* AnimatePresence handles mount/unmount animations */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute right-0 mt-2 w-40 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg flex flex-col text-white"
              >
                {["home", "about", "faq"].map((section) => (
                  <button
                    key={section}
                    onClick={() => handleNavClick(section, section)}
                    className={`py-2 px-4 text-left rounded-md font-medium transition-all duration-300 ease-linear ${
                      active === section
                        ? "bg-white text-black shadow-md"
                        : "hover:bg-white/30"
                    }`}
                  >
                    {section === "home"
                      ? "Home"
                      : section === "about"
                      ? "About Us"
                      : "FAQ"}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-start px-4 sm:px-6 md:px-16 text-center md:text-left">
        <div className="max-w-xl text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            className="font-bold pt-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            style={{
              fontFamily: "Libre Baskerville",
            }}
          >
            Healthy Workdays Without the Stress
          </motion.h1>

          <motion.a
            href="#footer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            // onClick={scrollToSection}
            transition={{ duration: 0.8, ease: "linear", delay: 0.5 }}
            className="mt-6 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 
              bg-white/20 backdrop-blur-md border border-white/30 
              text-black font-semibold rounded-full shadow-lg transition 
              hover:bg-white/50 text-sm sm:text-base md:text-lg"
          >
            Join the Waitlist →
          </motion.a>

        </div>
      </div>
    </section>
  );
}
