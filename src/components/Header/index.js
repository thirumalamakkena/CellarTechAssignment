import { Link, withRouter } from "react-router-dom";
import { MdOutlineLogin } from "react-icons/md";
import "./index.css";

const Header = (props) => {
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dukmezrxb/image/upload/v1703092157/c318orqo9brmyf9r4tjh.jpg"
              alt="website logo"
            />
          </Link>
          <button type="button" className="nav-mobile-btn">
            <MdOutlineLogin className="mobile-login-btn" />
          </button>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dukmezrxb/image/upload/v1703092157/c318orqo9brmyf9r4tjh.jpg"
              alt="website logo"
            />
          </Link>
          <p className="logo-name">Wanderlog lite</p>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/explorer" className="nav-link">
                Explorer
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/itineraries" className="nav-link">
                Itineraries
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/review" className="nav-link">
                Reviews
              </Link>
            </li>
          </ul>
          <button type="button" className="logout-desktop-btn">
            Login
          </button>
          <button type="button" className="sign-up-btn">
            Sign up
          </button>
        </div>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/" className="nav-link">
              <img
                src="https://res.cloudinary.com/dukmezrxb/image/upload/v1703092157/c318orqo9brmyf9r4tjh.jpg"
                alt="nav home"
                className="nav-bar-image"
              />
            </Link>
          </li>

          <li className="nav-menu-item-mobile">
            <Link to="/explorer" className="nav-link">
              Explorer
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/itineraries" className="nav-link">
              Itineraries
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/review" className="nav-link">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
