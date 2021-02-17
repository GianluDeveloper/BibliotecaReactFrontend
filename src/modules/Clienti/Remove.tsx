import React, { Component } from "react";

export default class Remove extends Component {
  state = { loading: true, message: "" };

  async doRemove() {
    const id: string = getId(window.location.href);
    const response = await fetch(
      `http://localhost:8080/JavaBiblioteca/publicapi/Corsi/remove?id=${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const jsonResponse = await response.json();

    this.setState({ loading: false, message: jsonResponse.description });
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

const getId = (location: string) => {
  const id: string = location.split("id=")[1];
  return id;
};
