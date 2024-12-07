import React from "react";

const KeyNumbersBar = () => {
  return (
    <div className="w-full bg-custom-bg border-2 border-custom-border backdrop-blur-2px">
      <div className="max-w-[1200px] mx-auto flex flex-row justify-between items-center px-8 py-4">
        {/* Key Number Item */}
        <div className="text-center">
          <p className="text-[48px] font-[800] leading-[105%] text-customGray">
            4
          </p>
          <p className="text-[20px] leading-[105%] text-customGray">Stages</p>
        </div>

        <div className="w-px h-8 bg-white/20 mx-4"></div>

        <div className="text-center">
          <p className="text-[48px] font-[800] leading-[105%] text-customGray">
            40+
          </p>
          <p className="text-[20px] leading-[105%] text-customGray">Speakers</p>
        </div>

        <div className="w-px h-8 bg-white/20 mx-4"></div>

        <div className="text-center">
          <p className="text-[48px] font-[800] leading-[105%] text-customGray">
            1000+
          </p>
          <p className="text-[20px] leading-[105%] text-customGray">
            Projected attendees
          </p>
        </div>

        <div className="w-px h-8 bg-white/20 mx-4"></div>

        <div className="text-center">
          <p className="text-[48px] font-[800] leading-[105%] text-customGray">
            30+
          </p>
          <p className="text-[20px] leading-[105%] text-customGray">
            Media attendees
          </p>
        </div>

        <div className="w-px h-8 bg-white/20 mx-4"></div>

        <div className="text-center">
          <p className="text-[48px] font-[800] leading-[105%] text-customGray">
            50+
          </p>
          <p className="text-[20px] leading-[105%] text-customGray">
            Companies
          </p>
        </div>

        <div className="w-px h-8 bg-white/20 mx-4"></div>

        <div className="text-center">
          <p className="text-[48px] font-[800] leading-[105%] text-customGray">
            2
          </p>
          <p className="text-[20px] leading-[105%] text-customGray">Days</p>
        </div>
      </div>
    </div>
  );
};

export default KeyNumbersBar;
