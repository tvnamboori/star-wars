import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getVehicles } from "redux-data/vehicles/actions";
import { RootState } from "redux-data/types";
import { useNavigate } from "react-router-dom";

type data = {
  name: string;
  model: string;
  manufacturer: string;
  crew: number;
};

export const Vehicles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { vehicles } = useSelector((state: RootState) => state.reducer);

  useEffect(() => {
    if (vehicles.length === 0) {
      dispatch(getVehicles());
    }
  }, []);

  const Redirect = (value: data) => {
    navigate("/vehicle-details", { state: value });
  };

  return (
    <>
      <h1>Welcome to Vehicles</h1>

      <ul className="list">
        {vehicles?.map((vehicle, index) => {
          return (
            <li key={index} onClick={() => Redirect(vehicle)}>
              {vehicle.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};
