import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  faEdit,
  faPlusCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cliente } from "../../model/Interfaces";

export default function Update(props: any) {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [telefono, setTelefono] = useState("");

  const [formState, setFormState] = useState(false);
  const [message, setMessage] = useState(`In comunicazione con il server...`);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const formHandler = (e: any) => {
    e.preventDefault();
    setButtonDisabled(true);
    // console.log("ok");
    fetch(`http://localhost:8080/JavaBiblioteca/publicapi/Corsi/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idCliente: window.location.href.split("id=")[1],
        nome: nome,
        cognome: cognome,
        telefono: telefono,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setMessage("Operazione effettuata con successo");
        setFormState(true);
        setState(true);
      })
      .catch((response) => {
        setMessage("Errore generico");
        setFormState(true);
        setState(true);
      });
  };

  const [state, setState] = React.useState(true);
  const [c, setCliente] = React.useState<Cliente | any>(undefined);
  const [errorMessage, setErrorMessage] = React.useState("");
  React.useEffect(() => {
    fetch(
      "http://localhost:8080/JavaBiblioteca/publicapi/Corsi/findById?id=" +
        window.location.href.split("id=")[1]
    )
      .then((response) => response.json())
      .then((response) => {
        setTimeout(() => {
          setCliente(response);
          setNome(response.nome);
          setTelefono(response.telefono);
          setCognome(response.cognome);
          setState(false);
          setErrorMessage("");
        }, 500);
      })
      .catch((err) => {
        setErrorMessage("Error fetch");
      });
  }, []);

  return state ? (
    <div>
      <h2>{errorMessage ? errorMessage : message}</h2>
    </div>
  ) : (
    <div>
      <h2>Aggiorna Cliente</h2>
      <div>
        <form onSubmit={formHandler}>
          <label htmlFor="nome">
            Nome <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="text"
            name="nome"
            placeholder="Nome utente..."
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
            required
          />
          <br />
          <label htmlFor="cognome">
            Cognome <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="text"
            name="cognome"
            placeholder="Cognome utente..."
            value={cognome}
            onChange={(e) => {
              setCognome(e.target.value);
            }}
            required
          />
          <br />
          <label htmlFor="telefono">
            Telefono <span style={{ color: "red" }}>*</span>
          </label>
          <br />
          <input
            type="text"
            name="telefono"
            placeholder="Telefono utente..."
            pattern="[0-9]{8,11}"
            value={telefono}
            onChange={(e) => {
              setTelefono(e.target.value);
            }}
            required
          />
          <br />

          <br />
          <button type="submit" disabled={buttonDisabled}>
            Invia dati
          </button>
          <input type="hidden" name="idCliente" value={c.idCliente} />
          <input type="hidden" name="azione" value="update" />
        </form>
      </div>
    </div>
  );
}
