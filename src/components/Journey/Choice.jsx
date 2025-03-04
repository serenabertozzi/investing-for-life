import React from "react";

export const Choice = ({ answers, handleNextStep }) => {
  const handleChoice = (answer) => {
    handleNextStep({
      heading: answer.heading,
      text: answer.text,
      points: answer.points,
      add: answer.add,
      feedback: answer.feedback,
      image: answer.image, 
    });
  };

  return (
    <>
      {answers.map((answer, index) => (
        <button
          className="bg-white rounded-full text-dark-green p-6 m-4"
          key={index}
          onClick={() => handleChoice(answer)}
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl">{answer.emoji}</div>
            <h3 className="text-xl font-semibold">{answer.heading}</h3>
            <p>{answer.text}</p>
          </div>
        </button>
      ))}
    </>
  );
};