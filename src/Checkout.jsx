import React, { Component } from "react";
import "./css/checkout.css";
import Cookies from "universal-cookie";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString(),
      orderItems: [],
      isFired: false,
      isCheckedOut: false
    };
  }

  state = {};

  componentDidMount() {
    const cookie = new Cookies();

    fetch(
      `http://localhost:8080/orderItems/cart/orderItem/${cookie.get(
        "username"
      )}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          orderItems: json
        });
      });
    console.log(this.state.orderItems);
  }

  confirmCheckout = e => {
    e.preventDefault();
    var tempDate = new Date();
    var date =
      tempDate.getFullYear() +
      "-" +
      (tempDate.getMonth() + 1) +
      "-" +
      tempDate.getDate() +
      " " +
      tempDate.getHours() +
      ":" +
      tempDate.getMinutes();
    const currDate = date;

    this.setState({
      isCheckedOut: true
    });
    const cookie = new Cookies();

    fetch(`http://localhost:8080/products`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        orderItemList: this.state.orderItems
      })
    });

    fetch(`http://localhost:8080/orders/${cookie.get("username")}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        order_date: currDate,
        status: "purchased",
        user: {
          username: cookie.get("username")
        },
        orderItems: this.state.orderItems
      })
    });

    fetch(
      `http://localhost:8080/orderItems/cart/orderItem/${cookie.get(
        "username"
      )}/purchased`,
      {
        method: "PUT"
      }
    );
  };

  render() {
    let alert;

    if (this.state.isCheckedOut) {
      alert = (
        <div class="alert alert-success">
          Items successfuly checked out! Thank you for shopping with us!
        </div>
      );
    }
    return (
      <div>
        <div class="hero-wrap hero-bread">
          <div
            style={{
              display: "flex",
              height: "20rem",
              backgroundColor: "black"
            }}
          >
            <span
              style={{
                fontSize: "3rem",
                color: "white",
                alignSelf: "center",
                marginLeft: "5rem"
              }}
            >
              Checkout
            </span>
          </div>
          <div class="container">
            <div class="row no-gutters slider-text align-items-center justify-content-center">
              <div class="col-md-9 ftco-animate text-center">
                <h1 class="mb-0 bread">Checkout</h1>
                <p class="breadcrumbs">
                  <span class="mr-2">
                    <a href="index.html">Home</a>
                  </span>{" "}
                  <span>Checkout</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={this.confirmCheckout}
          class="billing-form bg-light p-3 p-md-5"
        >
          <h3 class="mb-4 billing-heading">Billing Details</h3>
          <div class="row align-items-end">
            <div class="col-md-6">
              <div class="form-group">
                <label for="firstname">Firt Name</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="lastname">Last Name</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col-md-12">
              <div class="form-group">
                <label for="country">State / Country</label>
                <div class="select-wrap">
                  <div class="icon">
                    <span class="ion-ios-arrow-down"></span>
                  </div>
                  <select name="" id="" class="form-control">
                    <option value="">France</option>
                    <option value="">Italy</option>
                    <option value="">Philippines</option>
                    <option value="">South Korea</option>
                    <option value="">Hongkong</option>
                    <option value="">Japan</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="w-100"></div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="streetaddress">Street Address</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="House number and street name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Appartment, suite, unit etc: (optional)"
                />
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="towncity">Town / City</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="postcodezip">Postcode / ZIP *</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="emailaddress">Email Address</label>
                <input type="text" class="form-control" placeholder="" />
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col-md-12">
              <div class="form-group mt-4">
                <div class="radio">
                  <label class="mr-3">
                    <input type="radio" name="optradio" /> Create an Account?
                  </label>
                  <label>
                    <input type="radio" name="optradio" /> Ship to different
                    address
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="cart-detail bg-light p-3 p-md-4">
              <h3 class="billing-heading mb-4">Payment Method</h3>
              <div class="form-group">
                <div class="col-md-12">
                  <div class="radio">
                    <label>
                      <input type="radio" name="optradio" class="mr-2" /> Direct
                      Bank Tranfer
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <div class="radio">
                    <label>
                      <input type="radio" name="optradio" class="mr-2" /> Check
                      Payment
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <div class="radio">
                    <label>
                      <input type="radio" name="optradio" class="mr-2" /> Paypal
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" value="" class="mr-2" /> I have
                      read and accept the terms and conditions
                    </label>
                  </div>
                </div>
              </div>
              {alert}

              <p>
                <input
                  type="submit"
                  value="Place an order"
                  class="btn btn-primary py-3 px-4"
                />{" "}
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
