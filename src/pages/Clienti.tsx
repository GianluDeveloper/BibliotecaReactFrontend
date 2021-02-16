import { Component } from "react";
import FindAll from "../modules/Clienti/FindAll";

export default class Clienti extends Component {
  state = { clienti: [] };
  async componentDidMount() {
    const response = await fetch(
      "http://localhost:8080/JavaBiblioteca/publicapi/Corsi/findAll"
    );
    const jsonResponse = await response.json();
    const clienti = [];
    for (let cliente of jsonResponse) {
      clienti.push(cliente);
    }

    this.setState({ clienti: clienti });
  }
  render() {
    return (
      <FindAll state={this.state.clienti} />
      // <div>
      //   {this.state.clienti.map((els: Cliente) => {
      //     return (
      //       <div key={els.idCliente}>
      //         {els.idCliente} -&gt; {els.nome} -&gt; {els.cognome}
      //       </div>
      //     );
      //   })}
      // </div>
    );
  }
}
