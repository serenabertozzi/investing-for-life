import React from "react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <>
        <h1>Landing Page</h1>
        <h2>Did you know you can invest with as little as £1?</h2>
        <button>Yes, I know!</button>
        <button onClick={() => navigate("/quiz")}>No, tell me more</button>
      </>
    </>
  );
};
