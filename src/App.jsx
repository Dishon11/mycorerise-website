// // import Navbar from "./components/Navbar.jsx";
// import Hero from "./components/Hero.jsx";
// import WhyStruggle from "./components/WhyStruggle.jsx";
// import Flowchart from "./components/Flowchart.jsx";
// import OfficeRoutine from "./components/OfficeRoutine.jsx";
// import FAQ from "./components/FAQ.jsx";
// import Footer from "./components/Footer.jsx";
// import Terms from "./components/Terms.jsx";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 text-gray-900">
//       {/* <Navbar /> */}
//       <main>
//         <Hero />
//         <WhyStruggle />
//         <Flowchart />
//         <OfficeRoutine />
//         <FAQ />
//       </main>
//       <Routes>
        
//       </Routes>
//       <Footer />
//     </div>
//   );
// }


// src/App.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import WhyStruggle from "./components/WhyStruggle";
import Flowchart from "./components/Flowchart";
import OfficeRoutine from "./components/OfficeRoutine";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Terms from "./components/Terms";
import WhoWeSupport from "./components/wesupport";
import AboutUs from "./components/AboutUs";
import PrivacyPolicy from "./components/privacy";

export default function App() {
  const location = useLocation(); // ✅ get current route

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50 text-gray-900">
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhyStruggle />
                <AboutUs/>
                <Flowchart />
                <WhoWeSupport/>
                <OfficeRoutine />
                <FAQ />
              </>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </main>

      {/* ✅ Only show footer if NOT on /terms */}
      {location.pathname !== "/terms" && <Footer />}
    </div>
  );
}