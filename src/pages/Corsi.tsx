import React, { Component } from "react";
import { Corso } from "../model/Interfaces";

export default class Corsi extends Component {
  state: Array<Corso> = [];

  async componentDidMount() {
    const request = await fetch(
      "http://localhost:8080/JavaBiblioteca/publicapi/Corsi/findAll"
    );
    const listaCorsi: Array<Corso> = await request.json();
    // const listaCorsi: [Corso] = await request.json();
    //const corso: Corso = listaCorsi;
    this.setState(listaCorsi);
  }
  render() {
    let lista: Array<Corso> = this.state;
    console.log(1, lista);
    if (lista.length > 0 || lista[0] !== undefined) {
      const test: Corso = lista[0];
      console.log("hey", test);
      const data: Date = new Date(test.dataInizio);
      console.log(Object.getPrototypeOf(data));
      console.log(data.getDate());
      return <div>Hello {data.toLocaleDateString()}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}
