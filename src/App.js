import React, { Component } from "react";
import "./App.css";
import "./navbar.css";
import NavBar from "./navbar";
import Product from "./product";
import Home from "./home";
import Cookies from "universal-cookie";
import Welcome from "./welcome";
import SideBar from "./sidebar";
import Checkout from "./Checkout";
import Login from "./login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./detailed";
import Cart from "./cart";
import { withRouter } from "react-router-dom";
import UserProfile from "./UserProfile";
import Orders from "./Orders";
import AdminHome from "./AdminHome";
import AdminNavBar from "./AdminNavBar";
import HighHome from "./HighHome";
import HighHomeAdmin from "./HighHomeAdmin";
import Profile from "./Profile";
import Signup from "./Signup";
import About from "./About";
import NoUserNavbar from "./NoUserNavBar";
import Contact from "./Contact";
import AddProduct from "./AddProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import ViewUser from "./AdminViewUser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isUser: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(data => data.json())
      .then(json => {
        this.setState({
          products: json
        });
      });
  }

  getUser = e => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    fetch(`http://localhost:8080/login/${username}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => res.json())
      .then(json => {
        const rPassword = json.password;
        const rUsername = json.username;
        const rStatus = json.status;
        if (username === rUsername && password === rPassword) {
          this.setState({
            user: username,
            isLoggedIn: true
          });

          UserProfile.setName(this.state.user);
          console.log(this.state.user);
          const cookies = new Cookies();
          cookies.set("username", username, { path: "/" });

          if (rStatus == "admin") {
            cookies.set("user", "admin");
            this.props.history.push("/adminhome");
          } else {
            cookies.set("user", "client");
            this.props.history.push({
              pathname: "/home",
              state: { welcome: "Login Successfull! Happy Shopping" }
            });
          }
        } else {
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleNavBarCartIncrement = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].value++;
    this.setState({ products });
  };

  handleNavBarChangeUser = () => {
    this.setState({
      isUser: true
    });
  };

  handleNavBarChangeAdmin = () => {
    this.setState({
      isUser: false
    });
  };

  render() {
    const cookie = new Cookies();
    let user = cookie.get("user");

    let sidebar;

    if (user == "client") {
      sidebar = <SideBar />;
    } else if (user == "admin") {
      sidebar = <AdminNavBar />;
    } else {
      sidebar = <NoUserNavbar />;
    }

    if (cookie.get("username") == "" || cookie.get("username") === "default") {
      sidebar = <NoUserNavbar />;
    }

    return (
      <div>
        <div>{sidebar}</div>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Login {...props} checkLogin={this.getUser} />}
          />
          <Route path="/profile" component={Profile} exact />

          <Route exact path="/home" component={HighHome} />

          <Route exact path="/signup" component={Signup} />
          <Route path="/cart" component={Cart} />
          {this.state.isLoggedIn && (
            <Route
              path="/welcome"
              render={props => <Welcome {...props} user={this.state.user} />}
            />
          )}
          <Route path="/home/:prodId" render={props => <Detail {...props} />} />
          <Route path="/checkout" component={Checkout}></Route>
          <Route path="/orders" component={Orders} />
          <Route path="/adminhome" component={HighHomeAdmin} />
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route path="/AddProduct" component={AddProduct} />
          <Route path="/ViewUser" component={ViewUser} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
