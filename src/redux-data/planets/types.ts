import { Action } from "redux";

export interface PlanetsDataResponse {
  results: PlanetsData[];
}

export interface PlanetsData {
  name: string;
  rotation_period: string;
  orbital_period: string;
  climate: string;
}

export interface PlanetDataPayload {
  planetsData: PlanetsDataResponse;
}

export interface GetPlanetSuccessAction extends Action {
  type: string;
  payload: PlanetDataPayload;
}
