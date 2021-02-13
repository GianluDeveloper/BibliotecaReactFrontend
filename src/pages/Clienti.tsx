import React, { Component } from "react";
interface Cliente {
  idCliente: number;
  nome: string;
  cognome: string;
  telefono: string;
}
export default class Clienti extends Component {
  state = { clienti: [] };
  async componentDidMount() {
    const response = await fetch("http://localhost:8080/JavaBiblioteca/api");
    const jsonResponse = await response.json();
    const clienti = [];
    for (let cliente of jsonResponse) {
      clienti.push(cliente);
    }

    this.setState({ clienti: clienti });
  }
  render() {
    return (
      <div>
        {this.state.clienti.map((els: Cliente) => {
          return (
            <div key={els.idCliente}>
              {els.idCliente} -&gt; {els.nome} -&gt; {els.cognome}
            </div>
          );
        })}
      </div>
    );
  }
}
