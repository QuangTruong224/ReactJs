import React, { Component } from "react";
import { Link } from "react-router-dom";
class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <Link className="navbar-brand" to="/">
                {" "}
                Managerment Employee
              </Link>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
