import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { RiStore2Line } from "react-icons/ri";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function NavbarApp() {
  const card = useSelector((state) => state.Card);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          eStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"products"}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"card"} className="nav-link">
                Card-{card.length}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarApp;
