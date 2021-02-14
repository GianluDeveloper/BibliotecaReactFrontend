import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function HomeObj(props: any) {
  const currentPath = cleanPath(props.homePath) + props.title;
  return (
    <section>
      <h2>{props.title}</h2>
      <div className="azione">
        <Link to={currentPath + "/insert"}>
          <FontAwesomeIcon icon={faPlus} fixedWidth />
          &nbsp;Inserisci {props.title}
        </Link>
      </div>
      <div className="azione">
        <Link to={currentPath + "/find"}>
          <FontAwesomeIcon icon={faSearch} fixedWidth />
          &nbsp;Trova {props.title}
        </Link>
      </div>
      <div className="azione">
        <Link to={currentPath + "/all"}>
          <FontAwesomeIcon icon={faList} fixedWidth />
          &nbsp;Lista {props.title}
        </Link>
      </div>
    </section>
  );
}

const cleanPath = (path: string) => {
  return path[path.length - 1] === "/" ? path : path + "/";
};
