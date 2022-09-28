import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-navbar">
          <ul>
            <li>
              <NavLink activeClassName="active" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <p>&copy; oneShop.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
