import { Action } from "redux";

export interface StarShipsDataResponse {
  results: StarShipsData[];
}

export interface StarShipsData {
  name: string;
  model: string;
  manufacturer: string;
  crew: number;
}

export interface StarShipDataPayload {
  starShipsData: StarShipsDataResponse;
}

export interface GetStarShipsSuccessAction extends Action {
  type: string;
  payload: StarShipDataPayload;
}
