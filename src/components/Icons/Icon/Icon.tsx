import './Icon.scss';
import React from 'react';

type iconProps = {
  children: React.ReactNode;
  className?: string;
};

const Icon: React.FC<iconProps> = ({ children, className }) => {
  return <span className={`icon ${className || ''}`}>{children}</span>;
};

export default Icon;
