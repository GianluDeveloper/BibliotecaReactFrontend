import { useLocation } from "react-router-dom";
import ClientiModule from "./asideObjects/AsideObj";
export default function Aside(props: any) {
  const location = useLocation();
  const homePage = props.match.path;
  const pathName = location.pathname;
  const displayState = canDisplay(pathName, homePage);
  return (
    <aside style={{ display: displayState }}>
      <h3>Menu Azioni</h3>
      <ClientiModule name="Clienti" home={homePage} />
      <ClientiModule name="Dipendenti" home={homePage} />
      <ClientiModule name="Libri" home={homePage} />
      <ClientiModule name="RegistroLibri" home={homePage} />
      <ClientiModule name="Turni" home={homePage} />
    </aside>
  );
}

const canDisplay = (pathName: string, homePage: string) => {
  if (pathName !== homePage) {
    return "block";
  }
  return "none";
};
