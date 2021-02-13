import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import myCookiePolicy, { getCookie } from "./modules/Cookie";
import {
  faSignInAlt,
  faHome,
  faBook,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

import Index from "./pages/Index";
import Dipendenti from "./pages/Dipendenti";
import Clienti from "./pages/Clienti";
import Logout from "./pages/Logout";
const projectPath = "/JavaBibliotecaReact";

function App() {
  const [cookieState, setCookieState] = useState(getCookie());
  return (
    <Router>
      <div className="container" id="container">
        <header>
          <nav aria-label="Gestionale Biblioteca">
            <Link to={projectPath}>
              <FontAwesomeIcon icon={faBook} />
              &nbsp;Gestionale Biblioteca
            </Link>
          </nav>
          <nav aria-label="Home" data-link="Home">
            <Link to={projectPath}>
              <FontAwesomeIcon icon={faHome} />
              &nbsp;Home
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
        <aside>
          <div className="oggettoAside">
            <h4>Corsi</h4>
            <div className="azione">
              <a href="#a" data-link="CorsiAll">
                Lista Corsi
              </a>
            </div>
            <div className="azione">
              <a href="#b" data-link="DocentiAll">
                Lista Docenti
              </a>
            </div>
            <div className="azione">
              <a href="#b" data-link="IscrizioniAll">
                Lista Iscrizioni
              </a>
            </div>
          </div>
        </aside>
        <main>
          <Switch>
            <Route path={projectPath + "/logout"}>
              <Logout cookiestate={setCookieState} />
            </Route>
            <Route path={projectPath + "/users"}>
              <Users />
            </Route>
            <Route path={projectPath + "/clienti"}>
              <Clienti />
            </Route>
            <Route path={projectPath}>
              <Dipendenti />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </main>
        {cookieState ? (
          <div className="cookies">
            <FontAwesomeIcon
              icon={faTimes}
              fixedWidth
              onClick={(elem) => {
                myCookiePolicy(true);
                setCookieState(false);
              }}
            />
            Questo sito usa i cookie. Consulta la{" "}
            <Link to="cookiePolicy">cookie policy</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </Router>
  );
}

export default App;

const Users = () => {
  return <h2>Users</h2>;
};
