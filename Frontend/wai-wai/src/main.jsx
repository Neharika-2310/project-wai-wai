import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import './styles/auth-global.css'
import "./responsive.css";
import App from "./App.jsx";
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import './styles/auth-global.css'     // Auth Page
import './styles/Home.css'            // Home Page
import './styles/JobDashboard.css'    // Dashboard
import './styles/JobGenerator.css'    // Job Gen
import './styles/Analytics.css'       // Analytics
import './styles/ResumeParser.css'    // Smart Resume
import './styles/Notifications.css'   // Notifications
import './styles/Navbar.css'          // Navbar
import './styles/Footer.css'          // Footer
import "./responsive.css";     // Mobile adjustments

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
