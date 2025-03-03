import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Question = ({ question, a1, a2, a3 }) => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (selectedValue) => {
    const inputValue = selectedValue;
    navigate("/feedback", { state: inputValue });
  };

  return (
    <>
      <div>
        <h3>{question}</h3>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedValue === "option1"}
            onChange={handleChange}
          />
          {a1}
        </label>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedValue === "option2"}
            onChange={handleChange}
          />
          {a2}
        </label>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedValue === "option3"}
            onChange={handleChange}
          />
          {a3}
        </label>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
        <p>Selected: {selectedValue}</p>
      </div>
    </>
  );
};
