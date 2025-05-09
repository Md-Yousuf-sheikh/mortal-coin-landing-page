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
          <h1 data-aos="fade-up" className="section-title text-center">
            What is Mortal Coin?
          </h1>
          <p
            data-aos="fade-up"
            className=" text-sm md:text-lg  xl:text-xl text-white font-semibold md:w-[50%] text-center "
          >
            Mortal Coin is a Web3 fighting project built on Solana — where meme
            culture meets deadly competition. Players connect their wallets,
            fight in real-time PvP battles, and earn $MORTAL tokens by winning.
            More than just a token, Mortal Coin is a gamified battleground where
            holders become warriors and the strongest rise through the ranks.
          </p>

          {/* Box */}
          <div
            data-aos="zoom-in-up"
            className=" mt-5 md:flex overflow-hidden  bg-gradient-to-br  from-[#FFFFFF] from-2% to-90%  to-[#DE88F4] rounded-4xl "
          >
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
