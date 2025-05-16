export default function MortalGameSection() {
  return (
    <div className="section-padding bg-[url('/img/Back_5.png')] bg-cover bg-center bg-no-repeat bg-blend-overlay py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center text-white flex flex-col justify-center items-center">
        {/* Title */}
        <h1 data-aos="fade-up" className="section-title">
          THE MORTAL GAME
        </h1>

        {/* Description */}
        <p
          data-aos="fade-up"
          className="text-lg lg:text-xl mb-8 pt-5 lg:w-[70%]"
        >
          The battle never ends. Inside the Mortal Arena, players from around
          the world clash in real-time. Win, earn, and rise through the ranks.
          Every fight brings glory — and real rewards in{" "}
          <span className="text-[#CD5F00]">$MORTAL</span> tokens.
        </p>

        {/* Question */}
        <p
          data-aos="fade-up"
          className="text-2xl lg:text-xl font-semibold mb-6 text-[#CD5F00] "
        >
          Are you worthy of becoming a champion?
        </p>

        {/* Stats */}
        <div className="pt-4">
          <p
            data-aos="fade-up"
            className="text-2xl lg:text-xl font-semibold mb-6 text-white text-left uppercase "
          >
           Real-time PvP battles. Win. Earn. Rise.
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {/* Current Fighters Online */}
            <div
              data-aos="fade-up-right"
              className="border-2 border-[#CD5F00] p-6 rounded-xl shadow-xl relative  flex space-x-2 items-center "
            >
              {/* icon */}
              <img
                src="/svg/game-fight-1.svg"
                alt="Game Icon"
                className="h-12 sm:h-16 mb-4 rounded-full "
              />

              {/* text */}
              <div className="text-left" >
                <h1 className="text-xl lg:text-5xl font-extrabold ">
                  360
                </h1>
                <p className="text-xl font-bold mb-2 text-[#CD5F00]">
                  Current Fighters Online
                </p>
              </div>
            </div>

            {/* Matches Played Today */}
            <div
              data-aos="fade-up-right"
              className="border-2 border-[#CD5F00] p-6 rounded-xl shadow-xl relative  flex space-x-2 items-center "
            >
              {/* icon */}
              <img
                src="/svg/game-1-icon.svg"
                alt="Game Icon"
                className="h-12 sm:h-16 mb-4 rounded-full "
              />

              {/* text */}
              <div className="text-left" >
                <h1 className="text-xl lg:text-5xl font-extrabold ">
                  360
                </h1>
                <p className="text-xl font-bold mb-2 text-[#CD5F00]">
                  Current Fighters Online
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
