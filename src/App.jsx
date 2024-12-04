import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import CouponForm from "./components/CouponForm";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CouponForm />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </QueryClientProvider>
    </>
  );
}

export default App;