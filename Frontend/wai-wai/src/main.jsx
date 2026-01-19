import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// --- 1. CORE STYLES ---
import './index.css' 
import './responsive.css' // Located in src/, loads global media queries

// --- 2. GLOBAL COMPONENT STYLES (The Nuclear Fix) ---
// We import these here so they are ALWAYS loaded, preventing distortion
import './styles/auth-global.css'           // Auth Page (Already Fixed)
import './styles/navbar-global.css'         // Navbar
import './styles/footer-global.css'         // Footer
import './styles/home-page.css'             // Home Page
import './styles/resume-parser-global.css'  // Smart Resume
import './styles/job-dashboard.css'         // Job Dashboard
import './styles/job-generator.css'         // Job Generator
import './styles/analytics-global.css'      // Analytics
import './styles/notifications-global.css'  // Notifications

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)