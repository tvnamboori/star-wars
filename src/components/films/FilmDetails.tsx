import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./FilmDetails.scss";

export const FilmDetails: React.FC = () => {
  let location = useLocation();

  let filmDetails = location?.state;

  return (
    <div className="filmContainer">
      <div className="content">
        <h2 className="title">{filmDetails.title}</h2>
        <div className="content-text">
          <p className="director">director: {filmDetails.director}</p>
          <p className="producer">producer: {filmDetails.producer}</p>
          <p className="episode">Episode : {filmDetails.episode_id}</p>
          <p className="filmDetails-para">{filmDetails.opening_crawl}</p>
          <div className="additionalInfo-heading">Additional Info</div>
          <ul>
            <li>
              <Link to="/vehicles">Vehicles</Link>
            </li>
            <li>
              <Link to="/starships">Starships</Link>
            </li>
            <li>
              <Link to="/planets">Planets</Link>
            </li>
            <li>
              <Link to="/species">Species</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
