import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Home from "./home";
import Cookies from "universal-cookie";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import "./css/carousel.css";

class HighHome extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    filteredList: [],
    originalList: [],
    welcome: "",
    hello: "Hello"
  };

  componentDidMount() {
    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(json => {
        this.setState({
          originalList: json,
          filteredList: json
        });
      });
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.originalList;
      newList = currentList.filter(item => {
        const lc = item.productName.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.originalList;
    }
    this.setState({
      filteredList: newList
    });
  }

  render() {
    let welcome;
    const cookie = new Cookies();

    if (this.props.location.state != null) {
      welcome = (
        <div class="alert alert-success">
          {this.props.location.state.welcome} {cookie.get("username")} !
        </div>
      );
    } else {
    }

    return (
      <div>
        {welcome}
        <div>{this.renderCarousel()}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            margin: "5rem"
          }}
        >
          <SearchBar handleChange={this.handleChange} data={this.state.hello} />
          <Home filteredList={this.state.filteredList} />
        </div>
      </div>
    );
  }
  renderCarousel = () => {
    return (
      <Carousel autoplay>
        <div className="ant-carousel">
          <img
            src={
              "https://i.pinimg.com/originals/b8/ce/12/b8ce12af4e594bcb26b8f55b0377dad4.jpg"
            }
            alt={""}
          />
        </div>
        <div style={{ width: "90%", height: "35%" }}>
          <img
            src={
              "https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.0-9/31755349_1997713400300591_7619535853009764352_o.jpg?_nc_cat=102&_nc_ohc=oW7PJaqWPL0AX90s0c5&_nc_ht=scontent.fcmb1-1.fna&oh=a390ca0b9d409c5d86990200e29aaf16&oe=5E91F06E"
            }
            alt={""}
          />
        </div>
        <div style={{ width: "90%", height: "35%" }}>
          <img
            src={
              "https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.0-9/71742882_1926688917433436_8031456038836240384_o.jpg?_nc_cat=106&_nc_ohc=2wCranDWos0AX-H5T87&_nc_ht=scontent.fcmb1-1.fna&oh=2999aaa3e579749029fd7dbbf29d4c17&oe=5ED92E5D"
            }
            alt={""}
          />
        </div>
        <div style={{ width: "90%", height: "35%" }}>
          <img
            src={
              "https://m.media-amazon.com/images/G/31/img2020/fashion/WA_2020/WWF/4._SX3000_QL85_.jpg"
            }
            alt={""}
          />
        </div>
      </Carousel>
    );
  };
}

export default HighHome;
