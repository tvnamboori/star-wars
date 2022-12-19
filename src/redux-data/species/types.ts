import { Action } from "redux";

export interface SpeciesDataResponse {
  results: SpeciesData[];
}

export interface SpeciesData {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
}

export interface SpeciesDataPayload {
  speciesData: SpeciesDataResponse;
}

export interface GetSpeciesSuccessAction extends Action {
  type: string;
  payload: SpeciesDataPayload;
}
