import React, { useState } from "react";
import star from '../../assets/star.png';


export const Counter = () => {

  const [points, setPoints] = useState(0);

  // eslint-disable-next-line
  const incrementPoints = (addedAmount) => {
    setPoints(points + addedAmount);
  }

  return (
    <>  
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            borderRadius: "25px",
            backgroundColor: "#f0f0f0",
            boxShadow: "0 4px 8px #fbfbfb"
          }}>
            <img style={{ width: "50px" }} src={star} alt="star" />
            <p style={{ marginLeft: "20px" }}>{points} points</p>
          </div>
        </div>
    </>
  );
};
