import { encode } from "node:querystring";
import React, { useState } from "react";
import FindAll from "./FindAll";
import { Cliente } from "../../model/Interfaces";

const kvToQuery = (k: string, v: string) => {
  return (
    "key" +
    "=" +
    encodeURIComponent(k) +
    "&" +
    "value" +
    "=" +
    encodeURIComponent(v)
  );
};

export default function Search() {
  const [ricercato, setRicercato] = useState(false);
  const startArray: Array<Cliente> = new Array<Cliente>();
  const [listaClienti, setListaClienti] = useState(startArray);
  const [keyState, setKeyState] = useState("nome");
  const [valueState, setValueState] = useState("");

  const fetcher = async () => {
    setRicercato(true);

    try {
      const resp = await fetch(
        "http://localhost:8080/JavaBiblioteca/publicapi/Corsi/find?" +
          kvToQuery(keyState, valueState)
      );
      const text: Array<Cliente> = await resp.json();
      console.log(text);
      setListaClienti(text);
    } catch (e) {
      console.log(e);
    }
  };
  const formHandler = (e: any) => {
    e.preventDefault();
    fetcher();
  };
  return ricercato ? (
    listaClienti.length > 0 ? (
      <FindAll state={listaClienti} />
    ) : (
      <h2>
        Nessun risultato trovato per il campo{" "}
        <em style={{ color: "red" }}>{keyState}</em> con valore{" "}
        <strong style={{ color: "red" }}>{valueState}</strong>
      </h2>
    )
  ) : (
    <div>
      <h2>Ricerca Clienti</h2>
      <div>
        <form onSubmit={formHandler}>
          <label htmlFor="k">Campo di ricerca:</label>
          <br />
          <select
            name="k"
            id="k"
            value={keyState}
            onChange={(e) => {
              setKeyState(e.target.value);
            }}
          >
            <option value="nome">Nome</option>
            <option value="cognome">Cognome</option>
            <option value="telefono">Telefono</option>
            <option value="idCliente">idCliente</option>
          </select>
          <br />
          <input
            type="text"
            placeholder="Ricerca..."
            name="v"
            required
            value={valueState}
            onChange={(e) => {
              setValueState(e.target.value);
            }}
          />
          <br />
          <button type="submit">Trova</button>
          <input type="hidden" name="azione" value="findBykv" />
        </form>
      </div>
    </div>
  );
}
