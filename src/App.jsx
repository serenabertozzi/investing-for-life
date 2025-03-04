import "./App.css";
import { Home } from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/quiz";
import { CharacterAvatarProvider } from "./context/CharacterAvatarContext";
import { PointsProvider } from "./context/PointsContext";
import { Journey } from "./components/Journey/Journey";
import { Feedback } from "./components/Journey/Feedback";

export const App = () => {
  return (
    <PointsProvider>
    <CharacterAvatarProvider>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/quiz"} element={<Quiz />} />
          <Route path={"/journey"} element={<Journey />} />
          <Route path={"/feedback"} element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </CharacterAvatarProvider>
    </PointsProvider>

  );
};
