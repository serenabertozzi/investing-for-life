import React from "react";
import useCharacter from "../../hooks/useCharacter";
import city from '../../assets/backgrounds/city.png';
import wood from '../../assets/backgrounds/wood.png';
import room from '../../assets/backgrounds/room.png';

export const HeroBanner = ({ question, chapter }) => {
  const { selectedAvatar } = useCharacter();

  const chooseBackground = () => {
    if (chapter === "Chapter 1") {
      return { backgroundImage: `url(${room})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 };
    } else if (chapter === "Chapter 2") {
      return { backgroundImage: `url(${wood})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.6 };
    } else {
      return { backgroundImage: `url(${city})`, backgroundSize: 'cover', backgroundPosition: 'bottom', opacity: 0.6 };
    }
  }

  return (
    <div className="relative w-full h-[20rem]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ ...chooseBackground() }}
      ></div>
      <div className="relative flex justify-center pt-10">
        <h2 className=" bg-white rounded-full p-4 text-dark-green font-semibold text-2xl mb-10">{question}</h2>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px]">
        <img className="w-[200px] h-[200px]" src={selectedAvatar} alt="Avatar" />
      </div>
    </div>
  );
};
