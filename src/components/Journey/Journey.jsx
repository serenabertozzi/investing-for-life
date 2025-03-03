import React, { useState } from "react";
import { Heading } from "./Heading";
import { HeroBanner } from "./HeroBanner";
import { journeySteps } from "../../steps";
import { useNavigate, useLocation } from "react-router-dom";

export const Journey = () => {
  const location = useLocation();
  const initialStep = location.state?.step || 0;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const navigate = useNavigate();

  const handleNextStep = (selectedValue) => {
    if (currentStep < journeySteps.length - 1) {
      setCurrentStep(currentStep + 1);
      navigate("/feedback", { state: { title: journeySteps[currentStep].chapter, text: selectedValue, step: currentStep } });
    } else if (currentStep === journeySteps.length - 1) {
      navigate("/feedback", { state: { title: "end", text: selectedValue, step: currentStep } });
    }  };

  const { chapter, title, question, answers } = journeySteps[currentStep];

  console.log(journeySteps[currentStep]);
  
  return (
<>
      <Heading text={chapter} title={title} />
      <HeroBanner question={question} chapter={chapter} />

    <div className="flex flex-col items-center justify-center mt-16">      
      <div className="flex justify-center items-center gap-10 p-8">
        {answers.map((answer, index) => (
          <button className="bg-white rounded-full text-dark-green p-4" key={index} onClick={() => handleNextStep(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </div>
    </>
  );
};
