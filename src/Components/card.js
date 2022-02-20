import { React } from "react";

export const card = ({ pokeData }) => {
  return (
    <div className="card" key={pokeData.id}>
      <div className="cardTopThird"></div>
      <div className="cardMiddleThird"></div>
      <div className="cardBottomThird"></div>
    </div>
  );
};
