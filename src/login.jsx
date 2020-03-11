import React, { Component } from "react";
import "./login.css";
import Home from "./home.jsx";
import Cookies from "universal-cookie";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Login extends Component {
  validateAccount = () => {};

  state = {
    users: [],
    user: "",
    hasAccount: false,
    isLoggedIn: false
  };

  render() {
    return (
      <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
          <form
            class="login100-form validate-form"
            onSubmit={this.props.checkLogin}
          >
            <span
              class="login100-form-title p-b-37"
              style={{
                color: "purple",
                fontSize: "30px",
                display: "flex",
                justifyContent: "center"
              }}
            >
              Sign In
            </span>

            <div
              class="wrap-input100 validate-input m-b-10"
              data-validate="Enter username or email"
            >
              <input
                class="input100"
                type="text"
                name="username"
                placeholder="username  "
              />
              <span class="focus-input100"></span>
            </div>

            <div
              class="wrap-input100 validate-input m-b-10"
              data-validate="Enter password"
            >
              <input
                class="input100"
                type="password"
                name="password"
                placeholder="password"
              />
              <span class="focus-input100"></span>
            </div>

            <div>
              <a class="m-l-20">
                <input type="submit" value="Sign In" />
              </a>
            </div>

            <div class="text-center">
              <Link to="/signup">
                {" "}
                <a> Dont have an account? Click here to Sign up now! </a>{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
