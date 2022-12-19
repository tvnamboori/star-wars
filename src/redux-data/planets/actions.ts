import { PlanetsDataResponse, GetPlanetSuccessAction } from "./types";

export const getPlanets = () => {
  return {
    type: "GET_PLANETS",
  };
};

export const getPlanetsSuccess = (
  planetsData: PlanetsDataResponse
): GetPlanetSuccessAction => {
  return {
    type: "GET_PLANETS_SUCCESS",
    payload: { planetsData },
  };
};
