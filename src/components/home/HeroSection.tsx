import Header from "../shared/header";

export default function HeroSection() {
  return (
    <div className=" pb-10 w-full flex flex-col bg-[url('/img/Back_1.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center bg-[rgba(0,0,0,0.42)]">
      <Header />

      {/* content */}
      <div className="lg:flex container mx-auto">
        {/* Overlay for text readability */}
        <div className="flex justify-center w-full lg:w-[45%] xl:w-[50%]">
          <img
            src="/img/coin-logo.png"
            className=" h-[300px] lg:h-[80%] object-contain "
          />
        </div>

        <div className="px-6 space-y-5 lg:space-y-6 w-full lg:w-[50%]  xl:w-[50%]  ">
          <h1 className="text-2xl md:text-4xl xl:5xl text-white">
            FIGHT. EARN. SURVIVE.
          </h1>
          <p className=" text-sm md:text-lg  xl:text-xl text-white">
            Enter the ultimate battleground where strength is the only currency.
            Connect your wallet, join the fight, and claim your place among the
            champions.
          </p>

          <button className="nav-item-button  w-full md:w-auto  justify-center flex gap-2 items-center cursor-pointer bg-linear-to-r from-[#0339DE] from-60% to-[#5F01B8]">
            <img src="/svg/game-icon.svg" className="h-[15px]" />
            <p className="font-bold">Play Now</p>
          </button>

          <div className="flex flex-col justify-center items-center space-y-2">
            <p className="text-white text-24 font-medium text-center">
              Contract Address
            </p>
            <input
              type="text"
              value="CA: Ahg9BzpPnwUPban4uX2k3vmn3TS46uSxz4PiMrvKNcYx"
              className="w-full text-center px-5 py-1 bg-transparent border-2 border-gray-300 rounded-full text-white text-xs  md:text-base  xl:text-lg"
              readOnly
            />
          </div>

          <p className=" py-4 rounded-2xl text-base md:text-xl  lg:text-2xl  xl:text-3xl text-white font-bold text-center bg-[#000000]">
            The first decentralized Mortal Coin $MORTAL on Solana, designed to
            make holders wealthier with every transaction.
          </p>

          <div className="space-y-3 space-x-2  lg:space-y-0 lg:flex gap-6 justify-center relative ">
            <button className="hero-buttons w-full md:w-auto">
              <p className="z-10">Join the Battle</p>
            </button>
            <button className="hero-buttons w-full md:w-auto">
              Join Tournament
            </button>
            <button className="hero-buttons w-full md:w-auto">Buy $KAME</button>
          </div>
        </div>
      </div>
    </div>
  );
}
