export default function FAQSection() {
  const FAQ_LIST = [
    {
      title: "1. What is Mortal Coin ($MORTAL)?",
      ans: "Every buy and sell transaction has a 5% fee, which works as follows: The tokens from the fee are swapped for Solana and distributed to holders. The tokens used in the swap are burned forever, reducing supply and increasing $MORTAL value over time.",
    },
    {
      title: "2. How do I play the Mortal Game?",
      ans: "Every buy and sell transaction has a 5% fee, which works as follows: The tokens from the fee are swapped for Solana and distributed to holders. The tokens used in the swap are burned forever, reducing supply and increasing $MORTAL value over time.",
    },
    {
      title: "3. How do I earn $MORTAL tokens?",
      ans: "Every buy and sell transaction has a 5% fee, which works as follows: The tokens from the fee are swapped for Solana and distributed to holders. The tokens used in the swap are burned forever, reducing supply and increasing $MORTAL value over time.",
    },
    {
      title: "4.Which wallets are supported?",
      ans: "Every buy and sell transaction has a 5% fee, which works as follows: The tokens from the fee are swapped for Solana and distributed to holders. The tokens used in the swap are burned forever, reducing supply and increasing $MORTAL value over time.",
    },
  ];

  return (
    <div className="section-padding  w-full flex   items-center bg-[#000000] -mt-1 ">
      {/* content */}
      <div className="container mx-auto">
        {/* Overlay for text readability */}
        <div className="flex flex-col justify-center items-center px-4 space-y-6">
          <h1 className="section-title text-center">FAQ</h1>
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 text-white space-y-4  md:w-[683px]">
            {/* list */}
            {FAQ_LIST?.map((qa, index) => {
              return (
                <div data-aos="fade-up" key={index} className=" border-0 ">
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-non group-open:bg-[#222428]  py-5 bg-[#121316]     px-3 md:px-5 rounded-2xl   group-open:rounded-bl-none  group-open:rounded-br-none ">
                      <span>{qa?.title}</span>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p className=" py-5 bg-[#222428]   px-3 md:px-5 rounded-bl-2xl rounded-br-2xl  text-neutral-200  group-open:animate-fadeIn">
                      We offers a variety of billing options, including monthly
                      and annual subscription plans, as well as pay-as-you-go
                      pricing for certain services. Payment is typically made
                      through a credit card or other secure online payment
                      method.
                    </p>
                  </details>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}
      {/* Left-right sliding images */}
    </div>
  );
}
