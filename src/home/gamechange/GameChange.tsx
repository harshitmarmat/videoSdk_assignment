
import Gradient from './Gradient'

import VerticalGradient from "../../components/VerticalGradient";
import LeftHeader from "./LeftHeader";
import RightGrids from './RightGrids';
const DESC =
    "Lorem ipsum dolor sit amet consectetur. Nullam rhoncus malesuada in facilisis nunc nec. Turpis turpis massa id donec posuere tortor nisi.";

const TITLE = "Game Changing Features"

const GameChange = () => {
  return (
    <div className="relative">
      <Gradient/>
      <div className="relative w-[75vw] mx-auto  flex gap-[8%] scrollbar-hidden">
        {/* Sticky Section */}
        <LeftHeader desc={DESC} title={TITLE}/>
        <RightGrids/>
      </div>

      <VerticalGradient styles="right-[-10%] top-[50%] rotate-90 blur-[80px]" />
      <VerticalGradient styles="right-[15%]" />
    </div>
  )
}

export default GameChange
