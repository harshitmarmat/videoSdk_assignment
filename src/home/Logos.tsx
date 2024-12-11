import alanSvg from "../assets/icons/alan.svg";
import examediSvg from "../assets/icons/examedi.svg";
import fyndSvg from "../assets/icons/fynd.svg";
import iciciSvg from "../assets/icons/icici.svg";
import judgeSvg from "../assets/icons/judge.svg";
import okadocSvg from "../assets/icons/okadoc.svg";
import radiusSvg from "../assets/icons/radius.svg";
import tyhoSvg from "../assets/icons/tyho.svg";

const LOVEDBY = "Loved by Developers at"

const Logos = () => {
  const logos = [
    tyhoSvg,
    alanSvg,
    examediSvg,
    fyndSvg,
    iciciSvg,
    judgeSvg,
    okadocSvg,
    radiusSvg,
  ];
  return (
    <div className="w-full z-10 logo-shadow relative py-8 mt-4 bg-black_vsdk">
      <div className="text-center my-4 uppercase text-grey_vsdk_variant2 text-sub-heading2">
        {LOVEDBY}
      </div>
      <div className="flex justify-evenly">
        {logos.map((item, ind) => (
          <img key={ind} src={item} alt="logo-icon" />
        ))}
      </div>
    </div>
  );
};

export default Logos;
