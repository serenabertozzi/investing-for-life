import { useNavigate } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";
import { usePoints } from "../hooks/usePoints";
import girlCherry from "../assets/avatars/girl-cherry.png";
import girlFlower from "../assets/avatars/girl-flower.png";
import bee from "../assets/avatars/bee.png";
import sheep from "../assets/avatars/sheep.png";
import boy from "../assets/avatars/boy.png";
import mushroom from "../assets/avatars/mushroom.png";
// import swLogo from "../assets/swlogo.png";
import { useEffect, useState } from "react";

export const Home = () => {
  const navigate = useNavigate();
  const { setSelectedAvatar } = useCharacter();
  const { setTotalPoints } = usePoints();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleAvatarClick = (avatar) => {
    setSelectedAvatar(avatar);
    setSelectedCharacter(avatar);
  };

  useEffect(() => {
    setTotalPoints(0);
  }, [setTotalPoints]);

  return (
    <div className="flex flex-col items-center gap-10 justify-center h-screen">
      <div className="flex flex-col items-center gap-4">
        {/* <img className="w-56" src={swLogo} alt="SW Logo" /> */}
        <h1 className="text-dark-green font-semibold text-6xl">
          Investing for Life
        </h1>
      </div>
      <h2 className="text-dark-green font-bold text-2xl">
        Choose your avatar:
      </h2>
      <div className="flex gap-20 bg-white rounded-full p-8">
        <img
          className={`avatar ${selectedCharacter === girlFlower ? 'selected' : ''}`}
          src={girlFlower}
          alt="girlFlower"
          role="button"
          onClick={() => handleAvatarClick(girlFlower)}
        />
        <img
          className={`avatar ${selectedCharacter === girlCherry ? 'selected' : ''}`}
          src={girlCherry}
          alt="girlCherry"
          role="button"
          onClick={() => handleAvatarClick(girlCherry)}
        />
        <img
          className={`avatar ${selectedCharacter === bee ? 'selected' : ''}`}
          src={bee}
          alt="bee"
          role="button"
          onClick={() => handleAvatarClick(bee)}
        />
        <img
          className={`avatar ${selectedCharacter === sheep ? 'selected' : ''}`}
          src={sheep}
          alt="sheep"
          role="button"
          onClick={() => handleAvatarClick(sheep)}
        />
        <img
          className={`avatar ${selectedCharacter === boy ? 'selected' : ''}`}
          src={boy}
          alt="boy"
          role="button"
          onClick={() => handleAvatarClick(boy)}
        />
        <img
          className={`avatar ${selectedCharacter === mushroom ? 'selected' : ''}`}
          src={mushroom}
          alt="mushroom"
          role="button"
          onClick={() => handleAvatarClick(mushroom)}
        />
      </div>
      <button
        className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold"
        onClick={() => navigate("/intro")}
      >
        Start Here
      </button>
    </div>
  );
};
