import React, { Component } from "react";

class SearchBar extends Component {
  state = {};

  render() {
    console.log(this.props.data);
    return (
      <input
        style={{
          border: " 2px solid #000",
          borderRadius: "30px"
        }}
        class="form-control"
        type="text"
        placeholder="Search"
        onChange={this.props.handleChange}
        aria-label="Search"
      />
    );
  }
}

export default SearchBar;
