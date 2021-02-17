import React, { Component } from "react";

export default class Remove extends Component {
  state = { loading: true, message: "" };

  async doRemove() {
    setInterval(() => {
      this.setState({ loading: false, message: "Rimosso con successo" });
    }, 500);
    const resp = await fetch(window.location.href);
    const json = await resp.json();
  }
  componentDidMount() {
    this.doRemove();
  }
  render() {
    return (
      <div>
        <h2>
          {this.state.loading ? "Elaborazione in corso..." : this.state.message}
        </h2>
      </div>
    );
  }
}
