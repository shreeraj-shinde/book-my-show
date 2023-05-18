import "./App.css";
//Routing
import { Routes, Route } from "react-router-dom";
//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//ENV File

//Pages
import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page";
import Playspage from "./pages/Plays.page";
import axios from "axios";
//config

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Moviepage />} />
      <Route path="/plays" element={<Playspage />} />
    </Routes>
  );
}

export default App;
