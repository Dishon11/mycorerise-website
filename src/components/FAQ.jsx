import { useState } from "react";

const faqs = [
  { q: "What is a desk‑movement plan?", a: "A guided set of micro‑exercises designed to fit between meetings and breaks — no gym required." },
  { q: "Do I need special equipment?", a: "No. All routines are designed for typical office setups — chair, desk, and a few minutes." },
  { q: "How often should I do the routines?", a: "Aim for short movement breaks every 60–90 minutes and light post‑meal activity." },
  { q: "Is there a subscription?", a: "We offer a free starter plan. Premium features will be announced during launch." },
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState(0);   // desktop hover
  const [openIdx, setOpenIdx] = useState(null);    // mobile dropdown

  return (
    <section id="faq" className="section py-16 mb-10">
      <div className="flex items-end justify-between pb-10">
        <div>
          <h2 className="text-3xl sm:text-5xl md:text-[70px] font-bold text-[#006183]">
            Got Questions
          </h2>
          <p className="text-2xl sm:text-4xl md:text-[70px] font-bold text-[#006183]">
            We’ve got answers.
          </p>
        </div>
      </div>

      {/* Large screens: hover preview */}
      <div className="hidden lg:flex mt-8 relative h-[300px] justify-center items-center">
        {/* Left: list of questions */}
        <ul className="lg:w-1/2 space-y-3 relative z-10">
          {faqs.map((item, idx) => (
            <li
              key={idx}
              className={`group p-4 rounded-xl border cursor-pointer transition 
                ${activeIdx === idx ? "bg-[#FAFBFF] border-transparent" : "bg-white"} 
                hover:bg-[#FAFBFF] hover:border-transparent`}
              onMouseEnter={() => setActiveIdx(idx)}
              onClick={() => setActiveIdx(idx)}
            >
              <div className="flex items-center justify-between">
                <div
                  className={`w-3 h-3 rounded-full mr-3 transition-colors 
                    ${activeIdx === idx ? "bg-[#006183]" : "bg-[#009FD8]"} 
                    group-hover:bg-[#006183]`}
                ></div>
                <span className="font-medium flex-1">{item.q}</span>
                <span className="text-blue-600">→</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Right: dynamic answer card */}
        <div
          key={activeIdx}
          className="lg:w-1/2 -ml-12 bg-[#FAFBFF] border border-gray-200
                     backdrop-blur-md rounded-2xl h-[300px] shadow-xl p-6 pl-32 pt-10
                     transition-all duration-300 ease-in-out"
        >
          <h3 className="text-lg font-semibold pb-5">{faqs[activeIdx].q}</h3>
          <p className="mt-2 text-gray-700">{faqs[activeIdx].a}</p>
        </div>
      </div>

      {/* Small/medium screens: dropdown accordion */}
      <div className="block lg:hidden mt-8 space-y-3">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="bg-white/20 border border-white/30 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex justify-between items-center p-4 font-semibold text-left"
            >
              <span>{item.q}</span>
              <span>{openIdx === idx ? "−" : "+"}</span>
            </button>

            <div
              className={`px-4 text-gray-700 text-sm transition-all duration-300 ease-in-out ${
                openIdx === idx ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}