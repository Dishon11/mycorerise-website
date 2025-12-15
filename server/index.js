import dotenv from "dotenv";
dotenv.config();

console.log("SUPABASE_URL from env:", process.env.SUPABASE_URL);
console.log(
  "SUPABASE_ANON_KEY from env:",
  process.env.SUPABASE_ANON_KEY ? "present" : "missing"
);




import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";

const app = express();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

app.use(cors());
app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Waitlist endpoint
app.post("/api/waitlist", async (req, res) => {
  try {
    const { email, country } = req.body;

    if (!email || !country) {
      return res
        .status(400)
        .json({ message: "Email and country are required." });
    }

    const { error } = await supabase
      .from("waitlist")
      .insert({
        email,
        country,
        source: "marketing_site",
      });

    if (error) {
      console.error("Supabase insert error:", error);
      return res
        .status(500)
        .json({ message: "Could not save to waitlist. Please try again." });
    }

    return res
      .status(201)
      .json({ message: "You’re on the waitlist! We’ll email you soon." });
  } catch (err) {
    console.error("Server error:", err);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
});

const port = process.env.PORT || 5174;
app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});
