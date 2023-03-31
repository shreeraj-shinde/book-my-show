import "./App.css";
//Routing
import { Routes, Route } from "react-router-dom";
//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Pages
import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page";
import Playspage from "./pages/Plays.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movies/:id" element={<Moviepage />} />
      <Route path="/plays" element={<Playspage />} />
    </Routes>
  );
}

export default App;
