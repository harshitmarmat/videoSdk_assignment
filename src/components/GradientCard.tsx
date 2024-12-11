import React from 'react';

interface GradientCardProps {
  children: React.ReactNode;
  gridArea?: string;
  tsStyles?: string;
  reverse?: boolean;
}

const GradientCard = ({ children, gridArea, tsStyles, reverse }: GradientCardProps) => {
  return (
    <div
      className={`${tsStyles} ${reverse ? 'reverse-hero' : 'hero'}`}
      style={{ gridArea }}
    >
      {children}
    </div>
  );
};

export default GradientCard;