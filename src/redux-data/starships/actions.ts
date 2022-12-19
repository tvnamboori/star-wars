import { StarShipsDataResponse, GetStarShipsSuccessAction } from "./types";

export const getStarShips = () => {
  return {
    type: "GET_STAR_SHIPS",
  };
};

export const getStarShipSuccess = (
  starShipsData: StarShipsDataResponse
): GetStarShipsSuccessAction => {
  return {
    type: "GET_STAR_SHIPS_SUCCESS",
    payload: { starShipsData },
  };
};
