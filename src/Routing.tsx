import { Films } from "components/films/Films";
import { Home } from "components/Home";
import { NavBar } from "components/Nav";
import { Head } from "components/Head";
import { Planets } from "components/planets/Planets";
import { StarShips } from "components/starships/StarShips";
import { Vehicles } from "components/vehicles/Vehicles";
import { Species } from "components/species/Species";
import { FilmDetails } from "components/films/FilmDetails";
import { PlanetDetails } from "components/planets/PlanetDetails";
import { StarShipDetails } from "components/starships/StarShipDetails";
import { VehicleDetails } from "components/vehicles/VehicleDetails";
import { SpeciesDetails } from "components/species/SpeciesDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

export const Routing = () => {
  return (
    <Container>
      <BrowserRouter>
        <Row>
          <Head />{" "}
        </Row>
        <Row>
          <Col lg="4" xl="4" className="routes">
            <NavBar></NavBar>
          </Col>
          <Col lg="8" xl="8" className="data-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/films" element={<Films />} />
              <Route path="/vehicles" element={<Vehicles />} />
              <Route path="/starships" element={<StarShips />} />
              <Route path="/planets" element={<Planets />} />
              <Route path="/species" element={<Species />} />
              <Route path="/film-details" element={<FilmDetails />} />
              <Route path="/planet-details" element={<PlanetDetails />} />
              <Route path="/starship-details" element={<StarShipDetails />} />
              <Route path="/vehicle-details" element={<VehicleDetails />} />
              <Route path="/species-details" element={<SpeciesDetails />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </Container>
  );
};
