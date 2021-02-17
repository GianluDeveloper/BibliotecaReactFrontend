import React, { useState } from "react";
import FindAll from "./FindAll";

export default function Search() {
  const [ricercato, setRicercato] = useState(false);
  const [kv, setKv] = useState({ k: "", v: "" });
  const fetcher = async () => {
    setRicercato(true);

    const resp = await fetch("/");
    const text = resp.text();
  };
  const formHandler = (e: any) => {
    e.preventDefault();
    setKv({ k: "ciao", v: "mondo" });
    fetcher();
  };
  return ricercato ? (
    <h2>
      Clienti trovati per k: {kv.k} v: {kv.v}
    </h2>
  ) : (
    <div>
      <h2>Ricerca Clienti</h2>
      <div>
        <form onSubmit={formHandler}>
          <label htmlFor="k">Campo di ricerca:</label>
          <br />
          <select name="k" id="k">
            <option value="nome">Nome</option>
            <option value="cognome">Cognome</option>
            <option value="telefono">Telefono</option>
            <option value="idCliente">idCliente</option>
          </select>
          <br />
          <input type="text" placeholder="Ricerca..." name="v" required />
          <br />
          <button type="submit">Trova</button>
          <input type="hidden" name="azione" value="findBykv" />
        </form>
      </div>
    </div>
  );
}
