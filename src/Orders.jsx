import React, { Component } from "react";
import Cookies from "universal-cookie";
import OrderItems from "./OrderItems";

class Orders extends Component {
  state = {
    orders: []
  };

  componentDidMount() {
    const cookie = new Cookies();

    fetch(`http://localhost:8080/orders/${cookie.get("username")}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          orders: json
        });
      });
  }

  render() {
    return (
      <div>
        <div style={{ backgroundColor: "black", height: "10rem" }}>
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              color: "white",
              alignItems: "center",
              height: "10rem",
              alignItem: "center"
            }}
          >
            Orders
          </h1>
        </div>
        <div className="page">
          <form className="bg0 p-t-75 p-b-85">
            <div style={{ margin: 0 }} className="container">
              <div className="row">
                <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                  <div className="m-l-25 m-r--38 m-lr-0-xl">
                    <div className="wrap-table-shopping-cart">
                      <table className="table-shopping-cart">
                        <tr className="table_head">
                          <th
                            style={{ backgroundColor: "#fff" }}
                            className="column-1"
                          ></th>
                        </tr>
                        {this.state.orders.map(order => (
                          <OrderItems orders={order} />
                        ))}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Orders;
