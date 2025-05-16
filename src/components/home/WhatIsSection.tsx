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
  const list = [
    { title: "Tax", value: "10%" },
    { title: "Rewards", value: "5%" },
    { title: "Marketing", value: "80%" },
  ];

  return (
    <div className=" -mt-20 pb-20 w-full flex flex-col bg-[url('/img/Back_3.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center ">
      {/* content */}
      <div className="container mx-auto section-padding ">
        {/* Overlay for text readability */}
        <div className="flex flex-col justify-center items-center px-4 space-y-6">
          <h1 data-aos="fade-up" className="section-title text-center">
            What is <br /> Mortal Coin?
          </h1>
          <p
            data-aos="fade-up"
            className=" text-base md:text-lg  xl:text-xl text-white font-semibold md:w-[80%] text-center "
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
            className=" bg-[#222428] mt-5 md:flex overflow-hidden  rounded-4xl "
          >
            {/* left */}
            <div className="space-y-4  flex flex-col justify-center px-6 py-2  pt-8 md:pt-0 ">
              {LIST?.map((p, index) => {
                return (
                  <div className="flex gap-2 text-black font-bold " key={index}>
                    <img src="/svg/arrow-right-w.svg" className="w-[20px]" />
                    <p className="  text-white   2xl:text-3xl ">{p?.title}</p>
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

      {/*  */}
      {/* Content */}
      <div className="section-padding">
        <div className="container mx-auto justify-center space-y-7 ">
          {/* Tokenomics Info */}
          <div
            data-aos="fade-up-left"
            className=" flex flex-col px-6 space-y-5 lg:space-y-6 w-full justify-center items-center  "
          >
            <h1 className="section-title">Tokenomics</h1>
            {/*  */}
            <div
              data-aos="fade-up-right"
              className="flex justify-center  lg:w-[45%] xl:w-[50%]"
            >
              <img
                src="/img/coin-logo-2.png"
                className="h-[200px]  md:h-[20%] lg:h-[80%] xl:h-[20%] object-contain"
                alt="Coin Logo"
              />
            </div>

            {/* list */}
            <div className="flex flex-wrap gap-4 md:gap-7 justify-center">
              {list.map((item, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col justify-center items-center"
                >
                  <p className="font-semibold  text-[#C85D00] text-2xl  md:text-2xl   lg:text-3xl">
                    {item.value}
                  </p>
                  <p className="font-semibold  text-[#C85D00]  md:text-xl  lg:text-2xl">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            {/* text */}
            <p className="text-[#C85D00] lg:w-[40%] text-center text-lg  md:text-xl ">
              Each battle burns tokens. 80% of the entry fee goes to the winner.
              20% is burned forever.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:justify-center md:gap-6 mt-10"
        >
          <div>
            <img src="/img/c1.png" className="company-box-img" />
          </div>
          <div>
            <img src="/img/c2.png" className="company-box-img" />
          </div>
          <div>
            <img src="/img/c3.png" className="company-box-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
