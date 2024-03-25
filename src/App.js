import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllMovies from "./Components/AllMovies";
import MyList from "./Components/MyList";
import Homepage from "./Components/Homepage";
import Movies from "./Components/Movies";
import TvShows from "./Components/TvShows";
import MoviesInfo from "./Components/MoviesInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-movies" element={<AllMovies />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movies-info/:id" element={<MoviesInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
