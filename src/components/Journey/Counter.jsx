import React from "react";
import star from '../../assets/star.png';
import { usePoints } from '../../hooks/usePoints';

export const Counter = () => {

  const { totalPoints } = usePoints();

  // eslint-disable-next-line

  return (
          <div style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            borderRadius: "25px",
            backgroundColor: "#f0f0f0",
            boxShadow: "0 4px 8px #fbfbfb"
          }}>
            <img style={{ width: "50px" }} src={star} alt="star" />
            <p style={{ marginLeft: "20px" }}>{totalPoints}</p>
          </div>
          )
};
