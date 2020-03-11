import React, { Component } from "react";
import "./css/sidebar.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Cart from "./cart";
import Home from "./home";
import Login from "./login";
import UserProfile from "./UserProfile";
import SearchBar from "./SearchBar";
import Cookies from "universal-cookie";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      id: null
    };
  }

  componentDidMount() {
    const cookie = new Cookies();
    this.state.username = cookie.get("username");
  }

  componentDidUpdate() {
    const cookie = new Cookies();
    this.state.username = cookie.get("username");
  }

  logout = () => {
    const cookie = new Cookies();
    cookie.set("username", "", { path: "/" });
  };

  render() {
    return (
      // <BrowserRouter>
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2"
        id="ftco-navbar"
      >
        <div class="container">
          <a style={{ fontSize: "3rem" }} class="navbar-brand">
            Brands.lk
          </a>
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

          <div>
            <ul class="navbar-collapse">
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/home"> Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/cart"> Cart</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/orders"> Orders</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  <Link to="/profile"> Profile</Link>
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
