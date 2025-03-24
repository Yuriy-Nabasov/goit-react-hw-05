import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMoviesCredits } from "../../articleService";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMessage/ErrorMessage";
import css from "./MovieCast.module.css";
import ActorInfo from "../ActorInfo/ActorInfo";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const photo = "https://image.tmdb.org/t/p/w500";
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  useEffect(() => {
    async function getCast() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMoviesCredits(movieId);
        setCast(data);
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
      {isLoading && <Loader />}
      {error && <ErrorMassage />}

      {!cast.length && (
        <h3 className={css.title}>
          Sorry, we don't have any cast information for this movie.
        </h3>
      )}
      {cast.length > 0 &&
        cast.map((actor) => (
          <div key={actor.id} className={css.container}>
            <img
              src={
                actor.profile_path
                  ? `${photo}${actor.profile_path}`
                  : defaultImg
              }
              alt={actor.name}
              className={css.poster}
            />
            <div className={css.info}>
              <h3 className={css.name}>{actor.name}</h3>
              <p className={css.detail}>
                Character: <br />
                <strong>{actor.character}</strong>
              </p>
              <ActorInfo actorName={actor.name} />
            </div>
          </div>
        ))}
    </div>
  );
}
