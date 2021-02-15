import {
  faEdit,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Cliente } from "../model/Interfaces";

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
      <div>
        <h2>
          Lista Clienti{" "}
          <Link to="insert">
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="fa addWallet"
              style={{ color: "red" }}
              fixedWidth
            />
          </Link>
        </h2>
        <div>
          <table>
            <tbody>
              <tr>
                <th>idCliente</th>
                <th>nome</th>
                <th>cognome</th>
                <th>telefono</th>
                <th>Modifica</th>
                <th>Elimina</th>
              </tr>
              {this.state.clienti.map((c: Cliente) => {
                return (
                  <tr>
                    <td>{c.idCliente}</td>
                    <td>{c.nome}</td>
                    <td>{c.cognome}</td>
                    <td>{c.telefono}</td>
                    <td>
                      <Link to="edit">
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="fa"
                          fixedWidth
                        />
                      </Link>
                    </td>
                    <td>
                      <Link to="trash">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="fa"
                          fixedWidth
                        />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
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
