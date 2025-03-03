import React from "react";
import { Heading } from "./Heading";
import { useLocation } from "react-router-dom";

export const FeedbackPage = () => {
  const location = useLocation();
  const { inputValue } = location.state;
  // const text = "Chapter 1";
  return <Heading text={inputValue} />;
};
