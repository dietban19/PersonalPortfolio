import React from 'react';

function Button({ children, filled }) {
  const borderColor =
    filled == 'white'
      ? 'white'
      : filled == 'transparent'
        ? 'transparent'
        : 'var(--color-sf-blue)';
  const backgroundColor =
    filled == 'white'
      ? 'transparent'
      : filled == 'transparent'
        ? 'transparent'
        : 'var(--color-sf-blue)';
  const textColor =
    filled == 'white'
      ? 'white'
      : filled == 'transparent'
        ? 'var(--color-sf-blue)'
        : 'white';
  return (
    <div
      className="border rounded-full px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-sf-blue/10"
      style={{ borderColor, backgroundColor }}
    >
      <div style={{ color: textColor }}>{children}</div>
    </div>
  );
}

export default Button;
