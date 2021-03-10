import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/static/acts.svg"
      width="64px"
      height="60px"
      {...props}
    />
  );
};

export default Logo;
