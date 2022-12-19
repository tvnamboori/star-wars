import React from "react";
import { useLocation } from "react-router-dom";
import "./StarShipDetails.scss";
export const StarShipDetails: React.FC = () => {
  let location = useLocation();

  let starShipDetails = location?.state;

  return (
    <div className="starShipContainer">
      <div className="content">
      <h2 className="title">{starShipDetails.name}</h2>
        <div className="content-text">
          <p className="starship-details">Model: {starShipDetails.model}</p>
          <p className="starship-details">
            Manufacturer : {starShipDetails.manufacturer}
          </p>
          <p className="starship-details">Crew : {starShipDetails.crew}</p>
        </div>
      </div>
    </div>
  );
};
