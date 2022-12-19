import { GetVehicleSuccessAction, VehiclesDataResponse } from "./types";

export const getVehicles = () => {
  return {
    type: "GET_VEHICLES",
  };
};

export const getVehiclesSuccess = (
  vehiclesData: VehiclesDataResponse
): GetVehicleSuccessAction => {
  return {
    type: "GET_VEHICLES_SUCCESS",
    payload: { vehiclesData },
  };
};
