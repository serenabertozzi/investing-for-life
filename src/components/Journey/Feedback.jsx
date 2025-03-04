import React from "react";
import { Heading } from "./Heading";
import { journeySteps } from "../../steps";
import { useLocation, useNavigate } from "react-router-dom";

export const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, step, outcome, lesson, tip, linkText, url, points, add } = location.state;

  const handleNextStep = () => {
    if (step + 1 < journeySteps.length) {
      navigate("/journey", { state: { step: step + 1 } });
    } else {
      navigate("/");
    }
  };

  console.log({linkText});
  console.log({url});
  
  
  const isLastStep = step === journeySteps.length - 1;

  const winOrLose = add ? `🎉 You have gained ${points} SW Coins!` : `😢 You lost  ${points} SW Coins!`;

  return (
    <>
      <Heading text={title} />
      <div className="flex flex-col items-center gap-12 justify-center1 h-screen">
        <div className="flex flex-col items-center bg-white w-[50%] rounded-lg p-8 mt-[8rem] gap-8">
        <p className="text-2xl font-semibold">{winOrLose}</p>
        <h3 className="text-2xl font-semibold">{`🔹 ${outcome}`}</h3>
        <p className="text-lg">{`💡  ${lesson}`}</p>
        <span className="flex items-center gap-1">
        <p className="text-lg ">{`📖  ${tip}`}</p><a className="font-bold text-lg" href={url} target="_blank" rel="noopener noreferrer">{linkText}</a></span>
        </div>
        <button
          className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold"
          onClick={handleNextStep}
        >
          {isLastStep ? "Play Again" : "Next Step"}
        </button>
      </div>
    </>
  );
};
