import React, { useState, useEffect } from 'react';
import { useCharacter } from "../../hooks/useCharacter";
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

// export const Intro = () => {
//   const navigate = useNavigate();
//   const [showButton, setShowButton] = useState(false);
//   const [skip, setSkip] = useState(false);

//   const { selectedAvatar } = useCharacter();
  
//   useEffect(() => {
//     return () => {
//       setSkip(false);
//     };
//   }, []);

//   const handleSkip = () => {
//     setSkip(true);
//     setShowButton(true);
//   }

//   const fullText = `You did it! After years of studying, you’ve landed your first full-time job, and life is finally beginning 🚀.

//     And now, the moment you’ve been waiting for, your first paycheck has just dropped into your bank account 💸. 

//     You now have a choice to make... you could save it, invest it, or finally treat yourself. 

//     ❗But hold on, this is just the beginning. Every financial decision you make today will shape your future. 

//     Will you play it safe, take risks, or find the perfect balance?`;

//   return (
    
//     <div className='flex flex-col items-center mt-10'>
//         <img className="w-[80px] h-[80px]" src={selectedAvatar} alt="Avatar" /> 

//     <div className="box height-screen mb-8 w-[100%]">
//       {!skip && <button onClick={() => handleSkip()} 
//       className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold absolute bottom-[90px] left-1/2 transform -translate-x-1/2">
//         Fast Forward
//       </button>
//       }  

//       {skip ? (<><div className="typewriter-box text-dark-green font-bold text-2xl" style={{ fontFamily: 'Rubik, sans-serif' }}>{fullText}</div></>) : 
//       (<Typewriter text={fullText} onComplete={() => setShowButton(true)} />)}
        
//       {showButton && (
//         <button
//           className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold center-button mt-4"
//           onClick={() => navigate("/journey")}
//         >
//           Let's find out...
//         </button>
//       )}
//     </div>
//     </div>
//   );
// };

export const Intro = () => {
  const { selectedAvatar } = useCharacter();
  const navigate = useNavigate();
  const [skip, setSkip] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showFastForward, setShowFastForward] = useState(true);

  const handleSkip = () => {
    setSkip(true);
    setShowButton(true);
    setShowFastForward(false);
  };

  const handleTypewriterComplete = () => {
    setShowButton(true);
    setShowFastForward(false);
  };

  const fullText = `You did it! After years of studying, you’ve landed your first full-time job, and life is finally beginning 🚀.

    And now, the moment you’ve been waiting for, your first paycheck has just dropped into your bank account 💸. 

    You now have a choice to make... you could save it, invest it, or finally treat yourself. 

    ❗But hold on, this is just the beginning. Every financial decision you make today will shape your future. 

    Will you play it safe, take risks, or find the perfect balance?`;

  return (
    <div className='flex flex-col items-center mt-10'>
      <img className="w-[80px] h-[80px]" src={selectedAvatar} alt="Avatar" /> 
      {showFastForward && (
          <button
            onClick={() => handleSkip()}
            className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold absolute bottom-[120px] left-1/2 transform -translate-x-1/2"
          >
            Fast Forward
          </button>
        )}


      <div className="box height-screen mb-8 w-[100%] relative">
 
        {skip ? (
          <div className="typewriter-box text-dark-green font-bold text-2xl" style={{ fontFamily: 'Rubik, sans-serif' }}>
            {fullText}
          </div>
        ) : (
          <Typewriter text={fullText} onComplete={handleTypewriterComplete} />
        )}

        {showButton && (
          <button
            className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold center-button mt-4"
            onClick={() => navigate("/journey")}
          >
            Let's find out...
          </button>
        )}
      </div>
    </div>
  );
};
