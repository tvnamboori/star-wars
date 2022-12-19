import { Action } from "redux";

export interface VehiclesDataResponse {
  results: VehiclesData[];
}

export interface VehiclesData {
  name: string;
  model: string;
  manufacturer: string;
  crew: number;
}

export interface VehicleDataPayload {
  vehiclesData: VehiclesDataResponse;
}

export interface GetVehicleSuccessAction extends Action {
  type: string;
  payload: VehicleDataPayload;
}
