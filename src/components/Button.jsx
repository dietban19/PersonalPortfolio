import { useState } from 'react';

function Button({ children, filled, white, href, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

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

  const hoverBackgroundColor = filled
    ? white
      ? '#e5e5e5'
      : '#0062c7'
    : white
      ? '#ffffff'
      : '#e6f1ff';

  const hoverTextColor = filled
    ? white
      ? 'black'
      : 'white'
    : white
      ? 'black'
      : 'var(--color-sf-blue)';
  const hoverBorderColor = filled
    ? white
      ? '#e5e5e5'
      : '#0062c7'
    : white
      ? 'white'
      : 'var(--color-sf-blue)';

  const sharedClassName =
    'inline-flex items-center justify-center rounded-full border px-4 py-2 text-[14px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sf-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black';

  const sharedStyle = {
    borderColor: isHovered ? hoverBorderColor : borderColor,
    backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
    color: isHovered ? hoverTextColor : textColor,
  };

  const sharedHoverProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocus: () => setIsHovered(true),
    onBlur: () => setIsHovered(false),
  };

  if (href) {
    return (
      <a
        className={sharedClassName}
        href={href}
        style={sharedStyle}
        {...sharedHoverProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={sharedClassName}
      onClick={onClick}
      style={sharedStyle}
      {...sharedHoverProps}
    >
      {children}
    </button>
  );
}

export default Button;
