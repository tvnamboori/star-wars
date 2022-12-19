import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "sagas";
import rootReducer from "redux-data/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    sagaMiddleware,
    ...getDefaultMiddleware({ thunk: false }),
  ],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);
export default store;
