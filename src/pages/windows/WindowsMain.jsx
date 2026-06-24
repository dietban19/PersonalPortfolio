import React, { useState } from 'react';
import ToolBar from './components/ToolBar';
import WindowsPopup from './components/ui/WindowsPopup';
import WelcomeWindows from './components/WelcomeWindows';

function WindowsMain() {
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  return (
    <div className="bg-windows-bg h-screen font-win95">
      <ToolBar />
      {welcomeVisible && (
        <WelcomeWindows onClose={() => setWelcomeVisible(false)} />
      )}
    </div>
  );
}

export default WindowsMain;
