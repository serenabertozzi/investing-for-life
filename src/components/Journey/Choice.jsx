export const Choice = ({ answers, handleNextStep }) => {
  return (
    <>
      {answers.map((answer, index) => (
        <button
          className="bg-white rounded-full text-dark-green p-6 m-4"
          key={index}
          onClick={() => handleNextStep({ heading: answer.heading, text: answer.text })}
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
