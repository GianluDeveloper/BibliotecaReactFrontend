import React, { useState } from "react";

export default function Insert() {
  const [formState, setFormState] = useState(false);
  const [message, setMessage] = useState("Invio dati al server...");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [telefono, setTelefono] = useState("");

  const [buttonDisabled, setButtonDisabled] = useState(false);

  const formHandler = (e: any) => {
    e.preventDefault();
    setButtonDisabled(true);
    setTimeout(() => {
      fetch(`http://localhost:8080/JavaBiblioteca/publicapi/Corsi/insert`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: nome,
          cognome: cognome,
          telefono: telefono,
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
    }, 500);
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
          <input type="hidden" name="azione" value="insert" />
        </form>
      </div>
    </div>
  );
}
