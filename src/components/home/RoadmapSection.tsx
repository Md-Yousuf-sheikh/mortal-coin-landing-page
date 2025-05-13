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
    <div className="bg-[url('/img/Back_6.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay">
      <div className="section-padding bg-shadow-blinder-y px-4 sm:px-8">
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
              <ol data-aos="fade-up">
                {roadmapPhases.map((phaseData, index) => {
                  return (
                    <li
                      key={index}
                      className={`border-l-1 border-[#2975f1ff] ${
                        index === 0 ? "mt-10" : "pt-0"
                      } `}
                    >
                      <div className="md:flex flex-start ">
                        <div
                          className={`${
                            index === 0 ? "mt-0" : "mt-12"
                          } bg-[#2975f1ff] w-6 h-6 flex items-center justify-center rounded-full -ml-3.5`}
                        >
                          <ChevronRight color="black" size={15} />
                        </div>

                        {/* info content */}
                        <div
                          className={`${
                            index === 0 ? "-mt-10" : "pt-10"
                          } block p-3 lg:p-6 rounded-lg shadow-lg bg-[#222428ff] max-w-md ml-5 lg:ml-6 md:mb-10 text-left`}
                        >
                          <div className="w-full">
                            <p className="font-medium text-white text-sm md:text-md lg:text-lg uppercase">
                              {phaseData.phase}
                            </p>
                            <h1 className="timeline-title">
                              {phaseData.title}
                            </h1>
                          </div>

                          <ul className="-space-y-3">
                            {phaseData.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="flex space-x-1 items-center"
                              >
                                <p className="text-[40px] -mt-1 text-[#2975F1]">
                                  &#x2022;
                                </p>
                                <p className="text-sm md:text-base xl:text-[20px]">
                                  {item}
                                </p>
                              </li>
                            ))}
                          </ul>
                        </div>
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
  );
}
