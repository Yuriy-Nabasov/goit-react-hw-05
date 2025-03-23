import css from "./MovieInfo.module.css";

export default function MovieInfo({ movie }) {
  // console.log(movie.poster_path);
  const moviePath = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
  // console.log(moviePath);
  const movieGanres = movie.genres.map((genre) => genre.name);
  // console.log(movieGanres);
  return (
    <div className={css.container}>
      <img
        // src="https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg"
        src={moviePath}
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
