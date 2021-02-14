import { Link } from "react-router-dom";

export default function ClientiModule(props: any) {
  const home = cleanPath(props.home);
  return (
    <div className="oggettoAside">
      <h4>{props.name}</h4>
      <div className="azione">
        <Link to={home + props.name + "/insert"}>
          Inserisci {props.name.toLowerCase()}
        </Link>
      </div>
      <div className="azione">
        <Link to={home + props.name + "/find"}>
          Trova {props.name.toLowerCase()}
        </Link>
      </div>
      <div className="azione">
        <Link to={home + props.name + "/all"}>
          Lista {props.name.toLowerCase()}
        </Link>
      </div>
    </div>
  );
}
const cleanPath = (path: string) => {
  return path[path.length - 1] === "/" ? path : path + "/";
};
