import axios from "axios";

export const fetchMovies = async () => {
  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      // Ключ API 712a108976118fd5a10bb387beb68083
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs`,
    },
  };

  const response = await axios
    .get(url, options)
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return response;
};

export const fetchTrandingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;

  const options = {
    headers: {
      // Замість api_read_access_token вставте свій токен
      // Ключ API 712a108976118fd5a10bb387beb68083
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs`,
    },
  };
  try {
    const response = await axios.get(url, options);
    // console.log(response.data.results);
    // .then((response) => console.log(response.data.results))
    // .catch((err) => console.error(err));
    return response.data.results;
  } catch {
    console.log(`Error!`);
  }
};

export const fetchMoviesDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`;

  const options = {
    // method: "GET",
    // url: "https://api.themoviedb.org/3/movie/movie_id",
    params: { language: "en-US" },
    headers: {
      // accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs",
    },
  };
  try {
    const response = await axios.get(url, options);
    // console.log(response.data);
    // .then((response) => console.log(response.data.results))
    // .catch((err) => console.error(err));
    return response.data;
  } catch {
    console.log(`Error!`);
  }
};

export const fetchMoviesCredits = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;

  const options = {
    // method: "GET",
    // url: "https://api.themoviedb.org/3/movie/movie_id",
    params: { language: "en-US" },
    headers: {
      // accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs",
    },
  };
  try {
    const response = await axios.get(url, options);
    console.log(response.data.cast);
    // .then((response) => console.log(response.data.results))
    // .catch((err) => console.error(err));
    return response.data.cast;
  } catch {
    console.log(`Error!`);
  }
};

export const fetchMoviesReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;

  const options = {
    // method: "GET",
    // url: "https://api.themoviedb.org/3/movie/movie_id",
    params: { language: "en-US" },
    headers: {
      // accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTJhMTA4OTc2MTE4ZmQ1YTEwYmIzODdiZWI2ODA4MyIsIm5iZiI6MTc0MjQ5NTMyOC42MTUsInN1YiI6IjY3ZGM1ZTYwZDY3ZDdkYzNjODZiYTE5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nYBU2D9MUm_bb7oL-EmgTxLxxzx3QAzaLLjasVS1FZs",
    },
  };
  try {
    const response = await axios.get(url, options);
    // console.log(response.data.results);
    // .then((response) => console.log(response.data.results))
    // .catch((err) => console.error(err));
    return response.data.results;
  } catch {
    console.log(`Error!`);
  }
};
