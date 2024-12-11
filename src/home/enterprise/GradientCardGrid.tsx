import globe from "../../assets/icons/globe.svg";
import medal from "../../assets/icons/medal.svg";
import compliancelogo from "../../assets/icons/compliancelogo.svg";
import GradientCard from "../../components/GradientCard";
import VerticalGradient from "../../components/VerticalGradient";

interface CardContentProps {
  icon?: string;
  title?: string;
  description?: string;
}

const FIRST_CARD = {
  title: "Global mesh network",
  sub: "Handle massive concurrent meetings volumes extra content here",
};
const SECOND_CARD = {
  title: "100% Secure with compliance",
  sub: "We take your privacy very seriously",
};

const GradientCardsGrid = () => {
  return (
    <div className="mx-auto my-[5%] relative grid grid-cols-4 w-[75vw] h-[100vh] grid-rows-4 gap-8">
      <GradientCard
        gridArea="1 / 1 / 3 / 3"
        tsStyles="overflow-hidden flex flex-col items-center justify-between bg-gradient-to-b from-[#536eff]/[0.76] to-[#d2a8ff]/[0.3]"
      >
        <div className="text-heading2 my-4 text-white">{FIRST_CARD.title}</div>
        <p className="w-[80%] text-grey_vsdk_variant3 text-center text-desc font-normal">
          {FIRST_CARD.sub}
        </p>
        <img className="mb-0" src={globe} alt="img-globe" />
      </GradientCard>

      <GradientCard gridArea="1 / 3 / 2 / 4">
        <CardContent
          icon={medal}
          title="99.99% Uptime"
          description="Rock solid reliability"
        />
      </GradientCard>

      <VerticalGradient styles="top-[35%] rotate-90 right-[5%]" />

      <GradientCard gridArea="2 / 3 / 3 / 4">
        <CardContent
          icon={medal}
          title="99.99% Uptime"
          description="Rock solid reliability"
        />
      </GradientCard>

      <GradientCard gridArea="1 / 4 / 2 / 5">
        <CardContent
          icon={medal}
          title="99.99% Uptime"
          description="Rock solid reliability"
        />
      </GradientCard>

      <GradientCard gridArea="2 / 4 / 3 / 5">
        <CardContent
          icon={medal}
          title="99.99% Uptime"
          description="Rock solid reliability"
        />
      </GradientCard>

      <GradientCard gridArea="3 / 1 / 5 / 4">
        <div className="w-full h-full gap-6 text-center relative flex flex-col items-center justify-center">
          <img src={medal} alt="medal-icon" />
          <div className="text-heading3 my-3 text-center text-white">
            {SECOND_CARD.title}
          </div>
          <div className="text-grey_vsdk_variant5 text-desc font-normal">
            {SECOND_CARD.sub}
          </div>
          <img src={compliancelogo} alt="compliancelogo" />
          <VerticalGradient />
        </div>
      </GradientCard>

      <GradientCard gridArea="3 / 4 / 5 / 5">
        <CardContent
          icon={medal}
          title="24x7 Handhold support"
          description="Rock solid reliability Rock solid reliability Rock solid reliability Rock solid reliability"
        />
      </GradientCard>
    </div>
  );
};

const CardContent: React.FC<CardContentProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="w-full h-full p-4 text-center flex flex-col items-center gap justify-center">
      <img src={icon || ""} alt="icon" />
      <div className="text-heading3 my-3 text-white">{title || ""}</div>
      <div className="text-grey_vsdk_variant5 text-desc font-normal">
        {description || ""}
      </div>
    </div>
  );
};

export default GradientCardsGrid;
