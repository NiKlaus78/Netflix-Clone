import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(url);
  //       setMovies(response.movies);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, [url]);

  useEffect(() => {
    axios.get(url).then((res) => setMovies(res.data))
  }, [url])
  return movies;
}

export default UseFetch;
