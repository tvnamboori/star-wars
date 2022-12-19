import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux-data/types";
import { getPlanets } from "redux-data/planets/actions";

type data = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  climate: string;
};

export const Planets = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { planets } = useSelector((state: RootState) => state.reducer);

  useEffect(() => {
    if (planets.length === 0) {
      dispatch(getPlanets());
    }
  }, []);

  const Redirect = (value: data) => {
    navigate("/planet-details", { state: value });
  };

  return (
    <>
      <h1>Welcome to Planets</h1>

      <ul className="list">
        {planets.map((value,index) => {
          return <li key={index} onClick={() => Redirect(value)}>{value.name}</li>;
        })}
      </ul>
    </>
  );
};
