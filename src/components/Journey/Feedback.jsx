import React from "react";
import { Heading } from "./Heading";
import { journeySteps } from "../../steps";
import { useLocation, useNavigate } from "react-router-dom";
import { Counter } from "./Counter";

export const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, text, step } = location.state;

  const handleNextStep = () => {
    if (step + 1 < journeySteps.length) {
      navigate("/journey", { state: { step: step + 1 } });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Heading text={title} />
      <div className="flex flex-col items-center gap-12 justify-center h-screen">
        <p>{text}</p>
        <button
          className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold"
          onClick={handleNextStep}
        >
          Next Step
        </button>
        <Counter />
      </div>
    </>
  );
};
