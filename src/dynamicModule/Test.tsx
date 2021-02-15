// to test dynamic component switch on rerender

import React, { Component } from "react";

export default class Test extends Component {
  state = {
    loading: true,
  };
  changeLoading() {
    this.setState({ loading: !this.state.loading });
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          <strong>ok </strong>
          <button
            onClick={() => {
              this.changeLoading();
            }}
          >
            click to rerender
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <em>not so ok</em>
          <button
            onClick={() => {
              this.changeLoading();
            }}
          >
            click to rerender
          </button>
        </div>
      );
    }
  }
}
