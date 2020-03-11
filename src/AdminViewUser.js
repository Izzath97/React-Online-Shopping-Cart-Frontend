import React, { Component } from "react";
import { Table } from "antd";
import "antd/dist/antd.css";

class ViewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: []
    };
  }
  //  this.handleProductSelected = this.handleProductSelected.bind(this);

  componentDidMount() {
    this.getAllUserData();
  }
  render() {
    const filteredUser = this.state.userData.filter(
      data => data.status !== "admin"
    );
    const columns = [
      {
        title: "User ID",
        dataIndex: "id",
        key: "id"
      },
      {
        title: "Username",
        dataIndex: "username",
        key: "username"
      },
      {
        title: "Email address",
        dataIndex: "emailAddress",
        key: "emailAddress"
      },
      {
        title: "First Name",
        dataIndex: "firstName",
        key: "firstName"
      },
      {
        title: " Address",
        dataIndex: "residentAddress",
        key: "residentAddress"
      },
      {
        title: " Contact Number",
        dataIndex: "contactNumber",
        key: "contactNumber"
      },
      {
        title: " Status",
        dataIndex: "status",
        key: "status"
      }
    ];

    const data = filteredUser;
    console.log(filteredUser, "ss");
    return (
      <div>
        <div
          style={{
            display: "flex",
            flex: 1,
            height: "20rem",
            backgroundColor: "black",
            marginRight: "10rem",
            marginLeft: "10rem",
            marginBottom: "5rem"
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
            View All Users
          </h3>
        </div>{" "}
        <Table
          style={{ marginLeft: "10rem", marginRight: "10rem" }}
          columns={columns}
          dataSource={data}
        />
      </div>

      //   <div>
      //     {filteredUser &&
      //       filteredUser.length > 0 &&
      //       filteredUser.map(user => {
      //         return (
      //           <div>
      //             <div>{user.firstName}</div>
      //             <div>{user.status}</div>
      //           </div>
      //         );
      //       })}
      //   </div>
    );
  }

  getAllUserData() {
    fetch("http://localhost:8080/getAllUsers")
      .then(res => res.json())
      .then(json => {
        this.setState({
          userData: json
        });
      });
  }
}

export default ViewUser;
