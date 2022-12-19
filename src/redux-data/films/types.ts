import { Action } from "redux";

export interface FilmsDataResponse {
  results: FilmsData[];
}

export interface FilmsData {
  title: string;
  director: string;
  episode_id: number;
  opening_crawl: string;
  producer: string;
}

export interface FilmDataPayload {
  filmsData: FilmsDataResponse;
}

export interface GetFilmSuccessAction extends Action {
  type: string;
  payload: FilmDataPayload;
}
