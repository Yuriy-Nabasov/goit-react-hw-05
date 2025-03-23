import { useEffect, useState } from "react";
import { fetchMovies } from "../articleService";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies();
        setMovies(data);
      } catch {
        console.log(`error!`);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <div>
      <h2>This is MoviesPage</h2>
      {isLoading && <b>Loading info...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}
      {/* {movies.length > 0 && <UserList movies={movies} />} */}
      {/* {movies.length > 0 && <p>Movies</p>} */}
    </div>
  );
}
