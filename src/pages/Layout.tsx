import { Outlet, Link } from "react-router-dom";
import "../index.css";
import Switch from "../components/Switch";
import { useState } from "react";

const Layout = () => {
  const [value, setValue] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="myname">
          <h4>LEONARDO GIANTO</h4>
        </div>
        <div className="links">
          <Link to="/">
            <button type="button" className="button">
              Home
            </button>
          </Link>
          <Link to="/blogs">
            <button type="button" className="button">
              Works
            </button>
          </Link>
          <Link to="/contact">
            <button type="button" className="button">
              Contact
            </button>
          </Link>
        </div>
        <Switch isOn={value} handleToggle={() => setValue(!value)} />
      </div>
      <Outlet />
      <div className="footer">Bottom box</div>
    </>
  );
};

export default Layout;
