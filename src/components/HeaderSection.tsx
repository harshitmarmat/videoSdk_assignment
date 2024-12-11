
interface HeaderSectionProps {
  main: string;
  sub: string;
  desc: string;
}

const HeaderSection = ({ main, sub, desc }: HeaderSectionProps) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="text-sub-heading uppercase text-grey_vsdk_variant3">
        {main}
      </div>
      <div className="text-heading text-white">
        {sub}
      </div>
      <div className="text-desc text-center text-grey_vsdk_variant4 w-[48vw]">
        {desc}
      </div>
    </div>
  );
};

export default HeaderSection;