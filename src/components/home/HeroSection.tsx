import Header from "../shared/header";

export default function HeroSection() {
  return (
    <div className="h-[90vh] w-full flex flex-col bg-[url('/img/bg-1.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center">
      <Header />

      {/* content */}
      <div className="grid grid-cols-2 container mx-auto gap-8 p-6">
        {/* Overlay for text readability */}
        <div className="flex justify-center">
          <img src="/img/coin-logo.png" className="h-[80%] object-contain" />
        </div>

        <div className="px-6 space-y-5">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white font-custom">
            FIGHT. EARN. SURVIVE.
          </h1>
          <p className="text-xl text-white">
            Enter the ultimate battleground where strength is the only currency.
            Connect your wallet, join the fight, and claim your place among the
            champions.
          </p>

          <button className="nav-item-button flex gap-2 items-center cursor-pointer bg-gradient-to-r from-[#0339DE] via-[#5F01B8] to-[#0339DE]">
            <img src="/svg/game-icon.svg" className="h-[15px]" />
            <p className="font-bold">Play Now</p>
          </button>

          <div className="flex flex-col justify-center items-center">
            <p className="mb-4 text-white text-xl font-medium text-center">
              Contract Address
            </p>
            <input
              type="text"
              value="Ahg9BzpPnwUPban4uX2k3vmn3TS46uSxz4PiMrvKNcYx"
              className="w-full text-center px-5 py-1 bg-transparent border-2 border-gray-300 rounded-full text-white mb-6 text-lg"
              readOnly
            />
          </div>

          <p className="mb-6 text-lg text-white text-[31px] font-bold text-center">
            The first decentralized Mortal Coin $MORTAL on Solana, designed to
            make holders wealthier with every transaction.
          </p>

          <div className="flex gap-6 justify-center relative">
            <button className="hero-buttons">
              <p className="z-10" >Join the Battle</p>
            </button>
            <button className="hero-buttons">Join Tournament</button>
            <button className="hero-buttons">Buy $KAME</button>
          </div>
        </div>
      </div>
    </div>
  );
}
