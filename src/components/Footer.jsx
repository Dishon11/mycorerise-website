// import React from "react";
// import { Link } from "react-router-dom";
// import countries from "./countries.json";

// export default function Footer() {
//   return (
//     <footer className="border-t border-gray-200 bg-[#001D28] pt-20">
//       {/* Frosted container with waitlist form */}
//       <div className="max-w-4xl min-h-[200px] mx-auto bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-6 md:p-10">
//         <h1 className="text-white text-center text-[18px] md:text-[22px] lg:text-[28px] mb-6">
//           Start With One Simple Change Today
//         </h1>

//         {/* Waitlist form */}
//         {/* flex-col on mobile, flex-row on larger screens */}
//         <form className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center pt-5">
//           {/* Email field */}
//           <input
//             type="email"
//             name="email"
//             required
//             placeholder="Enter your email"
//             className="flex-1 rounded-md border border-white/30 bg-white/20 backdrop-blur-md px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />

//           {/* Country field */}
//           <select
//             name="country"
//             required
//             className="w-full md:w-48 flex-1 rounded-md border border-white/30 bg-white/20 backdrop-blur-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             <option value="">Select your country</option>
//             {countries.map((country) => (
//               <option key={country.alpha2} value={country.name}>
//                 {country.name}
//               </option>
//             ))}
//           </select>

//           {/* Glassmorphic button */}
//           <button
//             type="submit"
//             className="rounded-md border border-white/30 bg-white/20 backdrop-blur-md text-white py-2 px-6 hover:bg-black transition"
//           >
//             Join Waitlist
//           </button>
//         </form>

//         <p className="text-white flex justify-center pt-6 text-sm md:text-base">
//           Get your daily desk-movement plan straight to your inbox.
//         </p>
//       </div>

//       {/* Divider */}
//       <hr className="border-gray-700 my-10" />

//       {/* Footer content grid */}
//       {/* flex-col on mobile, flex-row on larger screens */}
//       <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 px-6 max-w-7xl mx-auto">
//         {/* Logo + Tagline */}
//         <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
//           <p className="flex justify-center w-full">
//             <img
//               src="public/mck_final.png"
//               alt="MyCoreRise Logo"
//               className="h-30 w-auto border border-white rounded-3xl"
//             />
//           </p>
//           <p className="text-sm text-gray-300 max-w-md">
//             MyCoreRise empowers busy professionals to transform their health
//             through simple, science‑backed micro‑exercises that fit seamlessly
//             into real schedules, helping you rise stronger every day.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-semibold text-white">Quick Links</h4>
//           <ul className="mt-2 text-sm text-gray-300 space-y-1">
//             <li>
//               <a href="#home" className="hover:text-blue-400">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="hover:text-blue-400">
//                 About Us
//               </a>
//             </li>
//             <li>
//               <a href="#feature" className="hover:text-blue-400">
//                 Features
//               </a>
//             </li>
//             <li>
//               <a href="#faq" className="hover:text-blue-400">
//                 FAQs
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <h4 className="font-semibold text-white">Contact</h4>
//           <ul className="mt-2 text-sm text-gray-300 space-y-1">
//             <li>
//               <a
//                 href="mailto:dis.2005.in@gmail.com"
//                 className="hover:text-blue-400"
//               >
//                 dis.2005.in@gmail.com
//               </a>
//             </li>
//             <li>
//               <span className="text-gray-300">+91 98765 43210</span>
//             </li>
//             <li>
//               <a
//                 href="https://twitter.com/mycorerise"
//                 className="hover:text-blue-400"
//               >
//                 Instagram
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Legal */}
//         <div>
//           <h4 className="font-semibold text-white">Legal</h4>
//           <ul className="mt-2 text-sm text-gray-300 space-y-1">
//             <li>
//               <a href="#" className="hover:text-purple-400">
//                 Privacy Policy
//               </a>
//             </li>
//             <li>
//               <Link to="/terms" className="hover:text-purple-400">
//                 Terms & Conditions
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400 mt-10">
//         © {new Date().getFullYear()} MyCoreRise. All rights reserved.
//       </div>
//     </footer>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import countries from "./countries.json";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      // 🔹 CHANGE STARTS HERE: replace direct localhost URL with baseUrl
      const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5174";

      const res = await fetch(`${baseUrl}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, country }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message || "Something went wrong.");
        return;
      }

      setMessage(data.message);
      setEmail("");
      setCountry("");
    } catch (err) {
      console.error(err);
      setMessage("Error submitting waitlist form.");
    }
  };

  return (
    <footer
      className="border-t border-gray-200 bg-[#001D28] pt-20 "
      id="footer"
    >
      {/* Frosted container with waitlist form */}
      <div className="max-w-4xl min-h-[200px] mx-auto bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg p-6 md:p-10">
        <h1 className="text-white text-center text-[18px] md:text-[22px] lg:text-[28px] mb-6">
          Start With One Simple Change Today
        </h1>

        {/* Waitlist form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center pt-5"
        >
          {/* Email field */}
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-md border border-white/30 bg-white/20 backdrop-blur-md px-3 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Country field */}
          <select
            name="country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full md:w-48 flex-1 rounded-md border border-white/30 bg-white/20 backdrop-blur-md px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option  value="">Select your country</option>
            {countries.map((c) => (
              <option key={c.alpha2} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Glassmorphic button */}
          <button
            type="submit"
            className="rounded-md border border-white/30 bg-white/20 backdrop-blur-md text-white py-2 px-6 hover:bg-black transition"
          >
            Join Waitlist
          </button>
        </form>

        {/* Feedback message */}
        {message && (
          <p className="text-white text-center pt-6 text-sm md:text-base">
            {message}
          </p>
        )}
      </div>

      {/* Divider */}
      <hr className="border-gray-700 my-10" />

      {/* Footer content grid */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 px-6 max-w-7xl mx-auto">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          <p className="flex justify-center w-full">
            <img
              src="/images/mck14.png"
              alt="MyCoreRise Logo"
              className="h-30 w-auto border border-white rounded-3xl"
            />
          </p>
          <p className="text-sm text-gray-300 max-w-md">
            MyCoreRise empowers busy professionals to transform their health
            through simple, science‑backed micro‑exercises that fit seamlessly
            into real schedules, helping you rise stronger every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li>
              <a href="#home" className="hover:text-blue-400 ">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 ">
                About Us
              </a>
            </li>
            <li>
              <a href="#feature" className="hover:text-blue-400 ">
                Features
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-blue-400 ">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li>
              <a
                href="mailto:dssquarecorefitness007@gmail.com"
                className="hover:text-blue-400 "
              >
                dssquarecorefitness007@gmail.com
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/mycorerise"
                className="hover:text-blue-400 "
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-white">Legal</h4>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li>
              <Link
                to="/privacy-policy"
                className="  hover:text-blue-400 underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-400 underline">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400 mt-10">
        © {new Date().getFullYear()} MyCoreRise. All rights reserved.
      </div>
    </footer>
  );
}
