import "./App.css";
import { Home } from "./components/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/quiz";
import { CharacterAvatarProvider } from "./context/CharacterAvatarContext";
import { PointsProvider } from "./context/PointsContext";
import { Journey } from "./components/Journey/Journey";
import { Feedback } from "./components/Journey/Feedback";
import { Intro } from "./components/Journey/Intro";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <PointsProvider>
      <CharacterAvatarProvider>
        <HashRouter>
          <div className="flex flex-col min-h-screen">
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/intro"} element={<Intro />} />
              <Route path={"/quiz"} element={<Quiz />} />
              <Route path={"/journey"} element={<Journey />} />
              <Route path={"/feedback"} element={<Feedback />} />
            </Routes>
            <Footer />
          </div>
        </HashRouter>
      </CharacterAvatarProvider>
    </PointsProvider>
  );
};
