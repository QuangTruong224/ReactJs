import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/#" className="navbar-brand">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a href="/#" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href className="nav-link">
                  Pricing
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <div className="dropdown-menu">
                  <a href className="dropdown-item">
                    Action
                  </a>
                  <a href className="dropdown-item">
                    Another action
                  </a>
                  <a href className="dropdown-item">
                    Something else here
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
