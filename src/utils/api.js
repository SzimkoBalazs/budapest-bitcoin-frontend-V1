// /src/utils/api.js

import axios from "axios";

const myUrl = `${import.meta.env.VITE_API_URL}:${
  import.meta.env.VITE_API_PORT
}/api`;

// Axios instance létrehozása
export const api = axios.create({
  baseURL: myUrl,
});

// API metódus: kupon küldése
export const sendCouponRequest = async (email) => {
  try {
    const response = await api.post("/coupons", { email });
    return response.data;
  } catch (error) {
    if (error.response?.data?.error) {
      throw new Error(error.response.data.error);
    }
    throw error;
  }
};
