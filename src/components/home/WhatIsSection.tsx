export default function WhatIsSection() {
  const LIST = [
    {
      title: "Memecoin with Rewards",
    },
    {
      title: "Community-driven",
    },
    {
      title: "Future Gamification",
    },
    {
      title: "Built to Endure",
    },
  ];

  return (
    <div className="section-padding -mt-10 w-full flex flex-col bg-[url('/img/Back_3.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center ">
      {/* content */}
      <div className="container mx-auto ">
        {/* Overlay for text readability */}
        <div className="flex flex-col justify-center items-center px-4 space-y-6">
          <h1 className="section-title text-center">What is Mortal Coin?</h1>
          <p className=" text-sm md:text-lg  xl:text-xl text-white font-semibold md:w-[50%] text-center ">
            A group of hunters travel to a mysterious island to track down a
            legendary forest creature. They soon realize their guide has set
            them up as bait, forcing them to confront a highly intelligent
            predator that terrorizes them one by one.
          </p>

          {/* Box */}
          <div className=" mt-5 md:flex overflow-hidden  bg-gradient-to-br  from-[#FFFFFF] from-2% to-90%  to-[#DE88F4] rounded-4xl ">
            {/* left */}
            <div className="space-y-4  flex flex-col justify-center px-6 py-2  pt-8 md:pt-0 ">
              {LIST?.map((p, index) => {
                return (
                  <div className="flex gap-2 text-black font-bold " key={index}>
                    <img src="/svg/arrow-right.svg" className="w-[24px]" />
                    <p className="   2xl:text-3xl ">{p?.title}</p>
                  </div>
                );
              })}
            </div>
            {/* right */}
            <div className="md:pt-4 flex justify-end ">
              <img src={"/img/coin-h.png"} className="h-[30vh] " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
