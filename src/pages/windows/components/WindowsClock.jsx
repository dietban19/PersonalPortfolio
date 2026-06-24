import React, { useEffect, useState } from 'react';

function formatTime(date) {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

function WindowsClock() {
  const [time, setTime] = useState(() => formatTime(new Date()));

  useEffect(() => {
    const tick = () => setTime(formatTime(new Date()));

    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        inline-flex h-10 min-w-[116px] items-center justify-center
        bg-[#c0c0c0] px-4
        text-[20px] font-normal leading-none text-black

        border-2 border-solid
        border-l-[#808080] border-t-[#808080]
        border-r-white border-b-white
        shadow-[inset_1px_1px_0_#404040,inset_-1px_-1px_0_#dfdfdf]
      "
    >
      {time}
    </div>
  );
}

export default WindowsClock;
