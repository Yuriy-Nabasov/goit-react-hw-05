import axios from "axios";

// Запит на актуальні (трендові) фільми
export const fetchTrandingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

  const options = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs`,
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch {
    console.log(`fetchTrandingMovies - Error!`);
  }
};

// Запит на загальні деталі обраного фільму
export const fetchMoviesDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;

  const options = {
    params: { language: "en-US" },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch {
    console.log(`fetchMoviesDetails - Error!`);
  }
};

// Запит на акторський склад обраного фільму
export const fetchMoviesCredits = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const options = {
    params: { language: "en-US" },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch {
    console.log(`fetchMoviesCredits - Error!`);
  }
};

// Запит на огляди обраного фільму
export const fetchMoviesReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const options = {
    params: { language: "en-US" },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch {
    console.log(`fetchMoviesReviews - Error!`);
  }
};

// Запит на пошук фільмів за назвою
export const fetchMovies = async (calledMovie) => {
  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`;

  const options = {
    params: { query: `${calledMovie}` },
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs`,
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch {
    console.log(`fetchMovies - Error!`);
  }
};
