import { useNavigate } from "react-router-dom";
import girlCherry from '../assets/girl-cherry.png';
import girlFlower from '../assets/girl-flower.png';
import bee from '../assets/bee.png';
import sheep from '../assets/sheep.png';
import boy from '../assets/boy.png';
import mushroom from '../assets/mushroom.png';

import useCharacter from "../hooks/useCharacter";

export const Home = () => {
  const navigate = useNavigate();
  const { selectedAvatar, setSelectedAvatar } = useCharacter();

  return (
    <div className="flex flex-col items-center gap-12 justify-center h-screen">
      <hi>Investing for life</hi>
      <h2>Choose your avatar: </h2>
      {selectedAvatar && <p className="underline">{selectedAvatar}</p>}
      <div className="flex gap-8">
        <img style={{ width: "100px" }} src={girlFlower} alt="girlFlower" onClick={() => setSelectedAvatar(girlFlower)} />
        <img style={{ width: "100px" }} src={girlCherry} alt="girlCherry" onClick={() => setSelectedAvatar(girlCherry)} />
        <img style={{ width: "100px" }} src={bee} alt="bee" onClick={() => setSelectedAvatar(bee)} />
        <img style={{ width: "100px" }} src={sheep} alt="sheep" onClick={() => setSelectedAvatar(sheep)} />
        <img style={{ width: "100px" }} src={boy} alt="boy" onClick={() => setSelectedAvatar(boy)} />
        <img style={{ width: "100px" }} src={mushroom} alt="mushroom" onClick={() => setSelectedAvatar(mushroom)} />
      </div>
      <button onClick={() => navigate("/quiz")}>Start Quiz</button>
    </div>
  );
};
