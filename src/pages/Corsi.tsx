import React, { Component } from "react";
import { Corso } from "../model/Interfaces";

export default class Corsi extends Component {
  state: Corso;
  constructor(i: any, y: any) {
    super(i, y);
    this.state = {} as Corso;
  }

  async componentDidMount() {
    const request = await fetch(
      "http://localhost:8080/JavaBiblioteca/api?type=corsi"
    );
    const listaCorsi: Corso = await request.json();
    // const listaCorsi: [Corso] = await request.json();
    const corso: Corso = listaCorsi;
    this.setState(corso);
  }
  render() {
    let test: Corso = this.state;
    if (test.hasOwnProperty("dataInizio")) {
      const data: Date = new Date(test.dataInizio);
      console.log(Object.getPrototypeOf(data));
      console.log(data.getDate());
      return <div>Hello {data.toLocaleDateString()}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}
