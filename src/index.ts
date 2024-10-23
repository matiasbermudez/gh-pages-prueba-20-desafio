import { initRouter } from "./routes";

import { textContentInit } from "./components/text-content";
import { botonesPptInit } from "./components/botones-ppt";
import { botonAzulInit } from "./components/boton-azul";
import { botonesPptConEventoInit } from "./components/botonConEvento";

console.log("Cargo index.ts");

(function main() {
  console.log("Arrancó main");
  const rootEl = document.querySelector("#root");
  const posibleNullEl = document.createElement("div");
  posibleNullEl.innerText = " No se cargo el rootEl";

  initRouter(rootEl || posibleNullEl);
  textContentInit();
  botonesPptInit();
  botonAzulInit();
  botonesPptConEventoInit();

  console.log("Terminó main");
})();

