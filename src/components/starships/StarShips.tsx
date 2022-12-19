import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getStarShips } from "redux-data/starships/actions";
import { RootState } from "redux-data/types";
import { useNavigate} from "react-router-dom";

type data = {
  name: string;
  model: string;
  manufacturer: string;
  crew: number;
}

export const StarShips = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { starships } = useSelector((state: RootState) => state.reducer);

  useEffect(() => {
    if (starships.length === 0) {
      dispatch(getStarShips());
    }
  }, []);
  const Redirect = (value:data) => {
    navigate("/starship-details", { state: value });
  };

  return (
    <>
      <h1>Welcome to StarShips</h1>

      <ul className="list">
        {starships.map((value,index) => {
          return <li key={index} onClick={() => Redirect(value)}>{value.name}</li>;
        })}
      </ul>
    </>
  );
};
