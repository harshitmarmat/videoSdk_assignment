import globe from "../../assets/icons/globe.svg";
import graph from "../../assets/icons/graph.svg";
import GradientCard from "../../components/GradientCard";

const TITLE = "< 80ms Geo-latency"
const SUB = "Join from anywhere in the world, connect to your nearest data center"
interface InnerCardProps {
    styles?: string;
  }
  
const InnerCard: React.FC<InnerCardProps> = ({ styles = "" }) => {
  return (
    <div
      className={`px-4 py-6 flex flex-col gap-4 w-full h-[50%] rounded-t-lg bg-black ${styles}`}
    >
      <img src={graph} className="w-[25px] h-[25px]" alt="globe-icon" />
      <div className="text-sub-heading3 text-white">{TITLE}</div>
      <div className="text-sub-heading2 text-grey_vsdk_variant5">
        {SUB}
      </div>
    </div>
  );
};

interface FullCardProps {
    show_image?: boolean;
  }

const FullCard: React.FC<FullCardProps> = ({ show_image = false }) => {
  return (
    <GradientCard reverse tsStyles="p-2 w-[50%]  h-fit bg-[#3A223a]">
      <InnerCard />
      <div className="bg-globe-outer flex items-center overflow-hidden justify-center text-center z-10 !rounded-t-lg w-full h-[50%] ">
        <img
          className={show_image ? "" : "invisible"}
          src={globe}
          alt="globe-icon"
        />
      </div>
    </GradientCard>
  );
};

const HalfCard = () => {
  return (
    <GradientCard reverse tsStyles="p-2 w-[50%] h-fit bg-[#3A223a]">
      <InnerCard styles="h-full" />
    </GradientCard>
  );
};

const RightGrids = () => {
  return (
    <div className=" flex flex-col flex-wrap gap-8 w-[55%] h-[135vh]">
      <FullCard show_image />
      <HalfCard />
      <FullCard />
      <HalfCard />
      <FullCard />
      <FullCard show_image />
    </div>
  );
};

export default RightGrids;
