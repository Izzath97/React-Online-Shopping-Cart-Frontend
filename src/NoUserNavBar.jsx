import React, { Component } from "react";
import "./css/sidebar.css";
import { Link } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2"
        id="ftco-navbar"
        style={{ minHeight: "30px", marginBottom: 0 }}
      >
        <div class="container">
          <div style={{ fontSize: "3rem", padding: 0 }} class="navbar-brand">
            Brands.lk
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="oi oi-menu"></span> Menu
          </button>

          <div class="nav">
            <ul class="navbar-collapse">
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/home">Home</Link>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/About"> About</Link>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/Contact"> Contact</Link>
                </a>
              </li>

              {this.state.username == null ? (
                <li class="nav-item">
                  <a class="nav-link">
                    <Link to="/">Login</Link>
                  </a>
                </li>
              ) : (
                <li class="nav-item">
                  <a class="nav-link">
                    <Link to="/" onClick={this.logout}>
                      Logout
                    </Link>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default SideBar;
