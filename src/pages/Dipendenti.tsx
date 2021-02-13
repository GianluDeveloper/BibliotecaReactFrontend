import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Dipendente } from "../model/Interfaces";

export default class Dipendenti extends Component {
  state = {
    title: "",
  };
  async componentDidMount() {
    const httpResponse = await axios.get(
      "http://localhost:8080/JavaBiblioteca/api?type=dipendenti"
    );
    setTimeout(() => {
      this.setState({
        title: httpResponse.data.map((dipendente: Dipendente) => {
          return (
            <tr key={dipendente.matricola}>
              <td>{dipendente.matricola}</td>
              <td>{dipendente.nome}</td>
              <td>{dipendente.cognome}</td>
              <td>{dipendente.telefono}</td>
              <td>{dipendente.admin ? "sì" : "no"}</td>
              <td>
                <Link to="edit">
                  <FontAwesomeIcon icon={faEdit} className="fa" fixedWidth />
                </Link>
              </td>
              <td>
                <Link to="trash">
                  <FontAwesomeIcon icon={faTrash} className="fa" fixedWidth />
                </Link>
              </td>
            </tr>
          );
        }),
      });
    }, 500);
  }

  render() {
    return (
      <div>
        <h2>
          Lista Dipendenti{" "}
          <Link to="oki">
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="fa addWallet"
              style={{ color: "red" }}
            />
          </Link>
        </h2>
        <div>
          <table>
            <tbody>
              <tr>
                <th>idDipendente</th>
                <th>nome</th>
                <th>cognome</th>
                <th>telefono</th>
                <th>admin</th>
                <th>Modifica</th>
                <th>Elimina</th>
              </tr>
              {this.state.title}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
