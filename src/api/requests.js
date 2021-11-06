import { GET, apiKey } from "../config/apiConfig";


export const getMoviesList = (searchStr) => {
  return GET(`/?s=${searchStr}&apikey=${apiKey}`);
};

export const getMoviesListWithYear = (searchStr, searchYear) => {
  return GET(`/?s=${searchStr}&y=${searchYear}&apikey=${apiKey}`);
};


