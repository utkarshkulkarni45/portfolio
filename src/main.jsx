import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Handle permanent /resume route directly in browser
if (window.location.pathname.toLowerCase() === '/resume' || window.location.pathname.toLowerCase() === '/resume/') {
  window.location.replace('/resume.pdf');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
