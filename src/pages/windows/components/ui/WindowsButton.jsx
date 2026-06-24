import React from 'react';

function WindowsButton({ center = false, bold = false, children }) {
  return (
    <div
      className={`     inline-flex items-center gap-1.5
        bg-[#c0c0c0] px-2 py-1
        text-xl ${bold ? 'font-ari95 font-bold' : ' font-win95  '} leading-none text-black
        border-2 border-solid
        border-l-white border-t-white border-r-[#404040] border-b-[#404040]
        shadow-[inset_-1px_-1px_0_#808080,inset_1px_1px_0_#dfdfdf]
        active:border-l-[#404040] active:border-t-[#404040]
        active:border-r-white active:border-b-white
        active:shadow-[inset_1px_1px_0_#808080]
        ${center ? 'justify-center' : ''}`}
    >
      {children}
    </div>
  );
}

export default WindowsButton;
