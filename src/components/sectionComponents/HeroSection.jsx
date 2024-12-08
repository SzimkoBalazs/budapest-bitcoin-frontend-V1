import React from "react";
import { heroBtcImage } from "../../assets";
import CouponForm from "../CouponForm";
import KeyNumbersBar from "../KeyNumbersBar";

const HeroSection = () => {
  return (
    <section className="relative">
      {/* Background with Bitcoin Image */}
      <div className="flex justify-center shrink-0">
        <img src={heroBtcImage} alt="Bitcoin Budapest" className="w-[400px] " />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center mt-10">
        {/* Heading */}
        <h1 className="text-[#FFF] text-center text-[80px] font-bold tracking-[3.25px]">
          BITCOIN BUDAPEST
        </h1>
        <div className="flex w-1/3 items-center mt-[24px] justify-between">
          <div className="w-[93px] h-[4px] shrink-0 bg-custom-gradient" />
          <h2 className="text-[#FFF] text-center text-[40px] leading-[44px]">
            Coming soon!
          </h2>
          <div className="w-[93px] h-[4px] shrink-0 bg-custom-gradient" />
        </div>
        <p className="text-white-80 text-[20px] font-[300] leading-[30px] text-center shrink-0 mt-[24px]">
          Stay ahead with Bitcoin Budapest! Sign up with your email for updates
          and enjoy a 15% discount on tickets.
        </p>

        {/* Placeholder for Form */}
        <div className="mt-8">
          <CouponForm />
        </div>

        {/* Placeholder for Stats */}
      </div>
      <div className="mt-16 w-[100vwd]">
        {/* KeyNumbersComponent*/}
        <KeyNumbersBar />
      </div>
    </section>
  );
};

export default HeroSection;
