import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMoviesReviews } from "../../articleService";
import Loader from "../Loader/Loader";
import ErrorMassage from "../ErrorMessage/ErrorMessage";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchMoviesReviews(movieId);
        setReviews(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getReviews();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMassage />}
      {!reviews.length && <h3>We don't have any reviews for this movie.</h3>}
      {reviews.length > 0 &&
        reviews.map((review) => (
          <div key={review.id} className={css.info}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
            <br />
          </div>
        ))}
    </div>
  );
}
