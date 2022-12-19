import { SpeciesDataResponse, GetSpeciesSuccessAction } from "./types";

export const getSpecies = () => {
  return {
    type: "GET_SPECIES",
  };
};

export const getSpeciesSuccess = (
  speciesData: SpeciesDataResponse
): GetSpeciesSuccessAction => {
  return {
    type: "GET_SPECIES_SUCCESS",
    payload: { speciesData },
  };
};
