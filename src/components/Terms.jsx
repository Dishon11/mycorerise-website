// src/components/Terms.jsx
import React from "react";

export default function Terms() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 px-6 py-10 md:px-20 lg:px-40">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      {/* <p className="text-sm text-gray-500 mb-8">Last Updated: DD/MM/YYYY</p> */}

      <p>
        Welcome to MyCoreRise (the “Website”). By accessing, browsing, or using
        this Website, you agree to comply with and be bound by the following
        Terms and Conditions. If you do not agree, please stop using the Website
        immediately.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>You have read and understood these Terms.</li>
        <li>You agree to be legally bound by them.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Eligibility</h2>
      <p>To use this Website, you must:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Be 18 years or older, or</li>
        <li>Have parental/legal guardian permission if under 18.</li>
      </ul>
      <p>You are responsible for providing accurate information and maintaining your account security.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Health & Fitness Disclaimer</h2>
      <p>
        MyCoreRise offers fitness-related content including workouts, exercise
        guides, nutrition tips, and general wellness information. This
        information is provided for educational and informational purposes only.
      </p>
      <p>It is not intended as:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Medical advice</li>
        <li>Professional diagnosis</li>
        <li>Treatment or cure</li>
      </ul>
      <p>
        You should consult a licensed medical professional before making changes
        to your exercise routine, diet, or lifestyle—especially if you have:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Pre-existing medical conditions</li>
        <li>Heart, respiratory, or chronic issues</li>
        <li>Recent surgeries or injuries</li>
        <li>Are pregnant or postpartum</li>
      </ul>
      <p>You acknowledge that physical activity involves risk and agree that you participate at your own risk.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. User Conduct & Responsibilities</h2>
      <p>When using MyCoreRise, you agree not to:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Use the Website for illegal, abusive, or harmful activities</li>
        <li>Upload or transmit harmful content (malware, spam, or offensive material)</li>
        <li>Copy, resell, distribute, or exploit Website content without permission</li>
        <li>Attempt to hack, reverse engineer, or disrupt the Website services</li>
      </ul>
      <p>You are responsible for secure use of your account and password.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Payments & Subscriptions (If Applicable)</h2>
      <ul className="list-disc ml-6 space-y-1">
        <li>Fees are billed upfront</li>
        <li>Payments are non-refundable, unless required by law</li>
        <li>Subscriptions may renew automatically unless canceled</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Privacy Policy</h2>
      <p>
        Your information may be collected to enhance user experience and Website
        performance. Use of personal information is governed by our Privacy
        Policy, which forms part of these Terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Intellectual Property Rights</h2>
      <p>
        All Website content — including text, programs, graphics, videos, plans,
        branding, and logos — are the exclusive property of MyCoreRise and
        protected by copyright and trademark laws.
      </p>
      <p>Unauthorized use, reproduction, or distribution is prohibited.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Third-Party Links</h2>
      <p>
        The Website may contain links to third-party websites or services.
        MyCoreRise is not responsible for:
      </p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Content</li>
        <li>Privacy practices</li>
        <li>Actions</li>
        <li>Services offered by third parties</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, MyCoreRise is not liable for:</p>
      <ul className="list-disc ml-6 space-y-1">
        <li>Personal injury</li>
        <li>Loss or damage due to Website use</li>
        <li>Technical issues, downtime, or data loss</li>
        <li>Reliance on information provided on the Website</li>
      </ul>
      <p>The Website is offered “as is” and “as available.”</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Termination of Access</h2>
      <p>
        We reserve the right to restrict or terminate access to any user who
        violates these Terms or engages in misuse, without prior notice.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">11. Changes to Terms</h2>
      <p>
        We may update these Terms at any time. The updated version will replace
        previous versions, and continued Website use indicates acceptance.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">12. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of India, without regard to
        conflict-of-law principles.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">13. Contact Information</h2>
      <p>
        For questions, support, or legal matters, email us at:{" "}
        <a
          href="mailto:dssquarecorefitness007@gmail.com"
          className="text-purple-600 hover:underline"
        >
          dssquarecorefitness007@gmail.com
        </a>
      </p>
    </div>
  );
}