
// const BREVO_API_KEY = process.env.BREVO_API_KEY;
// const BREVO_FROM_EMAIL = process.env.BREVO_FROM_EMAIL;
// const BREVO_FROM_NAME = process.env.BREVO_FROM_NAME || "MyCoreRise";


// import dotenv from "dotenv";
// dotenv.config();

// console.log("SUPABASE_URL from env:", process.env.SUPABASE_URL);
// console.log(
//   "SUPABASE_ANON_KEY from env:",
//   process.env.SUPABASE_ANON_KEY ? "present" : "missing"
// );




// import express from "express";
// import cors from "cors";
// import { createClient } from "@supabase/supabase-js";

// const app = express();

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// const supabase = createClient(supabaseUrl, supabaseAnonKey);

// app.use(cors());
// app.use(express.json());

// // Health check
// app.get("/api/health", (req, res) => {
//   res.json({ ok: true });
// });

// // Waitlist endpoint
// app.post("/api/waitlist", async (req, res) => {
//   try {
//     const { email, country } = req.body;

//     if (!email || !country) {
//       return res
//         .status(400)
//         .json({ message: "Email and country are required." });
//     }

//     const { error } = await supabase
//       .from("waitlist")
//       .insert({
//         email,
//         country,
//         source: "marketing_site",
//       });

//     if (error) {
//       console.error("Supabase insert error:", error);
//       return res
//         .status(500)
//         .json({ message: "Could not save to waitlist. Please try again." });
//     }

//     return res
//       .status(201)
//       .json({ message: "You’re on the waitlist! We’ll email you soon." });
//   } catch (err) {
//     console.error("Server error:", err);
//     return res
//       .status(500)
//       .json({ message: "Server error. Please try again later." });
//   }
// });

// const port = process.env.PORT || 5174;
// app.listen(port, () => {
//   console.log(`API listening on http://localhost:${port}`);
// });









// Load environment variables from .env for LOCAL development.
// On Render, these are injected automatically and dotenv is effectively a no-op.
import dotenv from "dotenv";
dotenv.config();

// --- Brevo (email) configuration ---
// These values are read from environment variables.
// In Render, set them in the Dashboard → Environment.
// Locally, you can optionally put them in .env if you want to test emails.
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_FROM_EMAIL = process.env.BREVO_FROM_EMAIL;
const BREVO_FROM_NAME = process.env.BREVO_FROM_NAME || "MyCoreRise";

// Quick logs to confirm Supabase env vars are wired correctly.
console.log("SUPABASE_URL from env:", process.env.SUPABASE_URL);
console.log(
  "SUPABASE_ANON_KEY from env:",
  process.env.SUPABASE_ANON_KEY ? "present" : "missing"
);

import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();

// --- Supabase client setup ---
// These must be set both locally (.env) and in Render for the backend:
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Fail fast if Supabase credentials are missing.
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_ANON_KEY. Check your env vars.");
  process.exit(1);
}

// Create a single Supabase client instance for the whole server.
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Enable CORS and JSON body parsing so your frontend can call this API.
app.use(cors());
app.use(express.json());

// Simple health check endpoint for Render uptime checks or manual testing.
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// --- Waitlist endpoint ---
// Called by your frontend when someone submits the waitlist form.
app.post("/api/waitlist", async (req, res) => {
  try {
    const { email, country } = req.body;

    // Basic input validation.
    if (!email || !country) {
      return res
        .status(400)
        .json({ message: "Email and country are required." });
    }

    // Insert the user into the "waitlist" table in Supabase.
    const { error } = await supabase.from("waitlist").insert({
      email,
      country,
      source: "marketing_site", // helps you know the signup came from the website
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return res
        .status(500)
        .json({ message: "Could not save to waitlist. Please try again." });
    }

    // --- Send confirmation email via Brevo ---
    // Only attempt this if the required Brevo env vars are present.
    // On your local machine (no Brevo keys), this block will be skipped.
    if (BREVO_API_KEY && BREVO_FROM_EMAIL) {
      try {
        // Node 18+ and modern Node versions have global fetch built-in. [web:461]
        await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": BREVO_API_KEY, // Brevo API key header
          },
          body: JSON.stringify({
            sender: {
              email: BREVO_FROM_EMAIL, // e.g. dssquarecorefitness@gmail.com
              name: BREVO_FROM_NAME,   // e.g. "MyCoreRise"
            },
            to: [{ email }],            // send to the user who just joined
            subject: "You’re on the MyCoreRise waitlist",
            htmlContent:
              "<p>Thanks for joining the MyCoreRise waitlist.</p>" +
              "<p>You’re in! We’re planning to launch the app in early 2026. " +
              "We’ll email you as soon as early access is ready.</p>",
          }),
        });
      } catch (emailErr) {
        // If email sending fails, log the error but DO NOT fail the API response.
        console.error("Brevo email error:", emailErr);
      }
    } else {
      // This will show in logs if Brevo is not configured (e.g. local dev).
      console.warn(
        "BREVO_API_KEY or BREVO_FROM_EMAIL not set; skipping confirmation email"
      );
    }

    // Final response back to the frontend.
    return res.status(201).json({
      message: "You’re on the waitlist! Check your email for confirmation.",
    });
  } catch (err) {
    console.error("Server error:", err);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
});

// Start the Express server on the provided PORT (Render sets this) or 5174 locally.
const port = process.env.PORT || 5174;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
