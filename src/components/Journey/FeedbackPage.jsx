import React from "react";
import { Heading } from "./Heading";
import { useLocation } from "react-router-dom";

export const FeedbackPage = () => {
  const location = useLocation();
  const { inputValue } = location.state;
  // const text = "Chapter 1";
  const feedback = {
    option1: "option 1 text",
    option2: "option 2 text",
    option3: "option 3 text",
  };

  const text = "Chapter 1";

  return (
    <>
      <Heading text={text} />
      {feedback[inputValue]}
    </>
  );
};
