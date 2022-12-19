import { FilmsDataResponse, GetFilmSuccessAction } from "./types";

export const getFilms = () => {
  return {
    type: "GET_FILMS",
  };
};

export const getFilmSuccess = (
  filmsData: FilmsDataResponse
): GetFilmSuccessAction => {
  return {
    type: "GET_FILMS_SUCCESS",
    payload: { filmsData },
  };
};
