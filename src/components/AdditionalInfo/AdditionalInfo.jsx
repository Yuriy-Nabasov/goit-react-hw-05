import { NavLink } from "react-router";
import css from "./AdditionalInfo.module.css";

export default function AdditionalInfo() {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Additional information</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul>
    </div>
  );
}
