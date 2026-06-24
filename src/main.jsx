import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Clarity from '@microsoft/clarity';
import './index.css';
import App from './App.jsx';
import { showConsoleEasterEgg } from './easter_eggs/consoleEasterEgg';
import { BrowserRouter } from 'react-router-dom';
import '@react95/fonts/sans-serif/8pt';
import '@react95/icons/icons.css';
const clarityId = import.meta.env.VITE_CLARITY_ID;
const clarityEnabled = import.meta.env.VITE_ENABLE_CLARITY === 'true';

if (clarityEnabled && clarityId) {
  Clarity.init(clarityId);
}
showConsoleEasterEgg();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
