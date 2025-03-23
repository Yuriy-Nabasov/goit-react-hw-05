import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMoviesCredits } from "../../articleService";
import css from "./MovieCast.module.css";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const photo = "https://image.tmdb.org/t/p/w500";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMoviesCredits(movieId);
        setCast(data);
        // console.log(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, [movieId]);
  return (
    <div className={css.wrapper}>
      {/* <h3>CAST</h3> */}
      {isLoading && <b>Loading info...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}

      {cast.length > 0 &&
        cast.map((actor) => (
          <div key={actor.id} className={css.container}>
            <img
              src={`${photo}${actor.profile_path}`}
              alt={actor.name}
              className={css.poster}
            />
            <div className={css.info}>
              <h3 className={css.name}>{actor.name}</h3>
              <p className={css.detail}>Character: {actor.character}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
