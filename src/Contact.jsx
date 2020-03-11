import React, { Component } from "react";
import "./css/cart.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <br></br>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            height: "20rem",
            backgroundColor: "black"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "Center",
              color: "white",
              height: "20rem",
              alignItems: "center",
              fontSize: "3rem"
            }}
          >
            Contact Us!
          </div>
        </div>{" "}
        <br></br>
        <div class="container">
          <div class="row block-9">
            <div class="col-md-6 order-md-last d-flex">
              <form class="bg-white p-5 contact-form">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn5 btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>

            <div class="col-md-6 d-flex">
              <div id="map" class="white">
                <img src="https://i.pinimg.com/originals/de/79/76/de79763e4aef384f3089cea354dfad9e.jpg" />
              </div>
            </div>
          </div>
          <div class="row d-flex mt-5 contact-info">
            <div class="w-100"></div>
            <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Address:</span> Apiit Sri Lanka
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Phone:</span>{" "}
                  <a href="tel://1234567920">+94 776307850</a>
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Email:</span>{" "}
                  <a href="mailto:info@yoursite.com">style@styleOmega.com</a>
                </p>
              </div>
            </div>
            <div class="col-md-3 d-flex">
              <div class="info bg-white p-4">
                <p>
                  <span>Website</span> <a href="#">Arshad.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
