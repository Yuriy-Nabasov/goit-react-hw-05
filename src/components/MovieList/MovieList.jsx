import { Link } from "react-router";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <>
      <h2 className={css.title}>Tranding today</h2>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.listItem}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            {/* <p>{movie.title}</p> */}
          </li>
        ))}
      </ul>
    </>
  );
}
