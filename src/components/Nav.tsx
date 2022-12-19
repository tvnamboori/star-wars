import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Nav>
            <Nav.Link to="/" as={NavLink}>
              Home
            </Nav.Link>
          </Nav>
        </li>
        <li>
          <Nav>
            <Nav.Link to="/films" as={NavLink}>
              Films
            </Nav.Link>
          </Nav>
        </li>
        <li>
          <Nav>
            <Nav.Link to="/vehicles" as={NavLink}>
              Vehicles
            </Nav.Link>
          </Nav>
        </li>
        <li>
          <Nav>
            <Nav.Link to="/starships" as={NavLink}>
              StarShips
            </Nav.Link>
          </Nav>
        </li>
        <li>
          <Nav>
            <Nav.Link to="/planets" as={NavLink}>
              Planets
            </Nav.Link>
          </Nav>
        </li>
      </ul>
    </>
  );
};
