import VerticalGradient from "../../components/VerticalGradient";
import HeaderSection from "../../components/HeaderSection";
import GradientCardsGrid from "./GradientCardGrid";


const ENTERPRISE_ESSENTIALS ="Enterprise Essentials" 
const ENTERPRISE_MAIN = "Scalable and Privacy-first Infrastructure"
const ENTERPRISE_DESC = "VideoSDK seamlessly replaces Twilio, delivering an unparalleled video experience that auto scales with your needs."

const Enterprise = () => {
  return (
    <div className="py-[5%] relative">
      <VerticalGradient styles="left-[36%]" />
      <HeaderSection main={ENTERPRISE_MAIN} sub={ENTERPRISE_ESSENTIALS} desc={ENTERPRISE_DESC} />
      <GradientCardsGrid />
    </div>
  );
};

export default Enterprise;
