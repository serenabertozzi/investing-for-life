import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export const Typewriter = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const isFullStop = text[index] === '.';
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, isFullStop ? 500 : 55); 
      return () => clearTimeout(timeoutId);
    } else {
      onComplete();
    }
  }, [index, text, onComplete]);

  return <div className="typewriter-box text-dark-green font-bold text-2xl" style={{ fontFamily: 'Rubik, sans-serif' }}>{displayedText}</div>;
};

export const Intro = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  const fullText = `You did it! After years of studying, you’ve landed your first full-time job, and life is finally beginning 🚀.

And now, the moment you’ve been waiting for, your first paycheck has just dropped into your bank account 💸. 

You now have a choice to make... you could save it, invest it, or finally treat yourself. 

 ❗But hold on, this is just the beginning. Every financial decision you make today will shape your future. 

Will you play it safe, take risks, or find the perfect balance?`;

  return (
    <div className="box">
      <Typewriter text={fullText} onComplete={() => setShowButton(true)} />
      {showButton && (
        <button
          className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold center-button mt-10"
          onClick={() => navigate("/journey")}
        >
          Let's find out...
        </button>
      )}
    </div>
  );
};
