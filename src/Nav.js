import Logo from "./Logo";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div>
        <nav>
          <section className="backgroundNavbar">
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
          </section>
        </nav>
      </div>
    </>
  );
}

export default Nav;
