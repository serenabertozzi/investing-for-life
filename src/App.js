import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/quiz";
import { CharacterAvatarProvider } from "./context/CharacterAvatarContext"; 

export const App = () => {
  return (
    <CharacterAvatarProvider> 
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/quiz"} element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </ CharacterAvatarProvider> 
  );
};
