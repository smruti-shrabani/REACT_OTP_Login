import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";

function getOTP(props) {
  const navigate = useNavigate();
  // console.log(typeof(otp))
  const arrOTP = useRef([]);

  const { otp } = props; // object destructuring
  console.log(otp);

  const inputs = useRef([]);

  const handleChange = (e, i) => {
    const val = e.target.value;
    console.log(val);
    if (val && i < 4) {
      arrOTP.current[i] = val;
      inputs.current[i + 1]?.focus();
    }
  };

  const handleKeyDown = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  };

  const validateOTP = () => {
    // console.log(arrOTP.current)
    const inputOTP = arrOTP.current.join(""); // de-limiter
    console.log("updated OTP ",inputOTP)
    // console.log(inputOTP)
    if (inputOTP == otp) {
      console.log("OTP input is correct");
      navigate("/submit");
    } else {
      alert("wrong OTP");
    }
  };

  return (
    <div className="flex flex-row justify-center ">
      <div className="h-60 w-100 m-20 rounded-xl bg-linear-to-bl from-white to-blue-100 flex flex-col items-center shadow-xl">
        <button
          className="border-1 rounded p-1 w-16 m-2 self-start"
          onClick={() => {
            navigate("/");
          }}
        >
          back
        </button>
        <div className="flex flex-row justify-center p-8 text-center">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              className="border-1 h-8 w-8 rounded m-3 text-center"
            />
          ))}
        </div>
        <button
          className="border-1 rounded p-1 w-16"
          onClick={() => {
            validateOTP();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default getOTP;
