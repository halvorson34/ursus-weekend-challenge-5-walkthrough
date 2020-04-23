import React, { Component } from "react";
import { connect } from "react-redux";

class PageComments extends Component {
  state = {
    comments: "",
  };

  handleChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleClick = () => {
    this.props.dispatch({
      type: "SET_COMMENTS",
      payload: this.state.comments,
    });
    this.props.history.push("/review");
  };

  render() {
    return (
      <div>
        <h1>Any comments you want to leave?</h1>
        <input onChange={this.handleChange} type="text" />

        <div>
          <button onClick={this.handleClick}>Next</button>
        </div>
      </div>
    );
  }
}

export default connect()(PageComments);
