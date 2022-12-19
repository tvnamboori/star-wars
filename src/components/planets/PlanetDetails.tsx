import React from "react";
import { useLocation } from "react-router-dom";
import "./PlanetDetails.scss";

export const PlanetDetails: React.FC = () => {
  let location = useLocation();

  let planetDetails = location?.state;

  return (
    <div className="planetContainer">
      <div className="content">
        <h2 className="title">{planetDetails.name}</h2>
        <div className="content-text">
          <p className="planet-details">
            Rotation Period: {planetDetails.rotation_period}
          </p>
          <p className="planet-details">Climate : {planetDetails.climate}</p>
          <p className="planet-details">
            {" "}
            Oribital Period: {planetDetails.orbital_period}
          </p>
        </div>
      </div>
    </div>
  );
};
