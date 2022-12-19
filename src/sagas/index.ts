import { all, call, put, takeLatest } from "redux-saga/effects";
import api from "apis";

import { getFilmSuccess } from "redux-data/films/actions";
import { getVehiclesSuccess } from "redux-data/vehicles/actions";
import { getStarShipSuccess } from "redux-data/starships/actions";
import { getPlanetsSuccess } from "redux-data/planets/actions";
import { getSpeciesSuccess } from "redux-data/species/actions";

export function* getFilmsWorkerSaga(): any {
  try {
    const response = yield call(api.getFilms);
    yield put(getFilmSuccess(response.data));
  } catch {}
}

export function* getVehiclesWorkerSaga(): any {
  try {
    const response = yield call(api.getVehicles);
    yield put(getVehiclesSuccess(response.data));
  } catch {}
}

export function* getStarShipsWorkerSaga(): any {
  try {
    const response = yield call(api.getStarShips);
    yield put(getStarShipSuccess(response.data));
  } catch {}
}

export function* getPlanetsWorkerSaga(): any {
  try {
    const response = yield call(api.getPlanets);
    yield put(getPlanetsSuccess(response.data));
  } catch {}
}

export function* getSpeciesWorkerSaga(): any {
  try {
    const response = yield call(api.getSpecies);
    yield put(getSpeciesSuccess(response.data));
  } catch {}
}

export function* rootSaga() {
  yield all([takeLatest("GET_FILMS", getFilmsWorkerSaga)]);
  yield all([takeLatest("GET_VEHICLES", getVehiclesWorkerSaga)]);
  yield all([takeLatest("GET_STAR_SHIPS", getStarShipsWorkerSaga)]);
  yield all([takeLatest("GET_PLANETS", getPlanetsWorkerSaga)]);
  yield all([takeLatest("GET_SPECIES", getSpeciesWorkerSaga)]);
}
