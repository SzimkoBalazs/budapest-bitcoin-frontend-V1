import React, { useState } from "react";
import useCoupon from "../hooks/useCoupon";
import { toast } from "react-toastify";

const CouponForm = () => {
  const [email, setEmail] = useState("");
  const { mutate, isLoading, isSuccess, isError, error } = useCoupon();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    mutate(email);
    setEmail("");
  };

  return (
    <div className="flex w-full justify-center gap-[10px]">
      {/* Input Section */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-center flex-col xs:flex-row relative shadow-custom max-w-[304px] xs:max-w-[400px]"
      >
        {/* Input Field */}
        <input
          type="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="xs:pr-[128px] focus:shadow-customActive transition-shadow focus:text-white-80 w-full h-12 xs:h-11 placeholder-gray-400 px-[16px] py-[12px] text-[14px] text-neutral-200 placeholder:font-[300] placeholder:text-neutral-200 items-center border-t border-l border-r xs:border-l xs:border-t xs:border-b border-[#1F1F1F] bg-black/5 outline-none"
          required
        />
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="relative xs:absolute right-0 h-[48px] xs:h-[40px] w-full xs:w-auto"
        >
          {/* Gradient Background */}
          <span
            className="absolute inset-x-[-1px] inset-y-[-1px] h-[50px] xs:h-[42px] bg-gradient-to-r from-[#755EF7] to-[#F65E7A] pr-[4px] group-hover:blur-[1px]"
            aria-hidden="true"
            style={{ width: "calc(100% + 2px)" }}
          ></span>
          {/* Actual Button */}
          <span className="relative flex px-8 items-center justify-center w-full h-full bg-black hover:bg-neutral-900 active:bg-neutral-800 transition-colors text-white text-[14px]">
            {isLoading ? "Submitting..." : "Sign up"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default CouponForm;
