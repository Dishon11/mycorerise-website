import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden font-[Poppins]">
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>
);
