import React, { useState } from "react";
import { Heading } from "./Heading";
import { journeySteps } from "../../steps";
import { useNavigate, useLocation } from "react-router-dom";
import { Counter } from "./Counter";

export const Journey = () => {
  const location = useLocation();
  const initialStep = location.state?.step || 0;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const navigate = useNavigate();

  const handleNextStep = (selectedValue) => {
    if (currentStep < journeySteps.length - 1) {
      setCurrentStep(currentStep + 1);
      navigate("/feedback", {
        state: {
          title: journeySteps[currentStep].chapter,
          text: selectedValue,
          step: currentStep,
        },
      });
    } else if (currentStep === journeySteps.length - 1) {
      navigate("/feedback", {
        state: { title: "end", text: selectedValue, step: currentStep },
      });
    }
  };

  const { chapter, question, answers } = journeySteps[currentStep];

  console.log(journeySteps[currentStep]);

  return (
    <div className="flex flex-col items-center gap-12 justify-center h-screen">
      <Heading text={chapter} />
      <h2>{question}</h2>
      <div className="flex flex-col items-center p-8">
        {answers.map((answer, index) => (
          <button key={index} onClick={() => handleNextStep(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <Counter />
    </div>
  );
};
