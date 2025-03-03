import React from "react";
import { useCharacter } from "../../hooks/useCharacter";


export const Heading = ({ text, title }) => {

  const { selectedAvatar } = useCharacter();

  return (<>
  
<div className="flex items-center w-full bg-dark-green h-[10rem]">
<img className="w-[100px] h-[100px] ml-5" src={selectedAvatar} alt="Avatar" />
<div className="w-full flex flex-col items-center justify-center pt-6">
<h1 className="text-white font-semibold text-5xl">{text}</h1>
<h2 className="text-white text-2xl mt-3">{title}</h2>
</div>
      </div>
  </>);
};
