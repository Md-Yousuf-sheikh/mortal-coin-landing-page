import AboutSection from "./components/home/AboutSection";
import FAQSection from "./components/home/FAQSection";
import FooterSection from "./components/home/FooterSection";
import HeroSection from "./components/home/HeroSection";
import JoinTheMortalArmySection from "./components/home/JoinTheMortalArmySection";
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
        <div className=" w-full bg-[#202020]">
          <div className="slide-container space-x-3.5 py-2 ">
            <img
              src="/img/mortal-coin-text-1.png"
              className="w-[130px] lg:w-[200px]"
            />
            <img
              src="/img/mortal-coin-text-2.png"
              className="w-[130px] lg:w-[200px]"
            />
            <img
              src="/img/mortal-coin-text-1.png"
              className="w-[130px] lg:w-[200px]"
            />
            <img
              src="/img/mortal-coin-text-2.png"
              className="w-[130px] lg:w-[200px]"
            />
          </div>
        </div>
        <FooterSection />
      </div>
    </AOSProvider>
  );
}

export default App;
