import "./App.css";
import { Landing } from "./pages/landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Quiz } from "./pages/quiz";
import { Journey } from "./components/Journey/Journey";
import { FeedbackPage } from "./components/Journey/FeedbackPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Landing />} />
        <Route path={"/quiz"} element={<Quiz />} />
        <Route path={"/journey"} element={<Journey />} />
        <Route path={"/feedback"} element={<FeedbackPage />} />
      </Routes>
    </BrowserRouter>
  );
};
