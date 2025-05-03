import { ChevronRight } from "lucide-react";

export default function RoadmapSection() {
  return (
    <div className="section-padding bg-[url('/img/Back_6.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
        Roadmap
        </h1>
        {/* content */}
        <div className=" md:flex pt-14">
          {/* Overlay for text readability */}
          <div className="flex justify-center w-full lg:w-[45%] xl:w-[50%]">
            <img
              src="/img/coin-logo.png"
              className=" h-[300px] lg:h-[80%] object-contain "
            />
          </div>
          {/* time line */}
          <div className="">
            <ol>
              {/* section line */}
              <li className="border-l-2 border-white  mt-3 ">
                <div className="md:flex flex-start">
                  {/* line and icon */}
                  <div className="bg-white w-6 h-6 flex items-center justify-center rounded-full -ml-3.5 ">
                    <ChevronRight color="black" size={15} />
                  </div>
                  {/* box info */}
                  <div className="block  p-3 lg:p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-5  lg:ml-6  mb-10 -mt-10 text-left">
                    <div className="justify-between  w-full ">
                      <p className="font-normal text-gray-400  text-lg  md:text-xl lg:text-2xl uppercase">
                        Phase 1
                      </p>
                      <h1 className="font-medium  text-3xl  lg:text-4xl     2xl:text-5xl bg-gradient-to-l from-[#003BDF] to-50% to-[#6100B7] bg-clip-text text-transparent">
                        Launch
                      </h1>
                    </div>

                    {/* info */}
                    <p className="text-gray-700 mb-2   text-base   lg:text-lg  xl:text-xl ">
                      Enter the ultimate battleground where strength is the only
                      currency. Connect your wallet, join the fight, and claim
                      your place among the champions.
                    </p>
                  </div>
                  {/* end box */}
                </div>
              </li>

              {/* section line 2 */}
              <li className="border-l-2 border-white  ">
                <div className="md:flex flex-start">
                  {/* line and icon */}
                  <div className="bg-white w-6 h-6 flex items-center justify-center rounded-full -ml-3.5 ">
                    <ChevronRight color="black" size={15} />
                  </div>
                  {/* box info */}
                  <div className="block  p-3 lg:p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-5  lg:ml-6  mb-10  text-left">
                    <div className="justify-between  w-full ">
                      <p className="font-normal text-gray-400  text-lg  md:text-xl lg:text-2xl uppercase">
                        Phase 2
                      </p>
                      <h1 className="timeline-title">
                        Community Expansion
                      </h1>
                    </div>

                    {/* info */}
                    <p className="text-gray-700 mb-2   text-base   lg:text-lg  xl:text-xl ">
                      Enter the ultimate battleground where strength is the only
                      currency. Connect your wallet, join the fight, and claim
                      your place among the champions.
                    </p>
                  </div>
                  {/* end box */}
                </div>
              </li>
              {/* section line 3 */}
              <li className="border-l-2 border-white  ">
                <div className="md:flex flex-start">
                  {/* line and icon */}
                  <div className="bg-white w-6 h-6 flex items-center justify-center rounded-full -ml-3.5 ">
                    <ChevronRight color="black" size={15} />
                  </div>
                  {/* box info */}
                  <div className="block  p-3 lg:p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-5  lg:ml-6  mb-10  text-left">
                    <div className="justify-between  w-full ">
                      <p className="font-normal text-gray-400  text-lg  md:text-xl lg:text-2xl uppercase">
                        Phase 3
                      </p>
                      <h1 className="timeline-title">
                        Mortal Coin Staking
                      </h1>
                    </div>

                    {/* info */}
                    <p className="text-gray-700 mb-2   text-base   lg:text-lg  xl:text-xl ">
                      Enter the ultimate battleground where strength is the only
                      currency. Connect your wallet, join the fight, and claim
                      your place among the champions.
                    </p>
                  </div>
                  {/* end box */}
                </div>
              </li>
              {/* section line 4 */}
              <li className="border-l-2 border-white  ">
                <div className="md:flex flex-start">
                  {/* line and icon */}
                  <div className="bg-white w-6 h-6 flex items-center justify-center rounded-full -ml-3.5 ">
                    <ChevronRight color="black" size={15} />
                  </div>
                  {/* box info */}
                  <div className="block  p-3 lg:p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-5  lg:ml-6    text-left">
                    <div className="justify-between  w-full ">
                      <p className="font-normal text-gray-400  text-lg  md:text-xl lg:text-2xl uppercase">
                        Phase 1
                      </p>
                      <h1 className="timeline-title">Beta Game Launch</h1>
                    </div>

                    {/* info */}
                    <p className="text-gray-700 mb-2   text-base   lg:text-lg  xl:text-xl ">
                      Enter the ultimate battleground where strength is the only
                      currency. Connect your wallet, join the fight, and claim
                      your place among the champions.
                    </p>
                  </div>
                  {/* end box */}
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
