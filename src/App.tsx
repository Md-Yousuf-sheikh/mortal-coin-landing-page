import AboutSection from "./components/home/AboutSection";
import HeroSection from "./components/home/HeroSection";
import WhatIsSection from "./components/home/WhatIsSection";

function App() {
  return (
    <div className="min-h-full w-full">
      <HeroSection />
      <AboutSection />
      <WhatIsSection />
    </div>
  );
}

export default App;
