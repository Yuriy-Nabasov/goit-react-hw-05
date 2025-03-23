import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
// import { Analytics } from "@vercel/analytics/react";

import "./App.css";
import Navigation from "../Navigation/Navigation";
import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import NotFoundPage from "../../pages/NotFoundPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage";
import MovieReviews from "../MovieReviews/MovieReviews";
import MovieCast from "../MovieCast/MovieCast";

export default function App() {
  return (
    <Section>
      <Container>
        <Heading title="Search films on the TMDB" bottom tag={`h1`} />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} /> */}
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <Analytics /> */}
      </Container>
    </Section>
  );
}
