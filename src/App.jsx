import { useState } from "react";
import LoginPage from "./components/LoginPage";
import OTP from "./components/OTP";
import SubmitPage from "./components/SubmitPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [otp,setOtp] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage setOtp={setOtp} />} />
          <Route path="/otp" element={<OTP otp={otp} />} />
          <Route path="/submit" element={<SubmitPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
