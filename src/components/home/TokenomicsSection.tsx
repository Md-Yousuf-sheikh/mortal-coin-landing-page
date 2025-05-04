export default function TokenomicsSection() {
  const list = [
    { title: "10% Tax" },
    { title: "5% Holders" },
    { title: "5% Marketing" },
  ];

  return (
    <div className=" bg-[url('/img/Back_4.jpg')] bg-cover bg-center bg-no-repeat bg-blend-overlay ">
      <div className="section-padding bg-shadow-blinder-t bg-shadow-blinder-b mx-auto items-center   w-full flex flex-col">
        {/* Content */}
        <div className="md:flex container mx-auto justify-center space-y-7">
          {/* Image Section */}
          <div
            className="flex justify-center w-full lg:w-[45%]"
            data-aos="fade-up-right"
          >
            <img
              src="/img/tokenomics-image.png"
              alt="Tokenomics"
              className="h-[200px] md:h-[300px] object-contain"
            />
          </div>

          {/* Tokenomics Info */}
          <div
            data-aos="fade-up-left"
            className="px-6 space-y-5 lg:space-y-6 w-full lg:w-[45%] 2xl:w-[25%]  "
          >
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
        <div
          data-aos="fade-up"
          className=" space-y-4 md:flex justify-center gap-6 mt-10 "
        >
          {/* c1 */}
          <div className="company-box">
            <img src="/img/c1.png" className="company-box-img" />
          </div>
          {/* c2 */}
          <div className="company-box">
            <img src="/img/c2.png" className="company-box-img" />
          </div>
          {/* c3 */}
          <div
            className=" company-box "
            style={{
              backgroundColor: "rgba(31, 31, 31, 1)",
            }}
          >
            <img src="/img/c3.png" className="company-box-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
