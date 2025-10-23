import React from "react";
import image from "..//assets//SubmitPageImage.png";

function submitPage() {
  return (
    <div className="flex flex-row justify-center">
      <div className="h-100 w-100 m-20 rounded-xl bg-linear-to-bl from-white to-blue-100 flex flex-col  shadow-xl text-center justify-center">
        <img src={image} alt="OTP submit successful image" className="h-80 w-80 self-center" />
        <h3
          style={{ fontFamily: "Merriweather, serif" }}
          className="font-light"
        >
          OTP submitted Successfully
        </h3>
      </div>
    </div>
  );
}

export default submitPage;
