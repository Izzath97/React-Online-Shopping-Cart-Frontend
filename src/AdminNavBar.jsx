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
import Cookies from "universal-cookie";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    const cookie = new Cookies();
    cookie.set("username", "default");
  };

  render() {
    return (
      <nav
        class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light ftco-navbar-light-2"
        id="ftco-navbar"
      >
        <div class="container">
          <a class="navbar-brand">Admin Panel </a>
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
                  {" "}
                  <Link to="/adminhome">Home</Link>{" "}
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <Link to="/addProduct">Add Product</Link>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  {" "}
                  <Link to="/ViewUser"> View User</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">
                  {" "}
                  <Link to="/profile">Profile</Link>
                </a>
              </li>

              {this.state.username == "" ? (
                <li class="nav-item">
                  <a class="nav-link">
                    {" "}
                    <Link to="/">Login</Link>{" "}
                  </a>{" "}
                </li>
              ) : (
                <li class="nav-item">
                  <a class="nav-link">
                    {" "}
                    <Link to="/" onClick={this.logout}>
                      {" "}
                      Logout
                    </Link>{" "}
                  </a>{" "}
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
