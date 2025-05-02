export default function FooterSection() {
  return (
    <div className="bg-black overflow-hidden ">
    
      <div className="py-[20px] w-full flex flex-col bg-[url('/img/footer_images.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay mx-auto items-center">
        {/* content */}
        <div className="container mx-auto">
          {/* Overlay for text readability */}
          <div className="flex flex-col justify-center items-center px-4 space-y-6">
            <img src="/img/logo.png" className="w-[100px]" />
            <p className="text-white uppercase font-bold  text-base  md:text-lg  lg:text-xl text-center ">
              Terms and Conditions / Privacy Policy
            </p>
            {/* social icon */}
            <div  className="flex  space-x-3" >
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
