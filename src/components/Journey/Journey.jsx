import React, { useState } from "react";
import { Heading } from "./Heading";
import { HeroBanner } from "./HeroBanner";
import { journeySteps } from "../../steps";
import { useNavigate, useLocation } from "react-router-dom";
import { Choice } from "./Choice";
import { usePoints } from '../../hooks/usePoints';


export const Journey = () => {
  const location = useLocation();
  const initialStep = location.state?.step || 0;
  const [currentStep, setCurrentStep] = useState(initialStep);
  const navigate = useNavigate();

  const { setTotalPoints } = usePoints();

  const updatePoints = (addedAmount, add, feedback) => {
    setTotalPoints(prevPoints => {
      const newPoints = add ? prevPoints + addedAmount : prevPoints - addedAmount;

      if (newPoints <= 0) {
        navigate("/feedback", {
          state: {
            title: "Game Over",
            step: currentStep,
            outcome: "You have run out of points.",
            lesson: "Try to manage your points better next time.",
            tip: "Consider making different choices to maintain your points.",
            points: addedAmount,
            add: false,
          },
        });
      } else {
        if (currentStep < journeySteps.length - 1) {
          setCurrentStep(currentStep + 1);
          navigate("/feedback", {
            state: {
              title: journeySteps[currentStep].chapter,
              step: currentStep,
              outcome: feedback.outcome,
              lesson: feedback.lesson,
              tip: feedback.tip,
              points: addedAmount,
              add: add,
              linkText: feedback.linkText,
              url: feedback.url,
            },
          });
        } else {
          navigate("/feedback", {
            state: {
              title:"Well done!",
              step: currentStep,
              outcome: "You have completed the game!",
              lesson: "You have successfully managed your points.",
              tip: "Continue to learn about investing",
              points: addedAmount,
              add: add,
            },
          });
        }
      }

      return newPoints;
    });
  };


  const handleNextStep = ({ points, add, feedback }) => {
    updatePoints(points, add, feedback);
  };

  const { chapter, title, question, answers } = journeySteps[currentStep];

  return (
    <>
      <Heading text={chapter} title={title} />
      <HeroBanner question={question} chapter={chapter} />
      <div className="flex flex-col items-center justify-center mt-16">
        <div className="flex justify-center items-center">
          <Choice answers={answers} handleNextStep={handleNextStep} />
        </div>
      </div>
    </>
  );
};
