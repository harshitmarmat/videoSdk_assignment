import MainGradient from "../components/MainGradient";
import arrow from "../assets/icons/arrow.svg";

const SWITCHTOSDK = "Switch to videoSdk";
const DESC =
  "Built for scalability, security, and seamless integration, VideoSDK is the perfect upgrade from Twilio.";
const BUTTONTEXT = "Talk to Our Migration Expert";
const LINKS = [
  { title: "Read Migration Guide", icon: arrow },
  { title: "VideoSDK vs Twilio", icon: arrow },
  { title: "Why not Zoom", icon: arrow },
];


const MainHeading = (
  <div className="text-heading text-white">
    Upgrade from{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r  from-primary_vsdk to-secondary_vsdk ">
      Twilio to VideoSDK
    </span>{" "}
    <br /> with Enterprise-grade Video Infrastructure
  </div>
);





const TopSection = () => {

  return (
    <div>
      <MainGradient />
      <section className="relative z-20 mt-[14%] w-full flex flex-col items-center text-center gap-12">
        <div className="bg-white_20 text-white uppercase py-3 px-6 rounded-full border-grey_20 border-[2px] w-fit text-para">
          {SWITCHTOSDK}
        </div>
        {MainHeading}
        <div className="text-desc text-grey_vsdk w-[35vw]">{DESC}</div>
        <button className="p-4 z-10 mt-8 text-btn text-white rounded-md bg-secondary_vsdk">
          {BUTTONTEXT}
        </button>
        <div className="flex h-[8vh]  text-btn gap-12 items-center underline text-secondary_vsdk">
          {LINKS.map((item,ind)=><div key={ind+item.title} className="flex items-center"><img className={ind!==0 ?"rotate-[135deg]":""} src={item?.icon} alt="icon"/><p>{item?.title}</p></div>)}
        </div>
      </section>
    </div>
  );
};

export default TopSection;
