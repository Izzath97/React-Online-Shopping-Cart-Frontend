import React, { Component } from "react";
import "./Review.css";
import Cookies from "universal-cookie";

class SingleReview extends Component {
  state = {
    reviews: []
  };

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-2">
              <img
                src="https://image.ibb.co/jw55Ex/def_face.jpg"
                class="img img-rounded img-fluid"
              />
              <p class="date">{this.props.review.date}</p>
            </div>
            <div class="col-md-10">
              <p>
                <a class="float-left">
                  {" "}
                  <strong>
                    <b>{this.props.review.user.username}</b>
                  </strong>
                </a>
                <span class="float-right">
                  <i class="text-warning fa fa-star"></i>
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star"></i>
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star"></i>
                </span>
                <span class="float-right">
                  <i class="text-warning fa fa-star"></i>
                </span>
              </p>
              <div class="clearfix"></div>
              <p>{this.props.review.review}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleReview;
