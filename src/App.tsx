import AboutSection from "./components/home/AboutSection";
import FAQSection from "./components/home/FAQSection";
import FooterSection from "./components/home/FooterSection";
import HeroSection from "./components/home/HeroSection";
import JoinTheMortalArmySection from "./components/home/JoinTheMortalArmySection";
import MarqueeLine from "./components/home/MarqueeLine";
import MortalGameSection from "./components/home/MortalGameSection";
import RoadmapSection from "./components/home/RoadmapSection";
import TokenomicsSection from "./components/home/TokenomicsSection";
import WhatIsSection from "./components/home/WhatIsSection";
import AOSProvider from "./providers/AOSProvider";

function App() {
  return (
    <AOSProvider>
      <div className="min-h-full w-full overflow-hidden">
        <HeroSection />
        <AboutSection />
        <WhatIsSection />
        <TokenomicsSection />
        <MortalGameSection />
        <RoadmapSection />
        <JoinTheMortalArmySection />
        <FAQSection />
        <MarqueeLine />
        <FooterSection />
      </div>
    </AOSProvider>
  );
}

export default App;
