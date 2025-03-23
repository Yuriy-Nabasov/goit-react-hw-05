import { useEffect, useState } from "react";
import { useParams, NavLink, Outlet } from "react-router";
import { fetchMoviesDetails } from "../articleService";
import MovieInfo from "../components/MovieInfo/MovieInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMoviesDetails(movieId);
        setMovie(data);
      } catch {
        console.log(`error!`);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getMovie();
  }, [movieId]);
  // console.log(params);
  return (
    <div>
      {isLoading && <b>Loading info...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}
      {movie && <MovieInfo movie={movie} />}
      {/* This is MovieDetailsPage - {movieId} */}
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
