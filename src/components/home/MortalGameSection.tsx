export default function MortalGameSection() {
  return (
    <div className="section-padding bg-[url('/img/Back_5.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Title */}
        <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-extrabold mb-4">
          THE MORTAL GAME
        </h1>

        {/* Description */}
        <p data-aos="fade-up" className="text-lg sm:text-xl mb-8">
          The battle never ends. Inside the Mortal Arena, players from around
          the world clash in real-time. Win, earn, and rise through the ranks.
          Every fight brings glory — and real rewards in{" "}
          <span className="text-yellow-400">$MORTAL</span> tokens.
        </p>

        {/* Question */}
        <p data-aos="fade-up" className="text-2xl sm:text-3xl font-semibold mb-6">
          Are you worthy of becoming a champion?
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
          {/* Current Fighters Online */}
          <div
            data-aos="fade-up-right"
            className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center relative mt-16 "
          >
            {/* icon */}
            <img
              src="/svg/game-icon.svg"
              alt="Game Icon"
              className="h-12 sm:h-16 mb-4 bg-linear-to-r from-cyan-500 to-blue-500 p-2 rounded-full absolute -mt-16 "
            />

            {/* text */}
            <p className="text-xl font-bold mb-2 text-black">
              Current Fighters Online
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-l from-[#6100B7] to-50% to-[#00CCFF] bg-clip-text text-transparent">
              360
            </h1>
          </div>

          {/* Matches Played Today */}
          <div
            data-aos="fade-up-left"
            className="bg-white p-6 rounded-xl shadow-xl flex flex-col items-center relative mt-16 "
          >
            {/* icon */}
            <img
              src="/svg/game-icon.svg"
              alt="Game Icon"
              className="h-12 sm:h-16 mb-4 bg-linear-to-r from-cyan-500 to-blue-500 p-2 rounded-full absolute -mt-14  md:-mt-16 "
            />

            {/* text */}
            <p className="text-xl font-bold mb-2 text-black">
              MATCHES PLAYED TODAY
            </p>
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-l from-[#6100B7] to-50% to-[#00CCFF] bg-clip-text text-transparent">
              120
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
