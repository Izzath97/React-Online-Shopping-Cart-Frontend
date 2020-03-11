import React, { Component } from "react";
import "./css/cart.css";
import Cookies from "universal-cookie";
import CartItem from "./cart_item";
import UserProfile from "./UserProfile";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      total: 0,
      orderList: [],
      tempVar: 0,
      isRemoved: false
    };
  }

  getCookies = () => {
    const cookies = new Cookies();
    cookies.get("username");
  };

  calculateCartTotal = cartArray => {
    let total;
    let tempVar = 0;

    for (let i = 0; i < cartArray.length; i++) {
      total = cartArray[i].product.price * cartArray[i].quantity;
      tempVar = tempVar + total;
    }
    return tempVar;
  };

  removeCartItem = id => {
    const cookies = new Cookies();

    fetch(`http://localhost:8080/orderItems/${id}/${cookies.get("username")}`, {
      method: "DELETE"
    });

    fetch(
      `http://localhost:8080/orderItems/cart/orderItem/${cookies.get(
        "username"
      )}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          cartItems: json
        });
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      isRemoved: true
    });
  };

  componentDidMount() {
    const cookies = new Cookies();

    fetch(
      `http://localhost:8080/orderItems/cart/orderItem/${cookies.get(
        "username"
      )}`
    )
      .then(res => res.json())
      .then(json => {
        this.setState({
          cartItems: json
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    let removedalert;

    if (this.state.isRemoved) {
      removedalert = (
        <div class="alert alert-success">
          Item Removed. Refresh for updated cart.
        </div>
      );
    }

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            background: "cadetblue",
            fontSize: "3rem",
            justifyContent: "center",
            height: "20rem",
            alignItems: "center"
          }}
        >
          Cart Items
        </div>
        <div className="page">
          <form className="bg0 p-t-75 p-b-85">
            <div className="row">
              <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                <div className="m-l-25 m-r--38 m-lr-0-xl">
                  {removedalert}

                  <div className="wrap-table-shopping-cart">
                    <table className="table-shopping-cart">
                      <tr className="table_head">
                        <th className="column-1"> </th>
                        <th className="column-2">Product</th>
                        <th className="column-4">Name</th>

                        <th className="column-5">Price</th>
                        <th className="column-6">Quantity</th>

                        <th className="column-5">Total</th>
                      </tr>
                      {this.state.cartItems.map(cartItem => {
                        return (
                          <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            removeCartItem={this.removeCartItem}
                          />
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>

              <div class="row justify-content-end">
                <div class="col col-lg-5 col-md-6 mt-5 cart-wrap  ">
                  <div class="cart-total mb-3">
                    <h3>Cart Totals</h3>
                    <p class="d-flex">
                      <span>No. of items</span>
                      <span>{this.state.cartItems.length}</span>
                    </p>
                    <p class="d-flex">
                      <span>Subtotal</span>
                      <span>
                        RS:{this.calculateCartTotal(this.state.cartItems)}.00
                      </span>
                    </p>
                    <p class="d-flex">
                      <span>Delivery</span>
                      <span>RS:0.00</span>
                    </p>
                    <p class="d-flex">
                      <span>Discount</span>
                      <span>RS:0.00</span>
                    </p>
                    <hr />
                    <p class="d-flex total-price">
                      <span>Total</span>
                      <span>
                        RS:{this.calculateCartTotal(this.state.cartItems)}.00
                      </span>
                    </p>
                  </div>
                  <p class="text-center">
                    <a class="btn btn-primary py-3 px-4">
                      {" "}
                      <Link to={"/checkout"}> Continue to Checkout </Link>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Cart;
