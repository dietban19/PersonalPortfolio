import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Clarity from '@microsoft/clarity';
import './index.css';
import App from './App.jsx';
import { showConsoleEasterEgg } from './easter_eggs/consoleEasterEgg';

const clarityId = import.meta.env.VITE_CLARITY_ID;
const clarityEnabled = import.meta.env.VITE_ENABLE_CLARITY === 'true';

if (clarityEnabled && clarityId) {
  Clarity.init(clarityId);
}
showConsoleEasterEgg();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
