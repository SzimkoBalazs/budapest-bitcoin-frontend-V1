import React from "react";
import { bitcoinShadow } from "../../assets";
import CouponForm from "../CouponForm";
import KeyNumbersBar from "../KeyNumbersBar";

const HeroSection = () => {
  return (
    <section className="relative flex-col flex justify-start md:justify-between h-full md:h-screen">
      {/* Background with Bitcoin Image */}
      <div className="flex justify-center shrink-0">
        <img
          src={bitcoinShadow}
          alt="Bitcoin Budapest"
          className="w-[80%] md:w-[580px] 2xl:w-[744px]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mb-8 mt-[-24px]">
        {/* Text and email input container */}
        <div className="flex flex-col w-full max-w-[1440px] px-6 gap-y-3 md:gap-y-4 xl:gap-y-6 items-center">
          {/* Heading */}
          <h1 className="text-[#FFF] text-center text-[40px] md:text-[72px] leading-[105%] font-[600] tracking-[3.25px]">
            BITCOIN BUDAPEST
          </h1>
          {/* Coming soon container */}
          <div className="flex max-w-2/3 items-center justify-center gap-x-4">
            <div className="w-10 md:w-[88px] h-[4px] shrink-0 bg-custom-gradient" />
            <h2 className="text-[#FFF] text-center text-[24px] md:text-[40px] leading-[40px] font-[300]">
              Coming soon!
            </h2>
            <div className="w-10 md:w-[88px] h-[4px] shrink-0 bg-custom-gradient" />
          </div>
          {/* Email paragraph */}
          <p className="text-white-80 text-[16px] sm:text-[18px] font-[300] leading-[150%] text-center shrink-0 md:w-2/3 lg:w-1/2 w-full px-0 md:px-10 2xl:mt-2">
            Stay ahead with Bitcoin Budapest! Sign up with your email for
            updates and enjoy a 15% discount on tickets.
          </p>

          {/* Placeholder for Form */}
          <div className="xs:w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 w-full flex mt-2 md:mt-0">
            <CouponForm />
          </div>
        </div>

        {/* Placeholder for Stats */}
      </div>
      <div className="w-full mb-8 2xl:mb-24">
        {/* KeyNumbersComponent*/}
        <KeyNumbersBar />
      </div>
    </section>
  );
};

export default HeroSection;
