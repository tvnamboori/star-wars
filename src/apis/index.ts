import axios from "axios";

const getFilms = () => {
  return axios.get("https://swapi.dev/api/films");
};

const getVehicles = () => {
  return axios.get("https://swapi.dev/api/vehicles");
};

const getStarShips = () => {
  return axios.get("https://swapi.dev/api/starships");
};

const getPlanets = () => {
  return axios.get("https://swapi.dev/api/planets");
};

const getSpecies = () => {
  return axios.get("https://swapi.dev/api/species");
};

const apis = {
  getFilms,
  getVehicles,
  getStarShips,
  getPlanets,
  getSpecies,
};
export default apis;
