import React, { Component } from "react";
import "./product.css";
import Cookies from "universal-cookie";
import { Alert } from "antd";
import "antd/dist/antd.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: "",
      price: 0,
      quantity: 0,
      image: "",
      ShortDescription: "",
      status: "",
      category: "men",
      longDescription: ""
    };

    this.handleChangePname = this.handleChangePname.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.hanldeChangeDescription = this.hanldeChangeDescription.bind(this);
    this.hanldeChangeLongDescription = this.hanldeChangeLongDescription.bind(
      this
    );
  }

  addProduct = () => {
    const cookie = new Cookies();
    fetch(`http://localhost:8080/products`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productName: this.state.pname,
        quantity: this.state.quantity,
        price: this.state.price,
        prodStock: this.state.quantity,
        prodImage: this.state.image,
        status: this.state.status,
        prod_desc: this.state.description,
        catagory: this.state.category,
        ShortDescription: this.state.ShortDescription,
        longDescription: this.state.longDescription
      })
    });

    return alert("Product Successfully added");
  };

  handleChangePname = event => {
    this.setState({ pname: event.target.value });
  };
  handleChangePrice = event => {
    this.setState({ price: event.target.value });
  };
  handleChangeQuantity = event => {
    this.setState({ quantity: event.target.value });
  };
  handleChangeImage = event => {
    this.setState({ image: event.target.value });
  };
  handleChangeStatus = event => {
    this.setState({ status: event.target.value });
  };
  handleChangeCategory = event => {
    this.setState({ category: event.target.value });
  };
  hanldeChangeDescription = event => {
    this.setState({ ShortDescription: event.target.value });
  };
  hanldeChangeLongDescription = event => {
    this.setState({ longDescription: event.target.value });
  };

  render() {
    return (
      <form
        id="addProductForm"
        style={{ marginLeft: "10rem", marginRight: "10rem" }}
        onSubmit={this.addProduct}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            height: "20rem",
            backgroundColor: "black"
          }}
        >
          <h3
            style={{
              color: "white",
              alignSelf: "center",
              display: "flex",
              flex: 1,
              justifyContent: "center"
            }}
          >
            Add New Product
          </h3>
        </div>
        <div>
          <span class="close">&times;</span>
          <div class="col-50">
            <br></br>
            <label for="pname">
              <i class="fa fa-user"></i> Product Name
            </label>
            <input type="text" id="pname" onChange={this.handleChangePname} />
            <label for="price">
              <i class="fa fa-envelope"></i> Price
            </label>
            <input type="text" id="price" onChange={this.handleChangePrice} />
            <label for="quantity">
              <i class="fa fa-institution"></i> Amount in Stock
            </label>
            <input
              type="text"
              id="quantity"
              onChange={this.handleChangeQuantity}
            />
            <label for="catgeory">
              <i class="fa fa-institution"></i> Select catgeory
            </label>
            <select
              value={this.state.category}
              form="addProductForm"
              onChange={this.handleChangeCategory}
            >
              <option value="women">Women </option>
              <option value="men"> Men</option>
            </select>
            <br />
            <label for="shortdescription">
              <i class="fa fa-institution"></i> Short Description{" "}
            </label>
            <input
              type="text"
              id="description"
              onChange={this.hanldeChangeDescription}
            />
            <label for="longdescription">
              <i class="fa fa-institution"></i>Long Description{" "}
            </label>
            <input
              type="text"
              id="longdescription"
              onChange={this.hanldeChangeLongDescription}
            />
            <label for="image">
              <i class="fa fa-institution"></i> Image Link
            </label>
            <input type="text" id="image" onChange={this.handleChangeImage} />
            <label for="status">
              <i class="fa fa-institution"></i> Status
            </label>

            <select
              value={this.state.status}
              form="addProductForm"
              onChange={this.handleChangeStatus}
            >
              <option value="Available">Available </option>
              <option value="Unavailable"> Unavailable</option>
            </select>
            <br />
            <hr />
            <div class="addbtn">
              <input type="submit" value="Add Product" />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default AddProduct;
