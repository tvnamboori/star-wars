import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "redux-data/types";
import { getSpecies } from "redux-data/species/actions";
import { useNavigate} from "react-router-dom";

type data = {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
};

export const Species = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { species } = useSelector((state: RootState) => state.reducer);

  useEffect(() => {
    if (species.length === 0) {
      dispatch(getSpecies());
    }
  }, []);

  const Redirect = (value: data) => {
    navigate("/species-details", { state: value });
  };

  return (
    <>
      <h1>Welcome to Species</h1>

      <ul className="list">
        {species.map((value,index) => {
          return <li key={index} onClick={() => Redirect(value)}>{value.name}</li>;
        })}
      </ul>
    </>
  );
};
