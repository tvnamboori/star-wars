import { Reducer } from "react";
import { State } from "./types";

export const initialState: State = {
  films: [],
  vehicles: [],
  starships: [],
  planets: [],
  species: [],
};

const reducer: Reducer<State, any> = (
  state: State = initialState,
  action: any
): State => {
  switch (action.type) {
    case "GET_FILMS_SUCCESS": {
      return {
        ...state,
        films: action.payload.filmsData.results,
      };
    }

    case "GET_VEHICLES_SUCCESS": {
      return {
        ...state,
        vehicles: action.payload.vehiclesData.results,
      };
    }

    case "GET_STAR_SHIPS_SUCCESS": {
      return {
        ...state,
        starships: action.payload.starShipsData.results,
      };
    }

    case "GET_PLANETS_SUCCESS": {
      return {
        ...state,
        planets: action.payload.planetsData.results,
      };
    }

    case "GET_SPECIES_SUCCESS": {
      return {
        ...state,
        species: action.payload.speciesData.results,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
