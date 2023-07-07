import React from 'react';

interface HeaderProps {
  width: string;
  height: string;
  children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({ width, height, children }) => {
  return (
    <div style={{ width, height, background: 'lightgray' }}>
      {children}
    </div>
  );
};

export default Header;