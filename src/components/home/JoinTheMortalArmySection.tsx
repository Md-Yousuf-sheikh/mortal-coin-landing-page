export default function JoinTheMortalArmySection() {
  return (
    <div className="section-padding w-full flex flex-col bg-[url('/img/Back_5.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center ">
      {/* content */}
      <div className="container mx-auto ">
        {/* Overlay for text readability */}
        <div className="flex flex-col justify-center items-center px-4 space-y-6">
          <h1
            className="  text-[50px] md:text-[80px] lg:text-[110px] 2xl:text-[173px] text-white text-center px-4"
            style={{
              WebkitTextStroke: "5px #003BDF",
              color: "#ffffffff",
            }}
          >
            Join the Mortal Army
          </h1>

          {/* social media */}
          <div>
            <button>
              <img
                src="/svg/twiter-icon.svg"
                className=" w-[70px] md:w-[90px]  xl:w-[117px]"
              />
            </button>
            <button>
              <img
                src="/svg/discoud-icon.svg"
                className=" w-[70px] md:w-[90px]  xl:w-[117px]"
              />
            </button>
            <button>
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
