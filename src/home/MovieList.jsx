import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://dummyapi.online/api/movies");
        setMovies(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Error fetching movies");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = "./media/placeholder_img.avif";
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movies Database</h1>
      <div className="movie-list">
        {loading && <div>Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={movie.image}
              alt={movie.movie}
              onError={handleImageError}
            />
            <h3>{movie.movie}</h3>
            <p>Rating: {movie.rating}</p>
            <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
              View on IMDb
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
