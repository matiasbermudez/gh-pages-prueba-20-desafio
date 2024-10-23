import { empateInit } from "./pages/empate/empateIndex";
import { explicacionInit } from "./pages/explicacion/explicacionIndex";
import { ganasteInit } from "./pages/ganaste/ganasteIndex";
import { historialInit } from "./pages/historial/historialIndex";
import { jugadaInit } from "./pages/jugada/jugadaIndex";
import { jugarInit } from "./pages/jugar/jugarIndex";
import { perdisteInit } from "./pages/perdiste/perdisteIndex";
import { welcomeInit } from "./pages/welcome/welcomeIndex";

const routes = [
  {
    path: /\/welcome/,
    component: welcomeInit,
  },
  {
    path: /\/explicacion/,
    component: explicacionInit,
  },
  {
    path: /\/jugar/,
    component: jugarInit,
  },
  {
    path: /\/jugada/,
    component: jugadaInit,
  },
  {
    path: /\/ganaste/,
    component: ganasteInit,
  },
  {
    path: /\/perdiste/,
    component: perdisteInit,
  },
  {
    path: /\/empate/,
    component: empateInit,
  },
  {
    path: /\/historial/,
    component: historialInit,
  },
];

function isGithubPages() {
  return location.host.includes("github.io");
}


export function initRouter(container: Element) {
  const BASE_PATH = isGithubPages() ? "/gh-pages-prueba-20-desafio" : "/";
  function goTo(path: any) {
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handlerRoute(completePath);
  }

  function handlerRoute(route: any) {
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }

        container.append(el);
      }
    }
  }

  // le saco la barra del final del pathname
  if (location.pathname.replace(/\/$/, "") == BASE_PATH) {
    goTo("/welcome");
  } else {
    handlerRoute(location.pathname);
  }
}
