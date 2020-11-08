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
})({"js/basic.js":[function(require,module,exports) {
//Basic JavaScript
(function (basicJavaScript) {
  //1.1 What's your name?
  //Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
  var firstSectionFirstBtn = document.getElementById("task1.1");
  firstSectionFirstBtn.addEventListener("click", function () {
    var userName = prompt('Enter your Name, please');
    alert("Hello, ".concat(userName, "!"));
  }); //1.2 What does your Birth Year?
  //Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

  var firstSectionSecondBtn = document.getElementById("task1.2");
  firstSectionSecondBtn.addEventListener("click", function () {
    var currentYear = 2020;
    var userYearBirth = Number(prompt('Enter your Year of Birth, please', 1992));
    var yourAge = currentYear - userYearBirth;
    alert("You are ".concat(yourAge));
  }); //1.3 What's the perimetr of a square?
  //Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

  var firstSectionThirdBtn = document.getElementById("task1.3");
  firstSectionThirdBtn.addEventListener("click", function () {
    var lengthSquareSide = Number(prompt('Enter length of a square\'s side, please', 0));
    var perimeterSquare = lengthSquareSide * 4;
    alert("The perimeter of a square is ".concat(perimeterSquare));
  }); //1.4 What's area of a circle?
  //Запросите у пользователя радиус окружности и выведите площадь такой окружности.

  var firstSectionFourthBtn = document.getElementById("task1.4");
  firstSectionFourthBtn.addEventListener("click", function () {
    var radiusCircle = Number(prompt('Enter radius of a circle, please', 0));
    var areaCircle = 3.14 * Math.pow(radiusCircle, 2);
    alert("The area of a circle is ".concat(areaCircle));
  }); //1.5 Which distance do you need to keep between cities in km?
  //Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

  var firstSectionFifthBtn = document.getElementById("task1.5");
  firstSectionFifthBtn.addEventListener("click", function () {
    var distance = prompt('Enter distance (in km), please', 0);
    var duration = prompt('Enter duration (in hours)', 0);
    var kmPerHour = distance / duration;
    alert("You should drive ".concat(kmPerHour, " km/hour"));
  }); //1.6 Exchange Rate USD to EUR.
  //Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

  var firstSectionSixthBtn = document.getElementById("task1.6");
  firstSectionSixthBtn.addEventListener("click", function () {
    var dollarAmount = Number(prompt('Enter the amount (in USA dollars), please', 0));
    var euroExchangeRate = 0.84;
    var countEuro = dollarAmount * euroExchangeRate;
    alert("You have ".concat(countEuro, " EUR"));
  }); //1.7 How many files up to 820MB can you upload to your memory stick?
  //Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

  var firstSectionSeventhBtn = document.getElementById("task1.7");
  firstSectionSeventhBtn.addEventListener("click", function () {
    var memoryStickCapacity = prompt('Enter your card capacity (in GB), please', 0);
    var countFiles = memoryStickCapacity / 0.820;
    alert("You can upload ".concat(countFiles, " files up to 820MB"));
  }); //1.8 How many chocolate bars can you buy?
  //Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.

  var firstSectionEighthBtn = document.getElementById("task1.8");
  firstSectionEighthBtn.addEventListener("click", function () {
    var amountOfMoney = prompt('Enter amount of your money, please', 0);
    var priceOfChocolate = prompt('Enter the price of chocolate, please', 0);
    var amountOfChocolate = amountOfMoney / priceOfChocolate;
    var balanceOfMoney = amountOfMoney % priceOfChocolate;

    if (amountOfChocolate > 1) {
      alert("You can buy ".concat(parseInt(amountOfChocolate), " chocolates and your balance is ").concat(balanceOfMoney));
    } else {
      alert("You can buy nothing!");
    }
  }); //1.9 Reverse your number.
  //Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

  var firstSectionNinthBtn = document.getElementById("task1.9");
  firstSectionNinthBtn.addEventListener("click", function () {
    var number = Number(prompt('Enter three-digit numbers to reverse, please', 123));
    var reverse = 0;

    while (number > 0) {
      var x = number % 10;
      reverse = reverse * 10 + x;
      number = parseInt(number / 10);
    }

    alert("Your numbers ".concat(reverse));
  }); //1.10 How much money will you get in 2 months?
  //Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

  var firstSectionTenthBtn = document.getElementById("task1.10");
  firstSectionTenthBtn.addEventListener("click", function () {
    var depositSum = prompt('Enter your deposit sum, please', 0);
    var percentYearDeposit = 0.05;
    var sumForTwoMonths = depositSum * percentYearDeposit * 60 / 365;
    alert("You'll get ".concat(sumForTwoMonths, " in 2 months"));
  });
})(); //Basic JavaScript End
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61566" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/basic.js"], null)
//# sourceMappingURL=/basic.520b471e.js.map