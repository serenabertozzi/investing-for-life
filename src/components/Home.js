import { useNavigate } from "react-router-dom";
import girlCherry from '../assets/avatars/girl-cherry.png';
import girlFlower from '../assets/avatars/girl-flower.png';
import bee from '../assets/avatars/bee.png';
import sheep from '../assets/avatars/sheep.png';
import boy from '../assets/avatars/boy.png';
import mushroom from '../assets/avatars/mushroom.png';

import useCharacter from "../hooks/useCharacter";

export const Home = () => {
  const navigate = useNavigate();
  const { selectedAvatar, setSelectedAvatar } = useCharacter();

  return (
    <div className="flex justify-center">
      <h1>Choose your avatar: </h1>
      {selectedAvatar && <p className="underline">{selectedAvatar}</p>}
      <div>
        <h2>Select Your Avatar</h2>
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
