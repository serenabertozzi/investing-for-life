import React, { useState } from "react";
import { Heading } from "./Heading";
import { Question } from "./Question";
import { journeySteps } from "../../steps";
import { useNavigate } from "react-router-dom";

export const Journey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNextStep = (selectedValue) => {
    if (currentStep < journeySteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/feedback", { state: { inputValue: selectedValue } });
    }
  };

  const { chapter, question, answers } = journeySteps[currentStep];

  return (
    <>
      <Heading text={chapter} />
      <Question
        question={question}
        a1={answers[0]}
        a2={answers[1]}
        a3={answers[2]}
        onSubmit={handleNextStep}
      />
    </>
  );
};
