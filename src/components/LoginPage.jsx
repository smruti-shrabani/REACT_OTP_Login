import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import image from "..//assets//LoginPageImage.png";

function LoginPage({ setOtp }) {
  const navigate = useNavigate();
  const inputNum = useRef("");
  // const [bool, setBool] = useState(true);
  function generateOTP(a) {
    const OTP = Math.floor(Math.random() * 9000) + 1000;
    //console.log(OTP);
    setOtp(String(OTP));
  }

  function numberValidation(num) {
    const regex = /^\d{10}$/;
    if (num.length == 10 && regex.test(num)) {
      generateOTP(num);
      // setBool(false);
      navigate("/otp");
    } else {
      alert("Invalid Input : Enter a phone number");
    }
  }

  // useEffect(()=>{
  //     if(!bool) navigate("/otp");
  // },[bool])
  // if (!bool) navigate("/otp");

  return (
    <>
      <div className="flex flex-col items-center m-10">
          <div className="bg-linear-to-bl from-white to-blue-100 flex flex-col items-center h-120 w-100  rounded-3xl shadow-xl">
            <img
              src={image}
              alt="Person standing in front of a large smartphone displaying a login form with security icons"
              className="m-5 font-light h-70"
            />
            <input
              type="number"
              inputMode="numeric"
              placeholder="Enter phone Number"
              onChange={(e) => {
                e.preventDefault();
                inputNum.current = e.target.value;
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  numberValidation(inputNum.current);
                }
              }}
              className="mobileNumber m-5 border border-solid border-b-black p-4 rounded-md h-5 w-80"
            />
            <button
              type="submit"
              className="border rounded p-1 border-b-black cursor-pointer"
              onClick={(e) => {
                // console.log(inputNum.current);
                numberValidation(inputNum.current);
              }}
            >
              Submit
            </button>
          </div>
      </div>
    </>
  );
}

export default LoginPage;
