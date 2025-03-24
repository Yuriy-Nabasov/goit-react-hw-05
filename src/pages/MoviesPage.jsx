import { useEffect, useState } from "react";
import { fetchMovies } from "../articleService";
import { useSearchParams } from "react-router";
import { useDebounce } from "use-debounce";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import ErrorMassage from "../components/ErrorMessage/ErrorMessage";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get(`query`) ?? ``;
  const [debounceQuery] = useDebounce(query, 1000);

  const changeSearchText = (event) => {
    const nextParams = new URLSearchParams(searchParams);
    if (event.target.value !== "") {
      nextParams.set(`query`, event.target.value);
    } else {
      nextParams.delete(`query`);
    }
    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMovies(debounceQuery);
        setMovies(data);
      } catch {
        console.log(`error!`);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovies();
  }, [debounceQuery]);
  return (
    <div>
      <input type="text" value={query} onChange={changeSearchText}></input>
      {isLoading && <Loader />}
      {error && <ErrorMassage />}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
