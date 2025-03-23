import { useEffect, useState } from "react";
import { fetchTrandingMovies } from "../articleService";
import MovieList from "../components/MovieList/MovieList";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchTrandingMovies();
        setMovies(data);
      } catch {
        // console.log(`error!`);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);
  return (
    <div>
      {/* <h2>Tranding today</h2> */}
      {isLoading && <b>Loading info...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
