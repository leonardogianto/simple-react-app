import { Outlet, Link } from "react-router-dom";
import "../index.css";

const Layout = () => {
  return (
    <>
      <div className="toplayouts">
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
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
