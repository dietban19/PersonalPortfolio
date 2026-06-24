import React from 'react';
import WindowsPopup from './ui/WindowsPopup';
import DitherBox from './ui/DitherBox';
import WindowsButton from './ui/WindowsButton';
function WelcomeWindows({ onClose }) {
  return (
    <div>
      <WindowsPopup title="Welcome" onClose={onClose}>
        <div className="flex gap-4">
          <DitherBox>
            <div className="flex h-full gap-4">
              <div className=" h-full w-12 flex items-start justify-center">
                <img
                  src="images/lightbulb_icon.png"
                  alt="Lightbulb"
                  className="w-full"
                />
              </div>
              <div className="flex-col gap-8">
                <div className="font-bold text-xl">Did you know?</div>

                <div className="text-lg font-win95-bold">
                  Software engineer with full-stack, design, and product
                  experience across the full development lifecycle.
                </div>
              </div>
            </div>
          </DitherBox>
          <div className="flex w-[30%] flex-col gap-2">
            <WindowsButton center>What's New</WindowsButton>
            <WindowsButton center>What's New</WindowsButton>
            <WindowsButton center>What's New</WindowsButton>
            <WindowsButton center>What's New</WindowsButton>
          </div>
        </div>
      </WindowsPopup>
    </div>
  );
}

export default WelcomeWindows;
