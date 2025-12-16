export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-400">
          Last Updated: DD/MM/YYYY
        </p>

        {/* Intro */}
        <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-200">
          MyCoreRise (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) operates the MyCoreRise
          website and related services (the &quot;Service&quot;). This Privacy Policy
          explains how we collect, use, and protect your personal information
          when you use our website, join our waitlist, or interact with us.
        </p>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-200">
          By using the Service, you agree to the collection and use of
          information in accordance with this Privacy Policy and applicable laws
          in India.
        </p>

        <hr className="my-8 border-slate-800" />

        {/* 1. Information We Collect */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            1. Information We Collect
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            When you use MyCoreRise, we may collect:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200">
            <li>
              <span className="font-semibold">Contact Information:</span> Email
              address (for example, when you join the waitlist or contact us).
            </li>
            <li>
              <span className="font-semibold">Location-related Information:</span>{" "}
              Country you select in the waitlist form.
            </li>
            <li>
              <span className="font-semibold">Technical &amp; Usage Data:</span>{" "}
              IP address, browser type, device information, pages visited, time
              spent, and similar analytics data (via our hosting providers or
              analytics tools).
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            We do not currently collect sensitive health data, payment
            information, or detailed fitness metrics through the waitlist
            website.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 2. How We Collect Information */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            2. How We Collect Information
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            We collect information:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200">
            <li>
              <span className="font-semibold">Directly from you</span> when you
              submit the waitlist form or contact us by email or other
              channels.
            </li>
            <li>
              <span className="font-semibold">Automatically</span> when you
              browse or use the website (via logs, cookies, or analytics tools).
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            Supabase stores your waitlist data (email and country), and Brevo
            processes emails that we send to you.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 3. How We Use Your Information */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            3. How We Use Your Information
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            We use the information we collect for purposes such as:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200">
            <li>
              Creating and managing our waitlist and contacting you about early
              access, launch updates, and product information.
            </li>
            <li>
              Sending you transactional or service-related emails (for example,
              confirmation that you joined the waitlist).
            </li>
            <li>
              Operating, maintaining, and improving our website and services.
            </li>
            <li>
              Monitoring usage patterns and performance (for example, visits and
              traffic sources).
            </li>
            <li>Complying with legal obligations and enforcing our Terms.</li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            We do not sell your personal information.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 4. Legal Basis */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            4. Legal Basis (where applicable)
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            Where required by law, we process your personal information based
            on:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200">
            <li>
              Your <span className="font-semibold">consent</span> (for example,
              when you submit your email to join the waitlist).
            </li>
            <li>
              Our <span className="font-semibold">legitimate interests</span> in
              operating, securing, and improving our Service.
            </li>
          </ul>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 5. How We Share Your Information */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            5. How We Share Your Information
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            We may share your information with:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200">
            <li>
              <span className="font-semibold">Service Providers / Processors:</span>{" "}
              Supabase for database and storage of your waitlist data; Brevo
              for sending transactional and waitlist-related emails; and
              hosting or analytics providers (such as those that run and measure
              the website).
            </li>
            <li>
              Professional advisors and authorities, where required by law or to
              protect our rights, safety, or users.
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            These third parties are only allowed to use your information to
            provide services to us, in line with their own privacy policies and
            applicable law. We do not share your information with advertisers or
            unrelated third parties for their own marketing.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 6. International Transfers */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            6. International Transfers
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            Our service providers and infrastructure may be located outside
            India, which means your information may be processed in other
            countries with different data protection laws. Where required, we
            take reasonable steps to ensure your data receives adequate
            protection consistent with this Privacy Policy.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 7. Data Retention */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            7. Data Retention
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            We keep your personal information only for as long as necessary to
            fulfil the purposes described in this Privacy Policy, including:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200">
            <li>
              While you are on the waitlist or we reasonably expect you may be
              interested in MyCoreRise.
            </li>
            <li>
              For a reasonable period afterwards to comply with legal,
              accounting, or reporting requirements.
            </li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            If you request deletion of your data, we will delete or anonymize it
            unless we are legally required to keep it.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 8. Your Rights & Choices */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            8. Your Rights &amp; Choices
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            Depending on applicable law, you may have rights to:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm sm:text-base text-slate-200">
            <li>Access the personal information we hold about you.</li>
            <li>Correct or update inaccurate information.</li>
            <li>Request deletion of your personal information.</li>
            <li>Withdraw consent (for example, unsubscribe from emails).</li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            You can exercise these rights by contacting us at{" "}
            <span className="font-semibold">
              dssquarecorefitness007@gmail.com
            </span>
            . Every email we send via our email provider will include an
            unsubscribe or opt-out option for future non-essential
            communications.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 9. Cookies & Tracking Technologies */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            9. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            Our website and service providers may use cookies or similar
            technologies to enable core functionality, enhance performance, and
            measure visits and user behavior to help us improve the Service. You
            can usually control or disable cookies through your browser
            settings, but this may affect certain site features.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 10. Data Security */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            10. Data Security
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            We use reasonable technical and organizational measures to protect
            your personal information from unauthorized access, loss, or misuse,
            including using reputable third-party providers for secure storage.
            However, no method of transmission or storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 11. Children’s Privacy */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            11. Children’s Privacy
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            MyCoreRise is not directed to children under 18. If you are under
            18, you should only use the Website with the consent and supervision
            of a parent or legal guardian. If we learn that we have collected
            personal information from a child without appropriate consent, we
            will take steps to delete it.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 12. Changes to This Privacy Policy */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            12. Changes to This Privacy Policy
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            We may update this Privacy Policy from time to time. The &quot;Last
            Updated&quot; date at the top will reflect the latest version.
            Continued use of the Service after changes are posted means you
            accept the updated policy.
          </p>
        </section>

        <hr className="my-8 border-slate-800" />

        {/* 13. Contact Us */}
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            13. Contact Us
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            If you have any questions, requests, or concerns about this Privacy
            Policy or our data practices, please contact us at:
          </p>
          <p className="text-sm sm:text-base leading-relaxed text-slate-200">
            <span className="font-semibold">MyCoreRise</span>
            <br />
            Email:{" "}
            <a
              href="mailto:dssquarecorefitness007@gmail.com"
              className="text-sky-400 hover:text-sky-300 underline underline-offset-4"
            >
              dssquarecorefitness007@gmail.com
            </a>
          </p>
        </section>
      </div>
    </section>
  );
}
