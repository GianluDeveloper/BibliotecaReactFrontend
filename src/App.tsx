import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import myCookiePolicy, { getCookie } from "./modules/Cookie";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import Index from "./pages/Index";
import NavBar from "./modules/NavBar";
import Dipendenti from "./pages/Dipendenti";
import Clienti from "./pages/Clienti";
import Logout from "./pages/Logout";
import Corsi from "./pages/Corsi";
import Aside from "./modules/Aside";
import HomePage from "./modules/Home";
import InsertClienti from "./modules/Clienti/Insert";
import UpdateClienti from "./modules/Clienti/Update";
import RemoveClienti from "./modules/Clienti/Remove";

const projectPath = "/JavaBibliotecaReact";

function App() {
  const [cookieState, setCookieState] = useState(getCookie());
  return (
    <Router>
      <div className="container" id="container">
        <NavBar projectPath={projectPath} />
        <Route path={projectPath} component={Aside} />
        <main>
          <Switch>
            <Route path={projectPath + "/logout"}>
              <Logout cookiestate={setCookieState} />
            </Route>
            <Route path={projectPath + "/Corsi/all"}>
              <Corsi />
            </Route>
            <Route path={projectPath + "/Clienti/insert"}>
              <InsertClienti />
            </Route>
            <Route path={projectPath + "/Clienti/update"}>
              <UpdateClienti />
            </Route>
            <Route path={projectPath + "/Clienti/remove"}>
              <RemoveClienti />
            </Route>
            <Route path={projectPath + "/Clienti/all"}>
              <Clienti />
            </Route>
            <Route path={projectPath + "/Dipendenti/all"}>
              <Dipendenti />
            </Route>
            <Route path={projectPath}>
              <HomePage homePath={projectPath} />
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
