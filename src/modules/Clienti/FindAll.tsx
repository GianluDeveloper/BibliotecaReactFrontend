import React, { useState } from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import {
  faEdit,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cliente } from "../../model/Interfaces";

export default function FindAll(props: any) {
  const history = useHistory();
  const [message, setMessage] = useState("");
  const [triggerUpdate, setTriggerUpdate] = useState(false);
  let url: string = "";
  const handleRemove = (e: any) => {
    //e.preventDefault();
    doRemove();
  };
  const doRemove = () => {
    fetch("remove/" + url)
      .then((response) => response.json())
      .then((response) => {
        setMessage("Rimozione avvenuta con successo");
      })
      .catch((error) => {
        setMessage("Error: " + error.toString());
        //setMessage("Generic error");<
        // var location = options.location || DEFAULT_LOCATION;
        //Router.dispatch(window.location.href, null);
        triggerUpdate ? setTriggerUpdate(false) : setTriggerUpdate(true);
      });
  };

  const lista: Array<Cliente> = props.state;
  if (lista.length > 0) url = "#Clienti/remove?id=" + lista[0].idCliente;
  return message ? (
    <div>
      <h2
        onClick={() => {
          setMessage("");
        }}
      >
        {message}
      </h2>
    </div>
  ) : (
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
            {lista.map((c: Cliente) => {
              return (
                <tr key={c.idCliente}>
                  <td>{c.idCliente}</td>
                  <td>{c.nome}</td>
                  <td>{c.cognome}</td>
                  <td>{c.telefono}</td>
                  <td>
                    <Link to={"update?id=" + c.idCliente}>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="fa"
                        fixedWidth
                      />
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={"remove?id=" + c.idCliente}
                      onClick={handleRemove}
                    >
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
  );
}
