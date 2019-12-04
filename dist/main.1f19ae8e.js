// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin{ \n    position: fixed;\n    top: 50vh;\n    left: 0;\n    background-color: #FEE433;\n    width:100%;\n    height: 50vh;\n}\n.face{\nmargin-left:auto;\nmargin-right: auto;\nmargin-top:50px;\npadding-left: 10px;\nposition: relative;\n}\n.eye{\nwidth: 50px;\nheight: 50px;\nborder:solid 2px ;\nborder-radius: 50%;\nposition: absolute;\nbackground-color: #2E2E2E;\n}\n.eye::after{\n    position: absolute;\n    top: 5px;\n    left:10px;\n    content: \"\";\n    display: block;\n    width: 20px;\n    height: 20px;\n    background-color: #fff;\n    border-radius: 50%;\n    border:solid 2px ;\n    \n}\n.eye.left{\nright: 50%;\nmargin-right: 90px;\n}\n.eye.right{\nleft: 50%;\nmargin-left: 90px;\n}\n.nose{\n    width: 12px;\n    height: 12px;\n    background-color: #000;\n    border-radius: 50px 0 0 0;\n    transform: translateX(-13px) translateY(10px) rotate(45deg);\n    transform-origin: bottom right;\n    position: absolute;\n    top: 28px;\n    left: 50%;\n    margin-right:15px ;\n   \n}\n.lip{\n    position: absolute;\n    width: 150px;\n    height: 110px;\n    position: absolute;\n    top: 65px;\n    left: 50%;\n    transform: translateX(-50%);\n    overflow: hidden;\n\n}\n.lip-up{\n    width: 80px;\n    height: 25px;\n    border: solid#000 2px;\n    position: absolute;\n    top: 10px;\n    z-index: 3;\n    background-color: #FEE433;\n\n}\n.lip-up.left{\n    right: 50%;\n    margin-left: 10px;\n    border-top:none ;\n    border-right:none ;\n    border-bottom-left-radius: 40px 25px;\n    transform: rotate(-20deg) translateX(7px);\n    transform-origin: left bottom;\n}\n.lip-up.right{\n    left: 50%;\n    border-top:none ;\n    border-left:none ;\n    border-bottom-right-radius: 40px 25px;\n    transform: rotate(20deg) translateX(-7px);\n    transform-origin: right bottom;\n}\n.mouth-down .tongue{\n    width: 300px;\n    height: 3500px;\n    background-color: #990513;\n    border:solid 1px #2E2E2E;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    border-radius:200px/2000px;\n    overflow: hidden;\n}\n.mouth-down .tongue .tongue-shadow{\n    width:100px;\n    height: 90px;\n    background-color: #fc4a62;\n    border-radius: 50%;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 0;\n}\n.cheek{\n    width: 70px;\n    height: 70px;\n    border:solid 2px ;\n    border-radius: 50%;\n    position: absolute;\n    top: 80px;\n    background-color: #FC0D1C;\n    border:solid 2px black;\n}\n.cheek.left{\n    right: 50%;\n    /* background-color: red; */\n    margin-right: 120px;\n    \n    }\n.cheek.right{\n    left: 50%;\n    /* background-color:blue; */\n    margin-left: 120px;\n    }\n    @keyframes wave{\n        0%{\n            transform: rotate(45deg);\n        }\n        33%{\n            transform:  rotate(50deg);\n        }\n        66%{\n            transform: rotate(45deg);\n        }\n        100%{\n            transform:  rotate(40deg);\n        }\n    }\n    .nose:hover{\n        transform-origin: center bottom;\n        animation: wave 300ms infinite linear;\n      }    \n";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _style = _interopRequireDefault(require("./style.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var length = _style.default.length;
var runTime = 100;
var n = 0;

var play = function play() {
  return setInterval(run, runTime);
};

var pause = function pause() {
  window.clearInterval(id);
};

var run = function run() {
  if (n < length) {
    n += 1;

    var content = _style.default.substring(0, n);

    codeStyle.innerHTML = content;
    codeHtml.innerText = content;
    codeHtml.scrollTop = 999999;
  } else {
    clearInterval(id);
    return;
  }
};

var id = play();

btnPause.onclick = function () {
  pause();
};

btnPlay.onclick = function () {
  id = play();
};

fastPlay.onclick = function () {
  runTime = 0;
  pause();
  id = play();
};

slowPlay.onclick = function () {
  runTime = 200;
  pause();
  id = play();
};
},{"./style.js":"style.js"}],"../../../software/nodejs/node_cache/_npx/17432/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57041" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../software/nodejs/node_cache/_npx/17432/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map