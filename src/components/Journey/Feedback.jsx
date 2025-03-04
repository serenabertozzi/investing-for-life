import React from "react";
import { Heading } from "./Heading";
import { journeySteps } from "../../steps";
import { useLocation, useNavigate } from "react-router-dom";
import room from '../../assets/backgrounds/room.png';
import bank from '../../assets/backgrounds/bank.png';
import edinburgh from '../../assets/backgrounds/edinburgh.png';
import leeds from '../../assets/backgrounds/leeds.png';
import london from '../../assets/backgrounds/london.png';
import town from '../../assets/backgrounds/town.png';

export const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, step, outcome, lesson, tip, linkText, url, points, add, image } = location.state;

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

  const chapter = journeySteps[step].chapter;

  const winOrLose = add ? `🎉 You have gained ${points} SW Coins!` : `😢 You lost  ${points} SW Coins!`;

  const chooseBackground = () => {
    switch (chapter) {
      case "Chapter 1":
        return { backgroundImage: `url(${room})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 };
      case "Chapter 2":
        return { backgroundImage: `url(${bank})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 };
      case "Chapter 3":
        return { backgroundImage: `url(${edinburgh})`, backgroundSize: 'cover', backgroundPosition: 'bottom', opacity: 0.6 };
      case "Chapter 4":
        return { backgroundImage: `url(${leeds})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 };
      case "Chapter 5":
        return { backgroundImage: `url(${london})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 };
      default:
        return { backgroundImage: `url(${town})`, backgroundSize: 'cover', backgroundPosition: 'bottom', opacity: 0.6 };
    }
  };

  return (
    <>
      <Heading text={title} />
      <div className="absolute inset-0 bg-cover bg-center h-[50rem] z-[-1]" style={chooseBackground()}></div>
      <div className="flex flex-col items-center gap-12 justify-center h-screen">
        <img src={image} alt="Feedback Emotion" className="w-24 h-24" />
        <div className="flex flex-col items-center bg-white w-[50%] rounded-lg p-8 gap-4">
          <p className="text-2xl font-semibold">{winOrLose}</p>
          <h3 className="text-2xl font-semibold">{`🔹 ${outcome}`}</h3>
          <p className="text-lg">{`💡  ${lesson}`}</p>
          <span className="flex items-center gap-1">
            <p className="text-lg ">{`📖  ${tip}`}</p>
            <a className="font-bold text-lg" href={url}>{linkText}</a>
          </span>
          <button
            className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold"
            onClick={handleNextStep}
          >
            {isLastStep ? "Play Again" : "Next Step"}
          </button>
        </div>
      </div>
    </>
  );
};