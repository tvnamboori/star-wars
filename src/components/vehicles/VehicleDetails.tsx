import React from "react";
import { useLocation } from "react-router-dom";
import "./VehicleDetails.scss";

export const VehicleDetails: React.FC = () => {
  let location = useLocation();

  let vehicleDetails = location?.state;

  return (
    <div className="vehicleContainer">
      <div className="content">
        <h2 className="title">{vehicleDetails.name}</h2>
        <div className="content-text">
          <p className="vehicle-details">Model: {vehicleDetails.model}</p>
          <p className="vehicle-details">
            Manufacturer : {vehicleDetails.manufacturer}
          </p>
          <p className="vehicle-details">Crew : {vehicleDetails.crew}</p>
        </div>
      </div>
    </div>
  );
};
