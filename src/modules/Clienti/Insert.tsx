import React, { useState } from "react";

export default function Insert() {
  const [formState, setFormState] = useState(false);
  const [message, setMessage] = useState("Invio dati al server...");

  const formHandler = (e: any) => {
    e.preventDefault();

    fetch(`http://localhost:8080/JavaBiblioteca/publicapi/Corsi/insert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: "provastatica",
        cognome: "provaCognome",
        telefono: "1234567890",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setMessage("Operazione effettuata con successo");
      })
      .catch((response) => {
        setTimeout(() => {
          setMessage("Errore generico");
        }, 1000);
      });
    setFormState(true);
  };

  return formState ? (
    <div>
      <h2>{message}</h2>
    </div>
  ) : (
    <div>
      <h2>Inserisci Cliente</h2>
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
            required
          />
          <br />

          <br />
          <button type="submit">Invia dati</button>
          <input type="hidden" name="azione" value="insert" />
        </form>
      </div>
    </div>
  );
}
