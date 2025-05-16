export default function AboutSection() {
  return (
    <div className=" bg-[url('/img/Back_2.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay -mt-[30px] ">
      <div className="section-padding bg-shadow-blinder-t w-full flex flex-col mx-auto items-center pt-[30px] ">
        {/* content */}
        <div className="container mx-auto ">
          {/* Overlay for text readability */}
          <div className="flex flex-col justify-center items-center px-4 space-y-6">
            <h1 data-aos="fade-up"  className="section-title text-center">About<br/>Mortal Coin</h1>
            <p data-aos="fade-up" className=" text-base md:text-lg  xl:text-xl text-white font-semibold md:w-[50%] text-center ">
              Mortal Coin isn’t just a token. It’s a battlefield where memes
              become warriors, and holders become champions.
            </p>

            <button data-aos="fade-up-right"  className="bg-[#E03C17] border-[#E03C17] nav-item-button  w-full md:w-auto  justify-center flex gap-2 items-center cursor-pointer">
              <img src="/svg/game-icon.svg" className="h-[15px]" />
              <p className="font-bold">Read Whitepaper</p>
            </button>

            {/* phone */}
            <img
              src="/img/phone-with-game.png"
              data-aos="zoom-in-up"
              className="md:h-[50vh] object-center mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
