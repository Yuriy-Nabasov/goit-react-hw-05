import { Suspense, useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router";
import { fetchMoviesDetails } from "../articleService";
import MovieInfo from "../components/MovieInfo/MovieInfo";
import { useRef } from "react";
import Loader from "../components/Loader/Loader";
import ErrorMassage from "../components/ErrorMessage/ErrorMessage";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

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

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      {isLoading && <Loader />}
      {error && <ErrorMassage />}
      {movie && <MovieInfo movie={movie} />}
      <AdditionalInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
