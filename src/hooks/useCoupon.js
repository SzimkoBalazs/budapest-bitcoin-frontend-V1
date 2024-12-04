import { useMutation } from "@tanstack/react-query";
import { sendCouponRequest } from "../utils/api";
import { toast } from "react-toastify";

const useCoupon = () => {
  return useMutation({
    mutationFn: (email) => sendCouponRequest(email), // Az email továbbítása az api.js függvénynek
    onSuccess: (data) => {
      console.log("Coupon successfully created!", data);
      toast.success("Coupon successfully created!");
    },
    onError: (error) => {
      console.error("Error creating coupon:", error.message);
    },
  });
};

export default useCoupon;
