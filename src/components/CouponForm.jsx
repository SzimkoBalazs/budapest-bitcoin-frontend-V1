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
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden max-w-lg w-full">
        {/* Card Header */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-6 px-8 text-center">
          <h1 className="text-3xl font-extrabold">Claim Your Discount</h1>
          <p className="mt-2 text-sm text-gray-100">
            Exclusive coupon just for you
          </p>
        </div>

        {/* Card Body */}
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            {/* Input */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter your email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
              required
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 text-white font-semibold rounded-md transition ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600"
              }`}
            >
              {isLoading ? "Submitting..." : "Get My Coupon"}
            </button>
          </form>

          {/* Success Message */}
          {isSuccess && (
            <div className="mt-4 p-4 bg-green-50 border border-green-400 text-green-600 rounded-md">
              Your coupon request has been submitted successfully!
            </div>
          )}

          {/* Error Message */}
          {isError && (
            <div className="mt-4 p-4 bg-red-50 border border-red-400 text-red-600 rounded-md">
              {error.message || "Something went wrong. Please try again."}
            </div>
          )}
        </div>

        {/* Card Footer */}
        <div className="bg-gray-50 py-4 px-8 text-center">
          <p className="text-sm text-gray-600">
            We respect your privacy. No spam guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CouponForm;
