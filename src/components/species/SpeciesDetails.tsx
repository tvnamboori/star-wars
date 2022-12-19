import React from "react";
import { useLocation} from "react-router-dom";
import "./SpeciesDetails.scss";

export const SpeciesDetails: React.FC = () => {
  let location = useLocation();

  let speciesDetails = location?.state;

  return (
    <div className="speciesContainer">
      <div className="content">
        <h2 className="title">{speciesDetails.name}</h2>
        <div className="content-text">
          <p className="species-details">
            Classification: {speciesDetails.classification}
          </p>
          <p className="species-details">
            Designation : {speciesDetails.designation}
          </p>
          <p className="species-details">
            {" "}
            Average Height: {speciesDetails.average_height}
          </p>
        </div>
      </div>
    </div>
  );
};
