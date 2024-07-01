import Logo from "./Logo";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <Logo />
        <ul className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reserve">Reserve</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
