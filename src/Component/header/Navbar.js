import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";

const Header = (props) => {
  console.log(props, 'propss')
  const cartQuantity = props.item.length;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/home">
          OneShop
        </NavLink>
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link cart"
                activeClassName="active"
                to="/cart"
              >
                <span>
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span>Your Cart</span>
                <span>{cartQuantity}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  // console.log("state in header==>", state);
  return { item: state.item };
};
// export default Header;
export default connect(mapStateToProps, null)(Header);
