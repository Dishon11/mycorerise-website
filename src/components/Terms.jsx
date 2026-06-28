// // src/components/Terms.jsx
// import React from "react";

// export default function Terms() {
//   return (
//     <div className="min-h-screen w-full bg-white text-gray-900 px-6 py-10 md:px-20 lg:px-40">
//       <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
//       {/* <p className="text-sm text-gray-500 mb-8">Last Updated: DD/MM/YYYY</p> */}

//       <p>
//         Welcome to MyCoreRise (the “Website”). By accessing, browsing, or using
//         this Website, you agree to comply with and be bound by the following
//         Terms and Conditions. If you do not agree, please stop using the Website
//         immediately.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
//       <ul className="list-disc ml-6 space-y-1">
//         <li>You have read and understood these Terms.</li>
//         <li>You agree to be legally bound by them.</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">2. Eligibility</h2>
//       <p>To use this Website, you must:</p>
//       <ul className="list-disc ml-6 space-y-1">
//         <li>Be 18 years or older, or</li>
//         <li>Have parental/legal guardian permission if under 18.</li>
//       </ul>
//       <p>You are responsible for providing accurate information and maintaining your account security.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">3. Health & Fitness Disclaimer</h2>
//       <p>
//         MyCoreRise offers fitness-related content including workouts, exercise
//         guides, nutrition tips, and general wellness information. This
//         information is provided for educational and informational purposes only.
//       </p>
//       <p>It is not intended as:</p>
//       <ul className="list-disc ml-6 space-y-1">
//         <li>Medical advice</li>
//         <li>Professional diagnosis</li>
//         <li>Treatment or cure</li>
//       </ul>
//       <p>
//         You should consult a licensed medical professional before making changes
//         to your exercise routine, diet, or lifestyle—especially if you have:
//       </p>
//       <ul className="list-disc ml-6 space-y-1">
//         <li>Pre-existing medical conditions</li>
//         <li>Heart, respiratory, or chronic issues</li>
//         <li>Recent surgeries or injuries</li>
//         <li>Are pregnant or postpartum</li>
//       </ul>
//       <p>You acknowledge that physical activity involves risk and agree that you participate at your own risk.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">4. User Conduct & Responsibilities</h2>
//       <p>When using MyCoreRise, you agree not to:</p>
//       <ul className="list-disc ml-6 space-y-1">
//         <li>Use the Website for illegal, abusive, or harmful activities</li>
//         <li>Upload or transmit harmful content (malware, spam, or offensive material)</li>
//         <li>Copy, resell, distribute, or exploit Website content without permission</li>
//         <li>Attempt to hack, reverse engineer, or disrupt the Website services</li>
//       </ul>
//       <p>You are responsible for secure use of your account and password.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">5. Payments & Subscriptions (If Applicable)</h2>
//       <ul className="list-disc ml-6 space-y-1">
//         <li>Fees are billed upfront</li>
//         <li>Payments are non-refundable, unless required by law</li>
//         <li>Subscriptions may renew automatically unless canceled</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">6. Privacy Policy</h2>
//       <p>
//         Your information may be collected to enhance user experience and Website
//         performance. Use of personal information is governed by our Privacy
//         Policy, which forms part of these Terms.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">7. Intellectual Property Rights</h2>
//       <p>
//         All Website content — including text, programs, graphics, videos, plans,
//         branding, and logos — are the exclusive property of MyCoreRise and
//         protected by copyright and trademark laws.
//       </p>
//       <p>Unauthorized use, reproduction, or distribution is prohibited.</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">8. Third-Party Links</h2>
//       <p>
//         The Website may contain links to third-party websites or services.
//         MyCoreRise is not responsible for:
//       </p>
//       <ul className="list-disc ml-6 space-y-1">
//         <li>Content</li>
//         <li>Privacy practices</li>
//         <li>Actions</li>
//         <li>Services offered by third parties</li>
//       </ul>

//       <h2 className="text-xl font-semibold mt-6 mb-2">9. Limitation of Liability</h2>
//       <p>To the maximum extent permitted by law, MyCoreRise is not liable for:</p>
//       <ul className="list-disc ml-6 space-y-1">
//         <li>Personal injury</li>
//         <li>Loss or damage due to Website use</li>
//         <li>Technical issues, downtime, or data loss</li>
//         <li>Reliance on information provided on the Website</li>
//       </ul>
//       <p>The Website is offered “as is” and “as available.”</p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">10. Termination of Access</h2>
//       <p>
//         We reserve the right to restrict or terminate access to any user who
//         violates these Terms or engages in misuse, without prior notice.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">11. Changes to Terms</h2>
//       <p>
//         We may update these Terms at any time. The updated version will replace
//         previous versions, and continued Website use indicates acceptance.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">12. Governing Law</h2>
//       <p>
//         These Terms shall be governed by the laws of India, without regard to
//         conflict-of-law principles.
//       </p>

//       <h2 className="text-xl font-semibold mt-6 mb-2">13. Contact Information</h2>
//       <p>
//         For questions, support, or legal matters, email us at:{" "}
//         <a
//           href="mailto:dssquarecorefitness007@gmail.com"
//           className="text-purple-600 hover:underline"
//         >
//           dssquarecorefitness007@gmail.com
//         </a>
//       </p>
//     </div>
//   );
// }

// ========================================================================================

import { useEffect, useState } from "react";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "eligibility", title: "Eligibility" },
  { id: "accounts", title: "Accounts" },
  { id: "services", title: "Our Services" },
  { id: "responsibilities", title: "User Responsibilities" },
  { id: "medical", title: "Medical Disclaimer" },
  { id: "ip", title: "Intellectual Property" },
  { id: "ai", title: "AI Features" },
  { id: "payments", title: "Subscriptions & Payments" },
  { id: "termination", title: "Termination" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnity", title: "Indemnification" },
  { id: "law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Us" },
];

export default function TermsAndConditions() {
  const [active, setActive] = useState("acceptance");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Legal
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Terms & Conditions
          </h1>

          <p className="mt-6 max-w-3xl text-[18px] leading-8 text-slate-600">
            These Terms and Conditions govern your access to and use of
            MyCoreRise. By creating an account or using our mobile application,
            you agree to comply with these Terms.
          </p>

          <p className="mt-8 text-sm text-slate-500">Last Updated: June 2026</p>
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl gap-20 px-6 py-16">
        <aside className="sticky top-10 hidden h-fit w-64 lg:block">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Contents
          </p>

          <nav className="space-y-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`block text-sm transition ${
                  active === section.id
                    ? "font-semibold text-blue-600"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>

        <main className="w-full max-w-3xl">
          <section
            id="acceptance"
            className="scroll-mt-24 border-b border-slate-200 pb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Acceptance of Terms
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              Welcome to MyCoreRise. By downloading, accessing, creating an
              account, or using the MyCoreRise mobile application, website, or
              related services, you acknowledge that you have read, understood,
              and agree to be bound by these Terms and Conditions as well as our
              Privacy Policy.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              If you do not agree with these Terms, you must discontinue using
              MyCoreRise immediately.
            </p>
          </section>
          <section
            id="eligibility"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">Eligibility</h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              MyCoreRise is intended for individuals who are at least 16 years
              of age. Users under the age of 16 may only use the application
              with the involvement or consent of a parent or legal guardian
              where required by applicable law.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              By using MyCoreRise, you represent that you satisfy these
              eligibility requirements and have the legal capacity to enter into
              these Terms.
            </p>
          </section>
          <section
            id="accounts"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">Accounts</h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              To access certain features, you may be required to create an
              account using Google Sign-In or other supported authentication
              methods.
            </p>

            <ul className="mt-8 list-disc pl-6 space-y-2 text-[17px] leading-8 text-slate-700">
              <li>Provide accurate information.</li>
              <li>Maintain the security of your account.</li>
              <li>Keep your login credentials confidential.</li>
              <li>
                Notify us if you believe your account has been compromised.
              </li>
              <li>
                You are responsible for activities occurring under your account.
              </li>
            </ul>
          </section>
          <section
            id="services"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">Our Services</h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              MyCoreRise is a wellness platform designed to help users build
              healthier daily habits through personalized micro-exercises
              inspired by Indian Marma techniques.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              Features may include guided exercise sessions, reminders, wellness
              tracking, progress statistics, achievements, AI-powered
              recommendations, and future premium services.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              We continuously improve MyCoreRise and may modify, add, suspend,
              or discontinue features without prior notice.
            </p>
          </section>
          ```jsx
          <section
            id="responsibilities"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              User Responsibilities
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              By using MyCoreRise, you agree to use the application responsibly
              and in accordance with these Terms.
            </p>

            <ul className="mt-8 list-disc pl-6 space-y-3 text-[17px] leading-8 text-slate-700">
              <li>
                Provide accurate information during registration and onboarding.
              </li>

              <li>Use the application only for lawful purposes.</li>

              <li>Respect the intellectual property rights of MyCoreRise.</li>

              <li>Not attempt to gain unauthorized access to our systems.</li>

              <li>
                Not interfere with the security, functionality, or availability
                of the application.
              </li>

              <li>
                Not copy, reverse engineer, modify, distribute, or exploit any
                part of MyCoreRise without written permission.
              </li>

              <li>
                Not use automated tools, bots, or scripts to misuse the
                platform.
              </li>
            </ul>
          </section>
          <section
            id="medical"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Medical Disclaimer
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              MyCoreRise provides educational and wellness content only. The
              exercises, recommendations, and wellness guidance available
              through the application are not intended to diagnose, treat, cure,
              or prevent any disease or medical condition.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              Some exercises are inspired by traditional Indian wellness
              practices, including Marma concepts. They are presented for
              general wellness purposes only and should not be considered
              medical treatment or professional healthcare advice.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              Always exercise within your personal limits. If you experience
              pain, dizziness, breathing difficulty, or any unusual symptoms,
              stop immediately and seek professional medical advice.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              If you have an existing injury, chronic illness, pregnancy,
              recently underwent surgery, or have any medical concerns, consult
              a qualified healthcare professional before using MyCoreRise.
            </p>
          </section>
          <section
            id="ip"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Intellectual Property
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              Unless otherwise stated, MyCoreRise and all related content,
              including but not limited to text, graphics, logos, icons,
              exercise content, illustrations, animations, user interface
              designs, software, source code, databases, trademarks, and
              branding are owned by MyCoreRise or its licensors and are
              protected under applicable intellectual property laws.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              You are granted a limited, non-exclusive, non-transferable,
              revocable license to use the application solely for personal,
              non-commercial use.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              The exercise sequences, wellness methodologies, instructional
              content, recommendations, and educational materials provided
              through MyCoreRise are proprietary to MyCoreRise. They may not be
              copied, reproduced, republished, or redistributed for commercial
              purposes without our prior written consent.
            </p>
          </section>
          <section
            id="ai"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">AI Features</h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              MyCoreRise may include AI-powered features that provide
              personalized exercise recommendations, wellness insights,
              reminders, and other intelligent experiences.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              AI-generated recommendations are intended to support your wellness
              journey and should not be interpreted as medical, therapeutic, or
              professional healthcare advice.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              While we continuously improve our AI systems, we do not guarantee
              that AI-generated content will always be accurate, complete, or
              suitable for your individual circumstances.
            </p>
            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              We reserve the right to improve, modify, suspend, or discontinue
              any AI-powered functionality at any time without prior notice.
            </p>
          </section>
          <section
            id="payments"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Subscriptions & Payments
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              MyCoreRise is currently offered free of charge.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              In the future, we may introduce premium features, subscriptions,
              one-time purchases, or other paid services. Any applicable
              pricing, billing terms, renewal conditions, and cancellation
              policies will be clearly presented before you make a purchase.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              Purchases made through app marketplaces, including the Google Play
              Store and, if supported in the future, the Apple App Store, will
              be subject to the respective platform's payment terms and refund
              policies in addition to these Terms.
            </p>
          </section>
          <section
            id="termination"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Suspension & Termination
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              We reserve the right to suspend or terminate your access to
              MyCoreRise at any time if we reasonably believe you have violated
              these Terms, misused the application, or engaged in activities
              that could harm other users or our services.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              You may stop using MyCoreRise at any time and request deletion of
              your account in accordance with our Privacy Policy.
            </p>
          </section>
          <section
            id="liability"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Limitation of Liability
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              To the fullest extent permitted by applicable law, MyCoreRise, its
              founders, employees, affiliates, licensors, and service providers
              shall not be liable for any indirect, incidental, consequential,
              special, exemplary, or punitive damages arising out of or relating
              to your use of the application.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              This includes, but is not limited to, loss of data, business
              interruption, loss of profits, personal injury, equipment damage,
              or any damages resulting from reliance on wellness recommendations
              or AI-generated suggestions.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              Your use of MyCoreRise is entirely at your own discretion and
              risk.
            </p>
          </section>
          <section
            id="indemnity"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Indemnification
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              You agree to indemnify, defend, and hold harmless MyCoreRise, its
              founders, employees, affiliates, and service providers from any
              claims, liabilities, damages, losses, costs, or expenses
              (including reasonable legal fees) arising out of your misuse of
              the application, violation of these Terms, or infringement of any
              rights of another person or entity.
            </p>
          </section>
          <section
            id="law"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">Governing Law</h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              These Terms and Conditions shall be governed by and interpreted in
              accordance with the laws of India, without regard to conflict of
              law principles.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              Any disputes arising out of or relating to MyCoreRise shall be
              subject to the exclusive jurisdiction of the competent courts
              located in India.
            </p>
          </section>
          <section
            id="force-majeure"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">Force Majeure</h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              MyCoreRise shall not be liable for any delay or failure to perform
              its obligations due to events beyond our reasonable control,
              including natural disasters, internet outages, cyberattacks,
              government actions, labor disputes, epidemics, or failures of
              third-party service providers.
            </p>
          </section>
          
          <section
            id="changes"
            className="scroll-mt-24 border-b border-slate-200 py-16"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              Changes to These Terms
            </h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              We may revise these Terms and Conditions from time to time to
              reflect changes in our services, legal obligations, or business
              operations.
            </p>

            <p className="mt-6 text-[17px] leading-8 text-slate-700">
              Updated Terms will become effective when published within the
              application or on our website. Your continued use of MyCoreRise
              after the revised Terms become effective constitutes your
              acceptance of those changes.
            </p>
          </section>
          <section id="contact" className="scroll-mt-24 py-16">
            <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>

            <p className="mt-8 text-[17px] leading-8 text-slate-700">
              If you have any questions regarding these Terms and Conditions,
              please contact us.
            </p>

            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <div className="space-y-8">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Business Name
                  </p>

                  <p className="mt-2 text-lg font-medium text-slate-900">
                    MyCoreRise
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:dssquarecorefitness007@gmail.com"
                    className="mt-2 inline-block text-lg font-medium text-blue-600 hover:text-blue-700"
                  >
                    dssquarecorefitness007@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    Website
                  </p>

                  <a
                    href="https://www.mycorerise.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-lg font-medium text-blue-600 hover:text-blue-700"
                  >
                    https://www.mycorerise.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center md:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MyCoreRise. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="/privacy-policy"
              className="text-slate-500 transition hover:text-slate-900"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-slate-500 transition hover:text-slate-900"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
