export default function FooterSection() {
  return (
    <div className="bg-black overflow-hidden ">
      <div className="py-[20px] w-full flex flex-col bg-[url('/img/footer_images.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center">
        {/* content */}
        <div className="container mx-auto">
          {/* Overlay for text readability */}
          <div className="flex flex-col justify-center items-center px-4 space-y-6 text-center">
            <img src="/img/logo.png" className="w-[100px]  md:w-[200px]" />
            <p className="text-white uppercase font-bold  text-xs  md:text-[18px]  lg:text-[20px] text-center flex flex-wrap items-center ">
              Home <p className="px-2 text-[#CD5F00]" >|</p> Tokenomics <p className="px-2 text-[#CD5F00]" >|</p> Game <p className="px-2 text-[#CD5F00]" >|</p> Roadmap <p className="px-2 text-[#CD5F00]" >|</p> Community <p className="px-2 text-[#CD5F00]" >|</p> Connect Wallet
            </p>
            <p className="text-white uppercase font-bold  text-xs  md:text-[18px]  lg:text-[20px] text-center ">
              Terms and Conditions / Privacy Policy
            </p>
            {/* social icon */}
            <div className="flex  space-x-3">
              <button>
                <img
                  src="/svg/x-icon.svg"
                  className="w-[20px]  md:w-[40px] lg:w-[40px]"
                />
              </button>
              <button>
                <img
                  src="/svg/discoud2-icon.svg"
                  className="w-[20px]  md:w-[40px] lg:w-[40px]"
                />
              </button>
              <button>
                <img
                  src="/svg/telegram2-icon.svg"
                  className="w-[20px]  md:w-[40px] lg:w-[40px]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
