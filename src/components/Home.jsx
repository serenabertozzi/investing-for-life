import { useNavigate } from "react-router-dom";
import girlCherry from '../assets/avatars/girl-cherry.png';
import girlFlower from '../assets/avatars/girl-flower.png';
import bee from '../assets/avatars/bee.png';
import sheep from '../assets/avatars/sheep.png';
import boy from '../assets/avatars/boy.png';
import mushroom from '../assets/avatars/mushroom.png';
import swLogo from '../assets/swLogo.png';
import useCharacter from "../hooks/useCharacter";

export const Home = () => {
  const navigate = useNavigate();
  const {  setSelectedAvatar } = useCharacter();

  return (
    <div className="flex flex-col items-center gap-12 justify-center h-screen">
      <div className="flex flex-col items-center gap-4">     
        <img className="w-56" src={swLogo} alt="SW Logo" /> 
      <hi className="text-dark-green font-semibold text-6xl mb-10">Investing for life</hi></div>
      <h2 className="text-dark-green font-bold text-2xl">Choose your avatar: </h2>
      <div className="flex gap-20 bg-white rounded-full p-8">
        <img style={{ width: "100px" }} src={girlFlower} alt="girlFlower" onClick={() => setSelectedAvatar(girlFlower)} />
        <img style={{ width: "100px" }} src={girlCherry} alt="girlCherry" onClick={() => setSelectedAvatar(girlCherry)} />
        <img style={{ width: "100px" }} src={bee} alt="bee" onClick={() => setSelectedAvatar(bee)} />
        <img style={{ width: "100px" }} src={sheep} alt="sheep" onClick={() => setSelectedAvatar(sheep)} />
        <img style={{ width: "100px" }} src={boy} alt="boy" onClick={() => setSelectedAvatar(boy)} />
        <img style={{ width: "100px" }} src={mushroom} alt="mushroom" onClick={() => setSelectedAvatar(mushroom)} />
      </div>
      <button className="bg-[#0C333B] rounded-full text-white p-4 px-8 font-semibold" onClick={() => navigate("/journey")}>Start Quiz</button>
    </div>
  );
};
