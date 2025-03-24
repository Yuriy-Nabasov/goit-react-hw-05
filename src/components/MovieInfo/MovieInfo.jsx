import css from "./MovieInfo.module.css";

export default function MovieInfo({ movie }) {
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  const moviePath = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  const movieGanres = movie.genres.map((genre) => genre.name);
  return (
    <div className={css.container}>
      <img
        src={moviePath ? moviePath : defaultImg}
        alt={movie.title}
        className={css.poster}
      />
      <div className={css.info}>
        <h2 className={css.name}>{movie.title}</h2>
        {movie.tagline && (
          <p className={css.detail}>
            <strong>Tagline: </strong>
            {movie.tagline}
          </p>
        )}
        {movie.vote_average !== 0 && (
          <p className={css.detail}>
            <strong>User score: </strong>
            {(parseFloat(movie.vote_average) * 10).toFixed(2)}%
          </p>
        )}
        <p className={css.detail}>
          <strong>Overview: </strong>
          {movie.overview}
        </p>
        <p className={css.detail}>
          <strong>Genres: </strong>
          {movieGanres.join(` `)}
        </p>
      </div>
    </div>
  );
}
