import Enterprise from "./enterprise/Enterprise";
import GameChange from "./gamechange/GameChange";
import Logos from "./Logos";
import TopSection from "./TopSection";
const Home = () => {
  return (
    <div>
      <TopSection />
      <Logos />
      <Enterprise  />
      <GameChange />
    </div>
  );
};

export default Home;
