import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faHome,
  faBook,
  faDollarSign,
  faBookOpen,
  faHeadSideVirus,
  faHeadSideCoughSlash,
  faHeadSideMask,
  faHeadSideCough,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar(props: any) {
  const projectPath: string = props.projectPath;
  return (
    <header>
      <nav title="Gestionale Biblioteca">
        <Link to={projectPath}>
          <FontAwesomeIcon icon={faBook} />
          &nbsp;Gestionale Biblioteca
        </Link>
      </nav>
      <nav title="Home">
        <Link to={projectPath}>
          <FontAwesomeIcon icon={faHome} />
          &nbsp;Home
        </Link>
      </nav>
      <nav title="Biblioteca">
        <Link to={projectPath + "/Biblioteca"}>
          <FontAwesomeIcon icon={faBookOpen} />
          &nbsp;Biblioteca
        </Link>
      </nav>
      <nav title="EWallet">
        <Link to={projectPath + "/EWallet"}>
          <FontAwesomeIcon icon={faDollarSign} />
          &nbsp;E-Wallet
        </Link>
      </nav>
      <nav title="Corsi">
        <Link to={projectPath + "/Corsi"}>
          <FontAwesomeIcon icon={faHeadSideCough} />
          &nbsp;Corsi
        </Link>
      </nav>
      <nav aria-label="Logout">
        {/* <a href="#" onclick="return notImplemented()"> */}
        <Link to={projectPath + "/logout"}>
          <FontAwesomeIcon icon={faSignInAlt} />
          &nbsp;Logout
        </Link>
      </nav>
    </header>
  );
}
