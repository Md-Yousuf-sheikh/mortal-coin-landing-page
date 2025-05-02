export default function TokenomicsSection() {
  const list = [
    { title: "20% Liquidity" },
    { title: "12% Marketing" },
    { title: "10% Development" },
    { title: "30% Dex" },
    { title: "5% Team" },
    { title: "45% Presale" },
  ];

  return (
    <div className=" py-[30px]  lg:py-[50px]   2xl:py-[70px] w-full flex flex-col bg-[url('/img/Back_4.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center">
      {/* Content */}
      <div className="md:flex container mx-auto justify-center space-y-7">
        {/* Image Section */}
        <div className="flex justify-center w-full lg:w-[45%]">
          <img
            src="/img/tokenomics-image.png"
            alt="Tokenomics"
            className="h-[200px] md:h-[300px] object-contain"
          />
        </div>

        {/* Tokenomics Info */}
        <div className="px-6 space-y-5 lg:space-y-6 w-full lg:w-[45%] 2xl:w-[25%]  ">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-white text-center">
            Tokenomics
          </h1>
          <div className="flex flex-wrap gap-4 md:gap-7 justify-center">
            {list.map((item, index) => (
              <div
                key={index}
                className="bg-white px-4 py-3 rounded-md border-0 shadow-[3px_4px_1px_0px] shadow-[#CC00FF] flex items-center justify-center"
              >
                <p className="font-semibold text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Button Section (Optional) */}
      <div className="flex justify-center gap-6 mt-7">
        <button className="relative px-[15%] md:px-[30%] py-1 md:py-3  text-white rounded-2xl  shadow-[0px_0px_1px_3px] shadow-[#CC00FF] ">
          <h1 className=" text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px]" >10%</h1>
          <p className=" text-[16px]   lg:text-[18px]   xl:text-[23px] font-bold">Buy Taks</p>
        </button>
        <button className="relative px-[10%] md:px-[30%] py-1 md:py-3  text-white rounded-2xl  shadow-[0px_0px_1px_3px] shadow-[#CC00FF] ">
          <h1 className=" text-[30px] md:text-[50px] lg:text-[60px] xl:text-[70px]" >15%</h1>
          <p className=" text-[16px]   lg:text-[18px]   xl:text-[23px] font-bold"> Sell Taks</p>
        </button>
      </div>
    </div>
  );
}
