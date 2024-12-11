import React from 'react';

interface VerticalGradientProps {
  styles?: string;
}

const VerticalGradient: React.FC<VerticalGradientProps> = ({ styles }) => {
  return (
    <div
      className={`w-[30vw] absolute h-[100px] blur-[100px] bg-vertical-gradient ${styles || ''}`}
    />
  );
};

export default VerticalGradient;