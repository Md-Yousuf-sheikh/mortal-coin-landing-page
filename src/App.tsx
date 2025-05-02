import AboutSection from "./components/home/AboutSection";
import HeroSection from "./components/home/HeroSection";
import JoinTheMortalArmySection from "./components/home/JoinTheMortalArmySection";
import MortalGameSection from "./components/home/MortalGameSection";
import RoadmapSection from "./components/home/RoadmapSection";
import TokenomicsSection from "./components/home/TokenomicsSection";
import WhatIsSection from "./components/home/WhatIsSection";

function App() {
  return (
    <div className="min-h-full w-full">
      <HeroSection />
      <AboutSection />
      <WhatIsSection />
      <TokenomicsSection />
      <MortalGameSection />
      <RoadmapSection />
      <JoinTheMortalArmySection />
    </div>
  );
}

export default App;
