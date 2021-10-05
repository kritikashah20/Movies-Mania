import { GET, apiKey } from "../config/apiConfig";


export const getMoviesList = (searchStr) => {
  return GET(`/?s=${searchStr}&apikey=${apiKey}`);
};
