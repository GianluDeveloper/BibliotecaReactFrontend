import React from "react";

export default function ClientiModule(props: any) {
  return (
    <div className="oggettoAside">
      <h4>{props.name}</h4>
      <div className="azione">
        <a href={"#" + props.name} data-link={props.name}>
          Inserisci {props.name.toLowerCase()}
        </a>
      </div>
      <div className="azione">
        <a href={"#" + props.name} data-link={props.name + "Find"}>
          Trova {props.name.toLowerCase()}
        </a>
      </div>
      <div className="azione">
        <a href={"#" + props.name} data-link={props.name + "All"}>
          Lista {props.name.toLowerCase()}
        </a>
      </div>
    </div>
  );
}
