import React from 'react';

function Button({ children, filled, white }) {
  const borderColor = filled
    ? white
      ? 'white'
      : 'var(--color-sf-blue)'
    : white
      ? 'white'
      : 'var(--color-sf-blue)';
  const backgroundColor = filled
    ? white
      ? 'white'
      : 'var(--color-sf-blue)'
    : 'transparent';
  const textColor = filled
    ? white
      ? 'black'
      : 'white'
    : white
      ? 'white'
      : 'var(--color-sf-blue)';
  return (
    <div
      className="text-[14px] border rounded-full px-4 py-2 cursor-pointer transition-colors duration-300 hover:bg-sf-blue/10"
      style={{ borderColor, backgroundColor }}
    >
      <div style={{ color: textColor }}>{children}</div>
    </div>
  );
}

export default Button;
