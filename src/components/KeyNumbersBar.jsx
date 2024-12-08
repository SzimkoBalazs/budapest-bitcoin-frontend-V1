import React from "react";

const KeyNumbersBar = () => {
  return (
    <div className="w-full bg-custom-bg border-t-2 border-b-2 border-custom-border backdrop-blur-2px">
      <div className="w-full mx-auto flex flex-col gap-y-6 md:gap-y-0 md:flex-row justify-center items-center py-6 px-6 md:py-10">
        {/* Key Number Item */}
        {/* GROUP 1 */}
        <div className="flex flex-row justify-center md:justify-between items-center w-full">
          <div className="text-center px-2 lg:px-4 w-[160px] md:w-full">
            <h3 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[100%] font-[800] text-neutral-700">
              4
            </h3>
            <p className="text-[16px] lg:text-[18px] leading-[105%] text-neutral-700">
              Stages
            </p>
          </div>
          <div className="w-px h-8 bg-white/20 mx-4"></div>
          <div className="text-center px-2 lg:px-4 w-[160px] md:w-full">
            <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] leading-[100%] text-neutral-700">
              40+
            </h3>
            <p className="text-[16px] lg:text-[18px] leading-[105%] text-neutral-700">
              Speakers
            </p>
          </div>

          <div className="w-px h-8 bg-white/20 mx-4 hidden md:flex"></div>
        </div>
        {/* GROUP 2 */}
        <div className="flex flex-row justify-center md:justify-between items-center w-full">
          <div className="text-center px-2 lg:px-4 w-[160px] md:w-full">
            <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] leading-[100%] text-neutral-700">
              1000+
            </h3>
            <p className="text-[16px] lg:text-[18px] leading-[105%] text-neutral-700">
              Projected attendees
            </p>
          </div>

          <div className="w-px h-8 bg-white/20 mx-4"></div>
          <div className="text-center px-2 lg:px-4 w-[160px] md:w-full">
            <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] leading-[100%] text-neutral-700">
              30+
            </h3>
            <p className="text-[16px] lg:text-[18px] leading-[105%] text-neutral-700">
              Media attendees
            </p>
          </div>

          <div className="w-px h-8 bg-white/20 mx-4 hidden md:flex"></div>
        </div>
        {/* GROUP 3 */}
        <div className="flex flex-row justify-center md:justify-between items-center w-full">
          <div className="text-center px-2 lg:px-4 w-[160px] md:w-full">
            <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] leading-[100%] text-neutral-700">
              50+
            </h3>
            <p className="text-[16px] lg:text-[18px] leading-[105%] text-neutral-700">
              Companies
            </p>
          </div>

          <div className="w-px h-8 bg-white/20 mx-4"></div>

          <div className="text-center px-2 lg:px-4 w-[160px] md:w-full">
            <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-[800] leading-[100%] text-neutral-700">
              2
            </h3>
            <p className="text-[16px] lg:text-[18px] leading-[105%] text-neutral-700">
              Days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyNumbersBar;
