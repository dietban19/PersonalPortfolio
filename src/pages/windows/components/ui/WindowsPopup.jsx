import React, { useRef, useState } from 'react';

const MIN_WIDTH = 320;
const MIN_HEIGHT = 180;

function WindowsPopup({
  title = '',
  children,
  onClose,
  className = '',
  initialPosition = { x: 360, y: 80 },
  initialSize = { width: 900, height: 520 },
}) {
  const popupRef = useRef(null);
  const actionData = useRef(null);
  const outlineRef = useRef(null);

  const [active, setActive] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [outline, setOutline] = useState(null);
  const [revealKey, setRevealKey] = useState(0);

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function handleDragPointerDown(e) {
    setActive(true);

    const rect = popupRef.current.getBoundingClientRect();

    actionData.current = {
      type: 'drag',
      offsetX: e.clientX - rect.left,
      offsetY: e.clientY - rect.top,
      width: rect.width,
      height: rect.height,
    };

    const nextOutline = {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    };

    outlineRef.current = nextOutline;
    setOutline(nextOutline);

    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handleResizePointerDown(e, direction) {
    e.stopPropagation();
    setActive(true);

    const rect = popupRef.current.getBoundingClientRect();

    actionData.current = {
      type: 'resize',
      direction,
      startX: e.clientX,
      startY: e.clientY,
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    };

    const nextOutline = {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    };

    outlineRef.current = nextOutline;
    setOutline(nextOutline);

    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e) {
    if (!actionData.current) return;

    const data = actionData.current;

    if (data.type === 'drag') {
      const nextOutline = {
        x: e.clientX - data.offsetX,
        y: e.clientY - data.offsetY,
        width: data.width,
        height: data.height,
      };

      outlineRef.current = nextOutline;
      setOutline(nextOutline);
      return;
    }

    if (data.type === 'resize') {
      const dx = e.clientX - data.startX;
      const dy = e.clientY - data.startY;

      let nextX = data.x;
      let nextY = data.y;
      let nextWidth = data.width;
      let nextHeight = data.height;

      if (data.direction.includes('e')) {
        nextWidth = data.width + dx;
      }

      if (data.direction.includes('s')) {
        nextHeight = data.height + dy;
      }

      if (data.direction.includes('w')) {
        nextWidth = data.width - dx;
        nextX = data.x + dx;
      }

      if (data.direction.includes('n')) {
        nextHeight = data.height - dy;
        nextY = data.y + dy;
      }

      if (nextWidth < MIN_WIDTH) {
        if (data.direction.includes('w')) {
          nextX = data.x + data.width - MIN_WIDTH;
        }
        nextWidth = MIN_WIDTH;
      }

      if (nextHeight < MIN_HEIGHT) {
        if (data.direction.includes('n')) {
          nextY = data.y + data.height - MIN_HEIGHT;
        }
        nextHeight = MIN_HEIGHT;
      }

      const nextOutline = {
        x: nextX,
        y: nextY,
        width: nextWidth,
        height: nextHeight,
      };

      outlineRef.current = nextOutline;
      setOutline(nextOutline);
    }
  }

  function handlePointerUp(e) {
    if (!actionData.current || !outlineRef.current) return;

    const data = actionData.current;
    const finalOutline = outlineRef.current;

    const maxX = window.innerWidth - 40;
    const maxY = window.innerHeight - 40;

    setPosition({
      x: clamp(finalOutline.x, 0, maxX),
      y: clamp(finalOutline.y, 0, maxY),
    });

    setSize({
      width: finalOutline.width,
      height: finalOutline.height,
    });

    setOutline(null);
    actionData.current = null;
    outlineRef.current = null;

    if (data.type === 'drag') {
      setRevealKey((key) => key + 1);
    }

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if capture was already released.
    }
  }

  const resizeHandleBase = 'absolute z-20 bg-transparent';

  return (
    <>
      <style>
        {`
          @keyframes windows-popup-reveal {
            from {
              clip-path: inset(0 0 100% 0);
            }
            to {
              clip-path: inset(0 0 0 0);
            }
          }
        `}
      </style>

      <div
        key={revealKey}
        ref={popupRef}
        onMouseDown={() => setActive(true)}
        className={`
          fixed z-40
          flex flex-col
          overflow-hidden
          bg-[#c0c7c8]
          border-2 border-solid
          border-l-white border-t-white
          border-r-black border-b-black
          shadow-[inset_-1px_-1px_0_#87888f,inset_1px_1px_0_#dfdfdf]
          ${className}
        `}
        style={{
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
          maxWidth: 'calc(100vw - 2rem)',
          animation:
            revealKey > 0
              ? 'windows-popup-reveal 150ms steps(14, end)'
              : 'none',
        }}
      >
        <div
          onPointerDown={handleDragPointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`
            flex h-9 shrink-0 cursor-move select-none items-center justify-between px-2
            text-[20px] font-bold leading-none text-white
            ${active ? 'bg-[#001aa8]' : 'bg-[#87888f]'}
          `}
        >
          <span>{title}</span>

          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={onClose}
            aria-label="Close"
            className="
              flex h-7 w-7 cursor-default items-center justify-center
              bg-[#c0c7c8]
              text-[22px] font-bold leading-none text-black
              border-2 border-solid
              border-l-white border-t-white
              border-r-black border-b-black
              shadow-[inset_-1px_-1px_0_#87888f,inset_1px_1px_0_#dfdfdf]
              active:border-l-black active:border-t-black
              active:border-r-white active:border-b-white
              active:shadow-[inset_1px_1px_0_#87888f]
            "
          >
            ×
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-auto p-8">{children}</div>

        {/* Resize handles */}
        <div
          onPointerDown={(e) => handleResizePointerDown(e, 'n')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`${resizeHandleBase} left-2 right-2 top-0 h-2 cursor-n-resize`}
        />

        <div
          onPointerDown={(e) => handleResizePointerDown(e, 's')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`${resizeHandleBase} bottom-0 left-2 right-2 h-2 cursor-s-resize`}
        />

        <div
          onPointerDown={(e) => handleResizePointerDown(e, 'w')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`${resizeHandleBase} bottom-2 left-0 top-2 w-2 cursor-w-resize`}
        />

        <div
          onPointerDown={(e) => handleResizePointerDown(e, 'e')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`${resizeHandleBase} bottom-2 right-0 top-2 w-2 cursor-e-resize`}
        />

        <div
          onPointerDown={(e) => handleResizePointerDown(e, 'nw')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`${resizeHandleBase} left-0 top-0 h-3 w-3 cursor-nw-resize`}
        />

        <div
          onPointerDown={(e) => handleResizePointerDown(e, 'ne')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`${resizeHandleBase} right-0 top-0 h-3 w-3 cursor-ne-resize`}
        />

        <div
          onPointerDown={(e) => handleResizePointerDown(e, 'sw')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`${resizeHandleBase} bottom-0 left-0 h-3 w-3 cursor-sw-resize`}
        />

        <div
          onPointerDown={(e) => handleResizePointerDown(e, 'se')}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={`${resizeHandleBase} bottom-0 right-0 h-4 w-4 cursor-se-resize`}
        >
          <div className="absolute bottom-[3px] right-[3px] h-[2px] w-[8px] bg-[#87888f]" />
          <div className="absolute bottom-[6px] right-[3px] h-[2px] w-[5px] bg-[#87888f]" />
          <div className="absolute bottom-[9px] right-[3px] h-[2px] w-[2px] bg-[#87888f]" />
        </div>
      </div>

      {outline && (
        <div
          className="
            pointer-events-none fixed z-50
            border border-dotted border-[#ff0000]
          "
          style={{
            left: outline.x,
            top: outline.y,
            width: outline.width,
            height: outline.height,
          }}
        />
      )}
    </>
  );
}

export default WindowsPopup;
