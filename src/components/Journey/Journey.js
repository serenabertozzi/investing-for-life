import React from "react";
import { Heading } from "./Heading";
import { Question } from "./Question";
import { useNavigate } from "react-router-dom";

export const Journey = () => {
  const text = "Chapter 1";
  const question = "Question 1";
  const a1 = "answer 1";
  const a2 = "answer 2";
  const a3 = "answer 3";

  return (
    <>
      <Heading text={text} />
      <Question question={question} a1={a1} a2={a2} a3={a3} />
    </>
  );
};
