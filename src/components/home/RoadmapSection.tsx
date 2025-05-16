import { ChevronRight } from "lucide-react";

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Launch",
    items: [
      "Token creation on Solana",
      "Website and whitepaper release",
      "Distribution via Distribute Listings on Raydium and DEXTools",
    ],
  },
  {
    phase: "Phase 2",
    title: "Community Expansion",
    items: [
      "Mortal Game (PvP prototype) launch",
      "First tournament",
      "Begin 5% SOL rewards via Distribute for holders",
    ],
  },
  {
    phase: "Phase 3",
    title: "Mortal Coin Staking",
    items: [
      "Mortal Game (PvP prototype) launch",
      "First tournament",
      "Begin 5% SOL rewards via Distribute for holders",
    ],
  },
  {
    phase: "Phase 4",
    title: "Beta Game Launch",
    items: [
      "Mortal Game (PvP prototype) launch",
      "First tournament",
      "Begin 5% SOL rewards via Distribute for holders",
    ],
  },
];

export default function RoadmapSection() {
  return (
    <div className="bg-[url('/img/Back_6.jpg')]  bg-cover bg-center bg-no-repeat bg-blend-overlay  ">
      <div className="section-padding px-4 sm:px-8 bg-[#0000009e]">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h1 className="section-title">Roadmap</h1>
          <div className="md:flex pt-14">
            <div
              data-aos="fade-up-right"
              className="flex justify-center w-full lg:w-[45%] xl:w-[50%]"
            >
              <img
                src="/img/coin-logo.png"
                className="h-[300px] lg:h-[80%] object-contain"
                alt="Coin Logo"
              />
            </div>

            <div className="w-full lg:w-[55%] xl:w-[50%]">
              <div className=" mx-auto relative">
                {/* Full vertical line behind dots */}
                <div className="absolute left-3.5 top-[10%] bottom-[10%] w-px bg-[#2975f1] " />
                <ol className="relative space-y-14">
                  {roadmapPhases.map((phase, index) => {
        
                    return (
                      <li
                        key={index}
                        className="relative flex items-center pl-12"
                      >
                        {/* Dot + vertical segment inside it */}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                          <div className="relative">
                            <div className="w-7 h-7 rounded-full bg-[#2975f1] flex items-center justify-center">
                              <ChevronRight size={16} color="#000" />
                            </div>
                          </div>
                        </div>

                        {/* Card */}
                        <div className="bg-[#1b1c1e] text-white p-6 rounded-lg w-full max-w-xl shadow-lg text-left">
                          <p className="text-xs text-white uppercase tracking-wide">
                            {phase.phase}
                          </p>
                          <h3 className="text-xl font-bold text-[#2975f1] mb-2">
                            {phase.title}
                          </h3>
                          <ul className="space-y-1">
                            {phase.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex items-start space-x-2 text-sm leading-snug"
                              >
                                <span className="text-[#2975f1] text-lg leading-5">
                                  &#x2022;
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
