export default function JoinTheMortalArmySection() {
  return (
    <div className="section-padding w-full flex flex-col bg-[url('/img/Back_5.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center ">
      {/* content */}
      <div className="container mx-auto ">
        {/* Overlay for text readability */}
        <div className="flex flex-col justify-center items-center px-4 space-y-6">
          {/* title */}
          <h1
            data-aos="fade-up"
            className=" hidden md:flex text-stock-web text-[50px] md:text-[80px] lg:text-[110px] 2xl:text-[173px] text-white text-center px-4 stroke-orange-300 stroke-2 text-stroke-3 "
          >
            Join the Mortal Army
          </h1>
          {/* title */}
          <h1
            data-aos="fade-up"
            className="  flex md:hidden  text-stock-web-small text-[50px] md:text-[80px] lg:text-[110px] 2xl:text-[173px] text-white text-center px-4 stroke-orange-300 stroke-2 text-stroke-3 "
          >
            Join the Mortal Army
          </h1>

          {/* social media */}
          <div>
            <button data-aos="fade-up-right">
              <img
                src="/svg/twiter-icon.svg"
                className=" w-[70px] md:w-[90px]  xl:w-[117px]"
              />
            </button>
            <button data-aos="fade-up">
              <img
                src="/svg/discoud-icon.svg"
                className=" w-[70px] md:w-[90px]  xl:w-[117px]"
              />
            </button>
            <button data-aos="fade-up-left">
              <img
                src="/svg/telegram-icon.svg"
                className=" w-[70px] md:w-[90px]  xl:w-[117px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
