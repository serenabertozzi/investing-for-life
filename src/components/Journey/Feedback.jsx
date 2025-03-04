import React, { useEffect } from "react";
import { Heading } from "./Heading";
import { Footer } from "../Footer";
import { journeySteps, endings } from "../../steps";
import { useLocation, useNavigate } from "react-router-dom";
import { usePoints } from '../../hooks/usePoints';
import useSound from 'use-sound';
import win from '../../assets/win.mp3';
import lose from '../../assets/lose.mp3';

import guru from '../../assets/endings/guru.png';
import balance from '../../assets/endings/balance.png';
import learning from '../../assets/endings/learning.png';
import piggy from '../../assets/endings/piggy.png';
import broke from '../../assets/endings/broke.png';

import room from '../../assets/backgrounds/room.png';
import bank from '../../assets/backgrounds/bank.png';
import edinburgh from '../../assets/backgrounds/edinburgh.png';
import leeds from '../../assets/backgrounds/leeds.png';
import london from '../../assets/backgrounds/london.png';
import town from '../../assets/backgrounds/town.png';
import crying from '../../assets/emotions/crying.png';

export const Feedback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, step, outcome, lesson, tip, linkText, url, points, add, image } = location.state;
  const { totalPoints } = usePoints();

  const handleNextStep = () => {
    if (step + 1 < journeySteps.length) {
      navigate('/journey', { state: { step: step + 1 } });
    } else {
      navigate('/');
    }
  };

  const [playWin] = useSound(win);
  const [playLose] = useSound(lose);

  useEffect(() => {
    add ? playWin() : playLose();
  }, [add, playWin, playLose]);

  const calculateEndings = (totalPoints) => {
    switch (true) {
      case totalPoints >= 100:
        return { ...endings[0], icon: guru };
      case totalPoints >= 80:
        return { ...endings[1], icon: balance };
      case totalPoints >= 50:
        return { ...endings[2], icon: learning };
      case totalPoints >= 20:
        return { ...endings[3], icon: piggy };
      default:
        return { ...endings[4], icon: broke };
    }
  };

  const isLastStep = step === journeySteps.length - 1;
  const ending = isLastStep ? calculateEndings(totalPoints) : null;

  const chapter = journeySteps[step].chapter;

  const winOrLose = add ? `🎉 You have gained ${points} SW Coins!` : `😢 You lost  ${points} SW Coins!`;
  const displayImage = add ? image : crying;

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
        <img src={displayImage} alt="Feedback Emotion" className="w-24 h-24 fade-in" />
        <div className="flex flex-col items-center bg-white w-[50%] rounded-lg p-8 gap-4">
          <p className="text-2xl font-semibold">{winOrLose}</p>
          <h3 className="text-2xl font-semibold">{`🔹 ${outcome}`}</h3>
          {lesson && <p className="text-lg">{`💡  ${lesson}`}</p>}
          <span className="flex items-center gap-1">
            {tip && <p className="text-lg">{`📖  ${tip}`}</p>}
            {url && linkText && (
              <a className="font-bold text-lg" href={url} target="_blank" rel="noopener noreferrer">
                {linkText}
              </a>
            )}
          </span>
          <button
            className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold"
            onClick={handleNextStep}
          >
            {isLastStep ? "Play Again" : "Next Step"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};