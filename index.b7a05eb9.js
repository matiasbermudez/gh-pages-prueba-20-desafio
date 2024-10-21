// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"dZI1r":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jeorp":[function(require,module,exports) {
var _routes = require("./routes");
var _textContent = require("./components/text-content");
var _botonesPpt = require("./components/botones-ppt");
var _botonAzul = require("./components/boton-azul");
var _botonConEvento = require("./components/botonConEvento");
(function main() {
    const rootEl = document.querySelector("#root");
    const posibleNullEl = document.createElement("div");
    posibleNullEl.innerText = " No se cargo el rootEl";
    (0, _routes.initRouter)(rootEl || posibleNullEl);
    (0, _textContent.textContentInit)();
    (0, _botonesPpt.botonesPptInit)();
    (0, _botonAzul.botonAzulInit)();
    (0, _botonConEvento.botonesPptConEventoInit)();
})();

},{"./routes":"cAFqI","./components/text-content":"9kpcL","./components/botones-ppt":"gDDPe","./components/boton-azul":"axRwL","./components/botonConEvento":"3A5fb"}],"cAFqI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _empateIndex = require("./pages/empate/empateIndex");
var _explicacionIndex = require("./pages/explicacion/explicacionIndex");
var _ganasteIndex = require("./pages/ganaste/ganasteIndex");
var _historialIndex = require("./pages/historial/historialIndex");
var _jugadaIndex = require("./pages/jugada/jugadaIndex");
var _jugarIndex = require("./pages/jugar/jugarIndex");
var _perdisteIndex = require("./pages/perdiste/perdisteIndex");
var _welcomeIndex = require("./pages/welcome/welcomeIndex");
const routes = [
    {
        path: /\/welcome/,
        component: (0, _welcomeIndex.welcomeInit)
    },
    {
        path: /\/explicacion/,
        component: (0, _explicacionIndex.explicacionInit)
    },
    {
        path: /\/jugar/,
        component: (0, _jugarIndex.jugarInit)
    },
    {
        path: /\/jugada/,
        component: (0, _jugadaIndex.jugadaInit)
    },
    {
        path: /\/ganaste/,
        component: (0, _ganasteIndex.ganasteInit)
    },
    {
        path: /\/perdiste/,
        component: (0, _perdisteIndex.perdisteInit)
    },
    {
        path: /\/empate/,
        component: (0, _empateIndex.empateInit)
    },
    {
        path: /\/historial/,
        component: (0, _historialIndex.historialInit)
    }
];
const BASE_PATH = "/20-desafio-ppt";
function isGithubPages() {
    return location.host.includes("github.io");
}
function initRouter(container) {
    function goTo(path) {
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
        handlerRoute(completePath);
    }
    function handlerRoute(route) {
        console.log("Ruta enviada: ", route);
        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
        for (const r of routes)if (r.path.test(route)) {
            const el = r.component({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.append(el);
        }
    }
    if (location.pathname == "/") goTo("/welcome");
    else handlerRoute(location.pathname);
}

},{"./pages/welcome/welcomeIndex":"eKXLS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./pages/explicacion/explicacionIndex":"9jbRk","./pages/ganaste/ganasteIndex":"bLQzN","./pages/perdiste/perdisteIndex":"1eJdT","./pages/jugar/jugarIndex":"e75e6","./pages/jugada/jugadaIndex":"4DCpH","./pages/empate/empateIndex":"hGtKB","./pages/historial/historialIndex":"dexEu"}],"eKXLS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "welcomeInit", ()=>welcomeInit);
function welcomeInit(params) {
    const divEl = document.createElement("div");
    divEl.innerHTML = `
    <div class="welcome__contenedor">
     <div class="welcome__titulo">
        <h2>Piedra</h2>
        <h2>Papel \xf3</h2>
        <h2>Tijera</h2>
    </div>
        <boton-azul-el class="boton__principal">Empezar</boton-azul-el>
       
    </div>
    `;
    const empezarEl = divEl.querySelector(".boton__principal");
    empezarEl?.addEventListener("click", ()=>{
        params.goTo("/explicacion");
    });
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9jbRk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "explicacionInit", ()=>explicacionInit);
function explicacionInit(params) {
    const divEl = document.createElement("div");
    divEl.innerHTML = `
    <div class="explicacion__contenedor">
     <h2 class="explicacion__texto">
        Presion\xe1 jugar
        y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.
     </h2>
        <boton-azul-el class="boton__jugar">Jugar!</boton-azul-el>
    </div>
    `;
    const botonJugarEl = divEl.querySelector(".boton__jugar");
    botonJugarEl?.addEventListener("click", ()=>{
        params.goTo("/jugar");
    });
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bLQzN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ganasteInit", ()=>ganasteInit);
var _state = require("../../state");
var _resultadoGanastePng = require("../../imgs/resultado_ganaste.png");
var _resultadoGanastePngDefault = parcelHelpers.interopDefault(_resultadoGanastePng);
function ganasteInit(params) {
    const divEl = document.createElement("div");
    const jugador_puntaje = (0, _state.state).getResultado("jugador");
    const maquina_puntaje = (0, _state.state).getResultado("maquina");
    divEl.innerHTML = `
    <div class="resultado__contenedor">

        <img src="${0, _resultadoGanastePngDefault.default}" alt="estrella ganaste" width="255" height="260" >

        <article class="article__resultado article__ganaste">
            <h2 class="article__score">Score</h2>
            <h3 class="article__vos">Vos: ${jugador_puntaje}</h3>
            <h3 class="article__maquina">Maquina: ${maquina_puntaje}</h3>
         </article>
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
        <boton-azul-el class="boton__historial">Historial</boton-azul-el>
    </div>
    `;
    const jugarEl = divEl.querySelector(".boton__jugar");
    const historialEl = divEl.querySelector(".boton__historial");
    jugarEl?.addEventListener("click", ()=>{
        params.goTo("/jugar");
    });
    historialEl?.addEventListener("click", ()=>{
        params.goTo("/historial");
    });
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../imgs/resultado_ganaste.png":"8D5wp","../../state":"1Yeju"}],"8D5wp":[function(require,module,exports) {
module.exports = require("12677606d299ee8a").getBundleURL("aNMIV") + "resultado_ganaste.ef900637.png" + "?" + Date.now();

},{"12677606d299ee8a":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1Yeju":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
const state = {
    data: [],
    jugadas: [
        "piedra",
        "papel",
        "tijera"
    ],
    listeners: [],
    getState () {
        this.syncWithLs();
        return this.data;
    },
    setState (newState) {
        this.syncWithLs();
        this.data = newState;
        localStorage.removeItem("jugadas-ls");
        localStorage.setItem("jugadas-ls", JSON.stringify(this.data));
        for (const cb of this.listeners)cb();
    },
    suscribe (callback) {
        this.listeners.push(callback);
    },
    syncWithLs () {
        const jugadasLs = localStorage.getItem("jugadas-ls");
        this.data = jugadasLs ? JSON.parse(jugadasLs) : [];
    },
    deleteHistorialLs () {
        localStorage.removeItem("jugadas-ls");
        this.setState([]);
    },
    setMaquinaPlay () {
        //RANDOM QUE RESPONDE 1 JUGADA PIEDRA//PAPEL//TIJERA
        const jugadaPc = this.jugadas[Math.floor(Math.random() * 3)];
        return jugadaPc;
    },
    setJugada (jugadaPlayer) {
        const jugadaMaquina = this.setMaquinaPlay();
        const jugadaCompleta = {
            jugador: jugadaPlayer,
            maquina: jugadaMaquina,
            ganador: this.setGanador(jugadaPlayer, jugadaMaquina)
        };
        const estadoViejo = this.getState();
        const nuevoState = [
            ...estadoViejo,
            jugadaCompleta
        ];
        console.log("Nuevo Estado: ", nuevoState);
        this.setState(nuevoState);
    },
    setGanador (jugadaPlayer, jugadaMaquina) {
        console.log(jugadaMaquina, jugadaPlayer);
        if (jugadaPlayer === jugadaMaquina) return "empate";
        else if (jugadaPlayer === "piedra" && jugadaMaquina === "papel") return "maquina";
        else if (jugadaPlayer === "piedra" && jugadaMaquina === "tijera") return "jugador";
        else if (jugadaPlayer === "tijera" && jugadaMaquina === "papel") return "jugador";
        else if (jugadaPlayer === "tijera" && jugadaMaquina === "piedra") return "maquina";
        else if (jugadaPlayer === "papel" && jugadaMaquina === "piedra") return "jugador";
        else if (jugadaPlayer === "papel" && jugadaMaquina === "tijera") return "maquina";
    },
    getResultado (player) {
        //RECORRO EL STATE COMPLETO SI EL RESULTADO EL IGUAL AL PLAYER LE SUMO 1 AL CONTADOR, RETORNO CONTADOR
        const arrayJugadas = this.getState();
        let contador = 0;
        arrayJugadas.forEach((jugada)=>{
            if (jugada.ganador === player) contador++;
        });
        return contador;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1eJdT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "perdisteInit", ()=>perdisteInit);
var _state = require("../../state");
var _resultadoPerdistePng = require("../../imgs/resultado_perdiste.png");
var _resultadoPerdistePngDefault = parcelHelpers.interopDefault(_resultadoPerdistePng);
function perdisteInit(params) {
    const divEl = document.createElement("div");
    const jugador_puntaje = (0, _state.state).getResultado("jugador");
    const maquina_puntaje = (0, _state.state).getResultado("maquina");
    divEl.innerHTML = `
    <div class="resultado__contenedor">

        <img src="${0, _resultadoPerdistePngDefault.default}" alt="estrella perdiste" width="255" height="260" >

        <article class="article__resultado article__perdiste">
            <h2 class="article__score">Score</h2>
            <h3 class="article__vos">Vos: ${jugador_puntaje}</h3>
            <h3 class="article__maquina">Maquina: ${maquina_puntaje}</h3>
         </article>
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
         <boton-azul-el class="boton__historial">Historial</boton-azul-el>

    </div>
    `;
    const jugarEl = divEl.querySelector(".boton__jugar");
    jugarEl?.addEventListener("click", ()=>{
        params.goTo("/jugar");
    });
    const historialEl = divEl.querySelector(".boton__historial");
    historialEl?.addEventListener("click", ()=>{
        params.goTo("/historial");
    });
    return divEl;
}

},{"../../imgs/resultado_perdiste.png":"cGm2k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"cGm2k":[function(require,module,exports) {
module.exports = require("d982f57cb15856ce").getBundleURL("aNMIV") + "resultado_perdiste.f7b3d2cc.png" + "?" + Date.now();

},{"d982f57cb15856ce":"lgJ39"}],"e75e6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "jugarInit", ()=>jugarInit);
function jugarInit(params) {
    // const todosLosBotones = document.querySelectorAll('.welcome__botones-ppt');
    // todosLosBotones.forEach((element) =>{
    //     element.classList.remove('SelectedOff');
    //     element.classList.remove('jugador__play');
    // })
    const piedraEl = document.querySelector(".piedra");
    const papelEl = document.querySelector(".papel");
    const tijeraEl = document.querySelector(".tijera");
    piedraEl?.classList.add("botonOff");
    papelEl?.classList.add("botonOff");
    tijeraEl?.classList.add("botonOff");
    let counter = 3;
    const divEl = document.createElement("div");
    divEl.innerHTML = `
         <div id="countdown" class="countdown-circle">${counter}</div>
         <div class="contenedor__botones-evento">
            <botones-ppt-con-evento-el ppt="piedra" class="jugar__boton-evento piedra"></botones-ppt-con-evento-el>
            <botones-ppt-con-evento-el ppt="papel" class="jugar__boton-evento papel"></botones-ppt-con-evento-el>
            <botones-ppt-con-evento-el ppt="tijera" class="jugar__boton-evento tijera"></botones-ppt-con-evento-el>
         </div>
    `;
    let hizoLaJugada = false;
    function countDownTry() {
        const intervalId = setInterval(()=>{
            counter--;
            const countdownElement = divEl.querySelector(".countdown-circle");
            if (countdownElement) //LE HAGO TO STRING POR QUE EL TEXTCONTENT NO ADMITE NUMBERS, SOLO STRING
            countdownElement.textContent = counter.toString();
            //SI EL CONTADOR LLEGA A 0 CORTO EL INTERVAL CON CLEARINTERVAL Y EL NOMBRE DEL INTERVAL
            if (counter <= 0 && hizoLaJugada) {
                clearInterval(intervalId);
                params.goTo("/jugada");
            } else if (counter == 0) {
                alert("No realizaste la jugada, volvemos a iniciar");
                counter = 4;
            }
        }, 1000);
    }
    countDownTry();
    const botonPiedraEl = divEl.querySelector(".piedra");
    const botonPapelEl = divEl.querySelector(".papel");
    const botonTijeraEl = divEl.querySelector(".tijera");
    botonPiedraEl?.addEventListener("click", ()=>{
        hizoLaJugada = true;
        botonPiedraEl.classList.add("jugador__play");
        botonPapelEl?.classList.add("SelectedOff");
        botonTijeraEl?.classList.add("SelectedOff");
    });
    botonPapelEl?.addEventListener("click", ()=>{
        hizoLaJugada = true;
        botonPapelEl.classList.add("jugador__play");
        botonPiedraEl?.classList.add("SelectedOff");
        botonTijeraEl?.classList.add("SelectedOff");
    });
    botonTijeraEl?.addEventListener("click", ()=>{
        hizoLaJugada = true;
        botonTijeraEl.classList.add("jugador__play");
        botonPapelEl?.classList.add("SelectedOff");
        botonPiedraEl?.classList.add("SelectedOff");
    });
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4DCpH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "jugadaInit", ()=>jugadaInit);
var _state = require("../../state");
function jugadaInit(params) {
    const divEl = document.createElement("div");
    divEl.classList.add("contenedor__jugada");
    const oldState = (0, _state.state).getState();
    const largo = oldState.length - 1;
    divEl.innerHTML = `
        <botones-ppt-el 
           ppt="${oldState[largo].maquina}"
           player="maquina__play"
           class="welcome__botones-ppt"
          > 
        </botones-ppt-el>

        <h1>${oldState[largo].ganador}</h1>

        <botones-ppt-el ppt="${oldState[largo].jugador}" class="jugador__play-jugada "></botones-ppt-el>
    `;
    let counter = 2;
    function countDownTry() {
        const intervalId = setInterval(()=>{
            counter--;
            const countdownElement = divEl.querySelector(".countdown-circle");
            if (countdownElement) //LE HAGO TO STRING POR QUE EL TEXTCONTENT NO ADMITE NUMBERS, SOLO STRING
            countdownElement.textContent = counter.toString();
            //SI EL CONTADOR LLEGA A 0 CORTO EL INTERVAL CON CLEARINTERVAL Y EL NOMBRE DEL INTERVAL
            if (counter <= 0) {
                clearInterval(intervalId);
                if (oldState[largo].ganador === "jugador") params.goTo("/ganaste");
                else if (oldState[largo].ganador === "maquina") params.goTo("/perdiste");
                else params.goTo("/empate");
            }
        }, 1000);
    }
    countDownTry();
    return divEl;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../state":"1Yeju"}],"hGtKB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empateInit", ()=>empateInit);
var _state = require("../../state");
var _resultadoEmpatePng = require("../../imgs/resultado_empate.png");
var _resultadoEmpatePngDefault = parcelHelpers.interopDefault(_resultadoEmpatePng);
function empateInit(params) {
    const divEl = document.createElement("div");
    const jugador_puntaje = (0, _state.state).getResultado("jugador");
    const maquina_puntaje = (0, _state.state).getResultado("maquina");
    console.log("Ultimo state: ", (0, _state.state).getState());
    divEl.innerHTML = `
    <div class="resultado__contenedor resultado__empate">

        <img src="${0, _resultadoEmpatePngDefault.default}" alt="estrella empate" width="255" height="260" >

        <article class="article__resultado article__empate">
            <h2 class="article__score">Score</h2>
            <h3 class="article__vos">Vos: ${jugador_puntaje}</h3>
            <h3 class="article__maquina">Maquina: ${maquina_puntaje}</h3>
         </article>
        <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
        <boton-azul-el class="boton__historial">Historial</boton-azul-el>

    </div>
    `;
    const jugarEl = divEl.querySelector(".boton__jugar");
    jugarEl?.addEventListener("click", ()=>{
        params.goTo("/jugar");
    });
    const historialEl = divEl.querySelector(".boton__historial");
    historialEl?.addEventListener("click", ()=>{
        params.goTo("/historial");
    });
    return divEl;
}

},{"../../state":"1Yeju","../../imgs/resultado_empate.png":"5ALbw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ALbw":[function(require,module,exports) {
module.exports = require("e03a2cc323c9e085").getBundleURL("aNMIV") + "resultado_empate.b311b5c6.png" + "?" + Date.now();

},{"e03a2cc323c9e085":"lgJ39"}],"dexEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "historialInit", ()=>historialInit);
var _state = require("../../state");
function historialInit(params) {
    const divEl = document.createElement("div");
    let estado = (0, _state.state).getState();
    function renderTable() {
        const tablaHTML = `
            <table class="tabla">
                <tr class="tabla__tr">
                    <td class="tabla__td">Jugador</td>
                    <td class="tabla__td">Maquina</td>
                    <td class="tabla__td">Resultado</td>
                </tr>
                ${estado.map((jugada)=>`
                    <tr class="tabla__tr">
                        <td class="tabla__td">${jugada.jugador}</td>
                        <td class="tabla__td">${jugada.maquina}</td>
                        <td class="tabla__td">${jugada.ganador}</td>
                    </tr>
                `).join("")}
            </table>
        `;
        divEl.querySelector(".tabla")?.remove();
        divEl.insertAdjacentHTML("afterbegin", tablaHTML);
    }
    renderTable();
    (0, _state.state).suscribe(()=>{
        estado = (0, _state.state).getState();
        renderTable();
    });
    divEl.innerHTML += `
        <div class="contenedor__historial-botones">
            <boton-azul-el class="boton__jugar">Volver a Jugar</boton-azul-el>
            <button class="boton__borrar">Borrar historial</button>
        </div>
    `;
    const jugarEl = divEl.querySelector(".boton__jugar");
    jugarEl?.addEventListener("click", ()=>{
        params.goTo("/jugar");
    });
    const botonBorrarEl = divEl.querySelector(".boton__borrar");
    botonBorrarEl?.addEventListener("click", ()=>{
        (0, _state.state).deleteHistorialLs();
        estado = (0, _state.state).getState();
        renderTable();
    });
    return divEl;
}

},{"../../state":"1Yeju","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9kpcL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "textContentInit", ()=>textContentInit);
function textContentInit() {
    class TextContent extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.elemento = this.textContent;
            this.render();
        }
        render() {
            this.shadow.innerHTML = `
            ${this.elemento}
        `;
        }
    }
    customElements.define("text-content-el", TextContent);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gDDPe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "botonesPptInit", ()=>botonesPptInit);
var _piedraPng = require("../imgs/piedra.png");
var _piedraPngDefault = parcelHelpers.interopDefault(_piedraPng);
var _papelPng = require("../imgs/papel.png");
var _papelPngDefault = parcelHelpers.interopDefault(_papelPng);
var _tijeraPng = require("../imgs/tijera.png");
var _tijeraPngDefault = parcelHelpers.interopDefault(_tijeraPng);
function botonesPptInit() {
    class BotonesPpt extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.ppt = this.getAttribute("ppt");
            this.jugador = this.getAttribute("player");
            this.objetoPpt = {
                piedra: (0, _piedraPngDefault.default),
                papel: (0, _papelPngDefault.default),
                tijera: (0, _tijeraPngDefault.default)
            };
            this.render();
        }
        render() {
            this.shadow.innerHTML = `
                <button class="boton__ppt ">
                    <img src="${this.objetoPpt[this.ppt]}" class="boton__ppt-img">
                </button>
                
            `;
            if (this.jugador == "maquina__play") {
                const button = this.shadow.querySelector(".boton__ppt");
                button?.classList.add("maquina__play");
            }
            const style = document.createElement("style");
            style.textContent = `
                .boton__ppt{
                        border: none;
                        cursor: pointer; 
                }
                .boton__ppt-img{
                    height: 150px;
                }
                .boton__ppt-img:hover{
                      height: 185px;   
                }
               .maquina__play{
                     margin-top: 65px;
                    transform: rotate(180deg);
               }
                .maquina__play img{
                 transform: scale(2);
               }
              
            `;
            this.shadow.append(style);
        }
    }
    customElements.define("botones-ppt-el", BotonesPpt);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../imgs/piedra.png":"b00NV","../imgs/papel.png":"dLAxS","../imgs/tijera.png":"aMwF8"}],"b00NV":[function(require,module,exports) {
module.exports = require("bcec586a393edf19").getBundleURL("aNMIV") + "piedra.c35c2078.png" + "?" + Date.now();

},{"bcec586a393edf19":"lgJ39"}],"dLAxS":[function(require,module,exports) {
module.exports = require("cdbf2cc7ce32b95").getBundleURL("aNMIV") + "papel.2024981c.png" + "?" + Date.now();

},{"cdbf2cc7ce32b95":"lgJ39"}],"aMwF8":[function(require,module,exports) {
module.exports = require("ea2e64c8f6e246d6").getBundleURL("aNMIV") + "tijera.e4d05bec.png" + "?" + Date.now();

},{"ea2e64c8f6e246d6":"lgJ39"}],"axRwL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "botonAzulInit", ()=>botonAzulInit);
function botonAzulInit() {
    class BotonAzul extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.texto = this.textContent;
            this.render();
        }
        render() {
            this.shadow.innerHTML = `
                <button class="boton__azul">${this.texto}</button>
                
            `;
            const style = document.createElement("style");
            style.textContent = `
                .boton__azul{
                       width: 320px;
                       height: 87px;
                       background-color: #006CFC;
                       border: solid 6px #001997;
                       border-radius: 6px;
                       color: white;
                       font-size: 45px;
                       font-weight: 400;
                       font-family: "Odibee Sans";
                       letter-spacing: 4px;
                       margin-top: 20px;
                }
               
            `;
            this.shadow.append(style);
        }
    }
    customElements.define("boton-azul-el", BotonAzul);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3A5fb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "botonesPptConEventoInit", ()=>botonesPptConEventoInit);
var _piedraPng = require("../imgs/piedra.png");
var _piedraPngDefault = parcelHelpers.interopDefault(_piedraPng);
var _papelPng = require("../imgs/papel.png");
var _papelPngDefault = parcelHelpers.interopDefault(_papelPng);
var _tijeraPng = require("../imgs/tijera.png");
var _tijeraPngDefault = parcelHelpers.interopDefault(_tijeraPng);
var _state = require("../state");
function botonesPptConEventoInit() {
    class BotonesPptConEvento extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.ppt = this.getAttribute("ppt");
            this.jugador = this.getAttribute("player");
            this.objetoPpt = {
                piedra: (0, _piedraPngDefault.default),
                papel: (0, _papelPngDefault.default),
                tijera: (0, _tijeraPngDefault.default)
            };
            this.render();
        }
        render() {
            this.shadow.innerHTML = `
                <button class="boton__ppt ">
                    <img src="${this.objetoPpt[this.ppt]}" class="boton__ppt-img">
                </button>
                
            `;
            const botonConEvento = this.shadow.querySelector(".boton__ppt");
            botonConEvento?.addEventListener("click", ()=>{
                (0, _state.state).setJugada(`${this.ppt}`);
            });
            if (this.jugador == "maquina__play") {
                const button = this.shadow.querySelector(".boton__ppt");
                button?.classList.add("maquina__play");
            }
            const style = document.createElement("style");
            style.textContent = `
                .boton__ppt{
                        border: none;
                        cursor: pointer; 
                }
                .boton__ppt-img{
                    height: 150px;
                }
                .boton__ppt-img:hover{
                      height: 185px;   
                }
               .maquina__play{
                     margin-top: 65px;
                    transform: rotate(180deg);
               }
                .maquina__play img{
                 transform: scale(2);
               }
              
            `;
            this.shadow.append(style);
        }
    }
    customElements.define("botones-ppt-con-evento-el", BotonesPptConEvento);
}

},{"../imgs/piedra.png":"b00NV","../imgs/papel.png":"dLAxS","../imgs/tijera.png":"aMwF8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../state":"1Yeju"}]},["dZI1r","jeorp"], "jeorp", "parcelRequire0eff")

//# sourceMappingURL=index.b7a05eb9.js.map
