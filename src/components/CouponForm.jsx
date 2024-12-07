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
    <div className="flex items-center justify-center gap-[10px]">
      {/* Input Section */}
      <form onSubmit={handleSubmit}>
        {/* Input Field */}
        <input
          type="email"
          placeholder="Enter your email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-white placeholder-gray-400 px-[16px] py-[12px] items-center border border-[#1F1F1F] bg-black/5 shadow-custom w-[316px]"
          required
        />
        {/* Submit Button */}
        <button type="submit" disabled={isLoading} className="relative group">
          {/* Gradient Background */}
          <span
            className="absolute inset-[2px] w-full h-full bg-gradient-to-r from-[#755EF7] to-[#F65E7A] p-[2px] group-hover:blur-[1px]"
            aria-hidden="true"
          ></span>
          {/* Actual Button */}
          <span className="relative flex items-center justify-center w-full h-full px-8 py-3 bg-black text-white text-[14px] font-semibold ">
            {isLoading ? "Submitting..." : "Sign up"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default CouponForm;
