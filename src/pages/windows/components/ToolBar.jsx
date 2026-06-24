import React from 'react';
import WindowsButton from './ui/WindowsButton';
import WindowsClock from './WindowsClock';
function ToolBar() {
  return (
    <div className="bg-windows-popup absolute bottom-0 left-0 w-full p-1 ">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <WindowsButton bold>
            <img src="/icons/react95/start.png" alt="" className="h-6 w-6" />
            Start
          </WindowsButton>
          <button
            className="  font-win95      inline-flex items-center gap-1.5
        bg-[#c0c0c0] px-2 py-1 pr-60
        text-xl font-bold leading-none text-black
        border-2 border-solid
        border-l-white border-t-white border-r-[#404040] border-b-[#404040]
        shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf]
        active:border-l-[#404040] active:border-t-[#404040]
        active:border-r-white active:border-b-white
        active:shadow-[inset_1px_1px_0_#808080]"
          >
            Welcome
          </button>
        </div>
        <WindowsClock />
      </div>
    </div>
  );
}

export default ToolBar;
