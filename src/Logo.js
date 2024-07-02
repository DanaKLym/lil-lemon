import "./Logo.css";
import logo from "./Visuals/Logo.svg";

function Logo() {
  return (
    <>
      <img src={logo} alt="Logo" className="logo" />
    </>
  );
}

export default Logo;
