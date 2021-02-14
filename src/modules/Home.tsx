import React from "react";
import HomeObj from "./asideObjects/HomeObj";
export default function Home(props: any) {
  return (
    <>
      <HomeObj title="Clienti" homePath={props.homePath} />
      <HomeObj title="Dipendenti" homePath={props.homePath} />
      <HomeObj title="Turni" homePath={props.homePath} />
      <HomeObj title="Libri" homePath={props.homePath} />
      <HomeObj title="RegistroLibri" homePath={props.homePath} />
      <HomeObj title="ContiCorrenti" homePath={props.homePath} />
      <HomeObj title="Corsi" homePath={props.homePath} />
    </>
  );
}
