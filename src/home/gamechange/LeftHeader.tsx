import React from 'react';

interface LeftHeaderProps {
  desc: string;
  title: string;
}

const LeftHeader: React.FC<LeftHeaderProps> = ({ desc, title }) => {
  return (
    <div className="w-[35%] sticky top-10 h-fit">
      <div className="text-white">
        <div className="text-heading">{title}</div>
        <div className="text-desc text-grey_vsdk_variant5 font-normal">
          {desc}
        </div>
      </div>
    </div>
  );
};

export default LeftHeader;