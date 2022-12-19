import { FilmsData } from "./films/types";
import { VehiclesData } from "./vehicles/types";
import { StarShipsData } from "./starships/types";
import { PlanetsData } from "./planets/types";
import { SpeciesData } from "./species/types";

export interface State {
  films: FilmsData[];
  vehicles: VehiclesData[];
  starships: StarShipsData[];
  planets: PlanetsData[];
  species:SpeciesData[]
}

export interface RootState {
  reducer: State;
}
