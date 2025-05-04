export default function JoinTheMortalArmySection() {
  return (
    <div className="section-padding w-full flex flex-col bg-black bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center ">
      {/* content */}
      <div className="container mx-auto ">
        {/* Overlay for text readability */}
        <div className="flex flex-col justify-center items-center px-4 space-y-6">
          <img src="/img/enter-the-mortal.png" className="   md:h-[400px]  lg:h-[500px]  xl:h-[600px]"  />

          {/* social media */}
          <div className="space-x-4" >
            <button data-aos="fade-up-right">
              <img
                src="/svg/twiter-icon.svg"
                className=" w-[50px] md:w-[80px]  xl:w-[100px]"
              />
            </button>
            <button data-aos="fade-up">
              <img
                src="/svg/discoud-icon.svg"
                className=" w-[50px] md:w-[80px]  xl:w-[100px]"
              />
            </button>
            <button data-aos="fade-up-left">
              <img
                src="/svg/telegram-icon.svg"
                className=" w-[50px] md:w-[80px]  xl:w-[100px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
