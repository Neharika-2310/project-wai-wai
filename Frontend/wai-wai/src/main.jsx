import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// =======================================================
// 1. FOUNDATION STYLES (CRITICAL: Must load FIRST)
// =======================================================
import './index.css' 
import './styles/variables.css'       // <--- FIXES DISTORTION (Defines spacing/colors)
import './styles/globals.css'         // <--- FIXES LAYOUT (Base resets)
import './styles/design-system.css'   // <--- FIXES BUTTONS/INPUTS
import './responsive.css'             // Global media queries (Located in src/)

// =======================================================
// 2. GLOBAL COMPONENT STYLES
// =======================================================
import './styles/auth-global.css'           
import './styles/navbar-global.css'         
import './styles/footer-global.css'
import './styles/Footer-responsive.css' // <--- Added (Note the Capital 'F')

// =======================================================
// 3. PAGE SPECIFIC STYLES
// =======================================================
import './styles/home-page.css'             
import './styles/resume-parser-global.css'  
import './styles/job-dashboard.css'         
import './styles/job-generator.css'         
import './styles/analytics-global.css'      
import './styles/notifications-global.css'  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)