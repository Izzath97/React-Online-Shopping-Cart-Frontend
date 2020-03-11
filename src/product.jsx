import React, { Component } from "react";
import "./product.css";
import "./css/main.css";
import "./css/util.css";
import Detailed from "./detailed";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import UpdateButton from "./updateButton";
import Modal from "react-awesome-modal";

import "./template/css/open-iconic-bootstrap.min.css";
import "./template/css/animate.css";
import "./template/css/magnific-popup.css";
import "./template/css/aos.css";
import "./template/css/ionicons.min.css";
import "./template/css/bootstrap-datepicker.css";
import "./template/css/style.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateProduct: props.updateProduct
    };
  }
  state = {
    updateProduct: false,
    visible: false
  };

  makeVisible = () => {
    this.setState({ visible: true });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{}} class="product">
          <a class="img-prod">
            <Link
              to={`/home/${this.props.product.pid}`}
              params={{ pid: this.props.product.pid }}
            >
              <img
                class="homeProduct"
                src={this.props.product.prodImage}
                alt="Colorlib Template"
              />
            </Link>
          </a>
          <div class="text py-3 px-3">
            <h3>
              <a href="#">{this.props.product.productName}</a>
            </h3>
            <h3>
              <a href="#">{this.props.product.prod_desc}</a>
            </h3>
            <h3>{this.props.product.pricing}</h3>
            <div class="d-flex">
              <div class="pricing">
                <p class="price">
                  <span>RS: {this.props.product.price}</span>
                </p>
              </div>
              <div class="rating">
                <p class="text-right">
                  <span class="ion-ios-star-outline"></span>
                  <span class="ion-ios-star-outline"></span>
                  <span class="ion-ios-star-outline"></span>
                  <span class="ion-ios-star-outline"></span>
                  <span class="ion-ios-star-outline"></span>
                </p>
              </div>
            </div>
            <hr />
            <p class="bottom-area d-flex">
              <a href="#" class="ml-auto">
                <span>
                  <i class="ion-ios-heart-empty"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
