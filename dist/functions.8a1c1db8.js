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
})({"js/functions.js":[function(require,module,exports) {
//Functions
(function (functions) {
  //4.1 Write 2 numbers to get -1 if the first is less than the second; 1 - if the first is greater than the second; and 0 - if the numbers are equal.
  //Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
  var fourthSectionFirstBtn = document.getElementById("task4.1");
  fourthSectionFirstBtn.addEventListener("click", function () {
    var firstNumber = prompt('Enter the first number, please', 2);
    var secondNumber = prompt('Enter the second number, please', 4);

    function comparison(a, b) {
      if (Number(a) < Number(b)) return -1;else if (a > b) return 1;else return 0;
    }

    alert(comparison(firstNumber, secondNumber));
  }); //4.2 Write a number to find out the factorial of a given number.
  //Написать функцию, которая вычисляет факториал переданного ей числа.

  var fourthSectionSecondBtn = document.getElementById("task4.2");
  fourthSectionSecondBtn.addEventListener("click", function () {
    var number = Number(prompt('Enter any number', 5));

    function factorial(number) {
      return number != 1 ? number * factorial(number - 1) : 1;
    }

    alert(factorial(number));
  }); //4.3 Write three separate numbers to get them in one number.
  //Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

  var fourthSectionThirdBtn = document.getElementById("task4.3");
  fourthSectionThirdBtn.addEventListener("click", function () {
    var firstNumber = prompt('Enter the first number, please', 2);
    var secondNumber = prompt('Enter the second number', 3);
    var thirdNumber = prompt('Enter the third number, please', 4);

    function joinNumbers(a, b, c) {
      var join = [a, b, c].join("");
      return Number(join);
    }

    alert(joinNumbers(firstNumber, secondNumber, thirdNumber));
  }); //4.4 Write down the length and width of the rectangle to find out its area.
  //Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

  var fourthSectionFourthBtn = document.getElementById("task4.4");
  fourthSectionFourthBtn.addEventListener("click", function () {
    var rectangleLength = Number(prompt("Enter rectangle length", 5));
    var rectangleWidth = Number(prompt("Enter rectangle width", 8));

    function area(a, b) {
      var size = 0;
      var perimiter = 0;

      if (a === undefined || b === 0) {
        perimiter = b * b;
        return perimiter;
      } else if (b === undefined || b === 0) {
        perimiter = a * a;
        return perimiter;
      } else if (a < 0 || b < 0) {
        return "incorrect value";
      } else {
        size = a * b;
        return size;
      }
    }

    alert(area(rectangleLength, rectangleWidth));
  }); //4.5 Write the number to find out if this number is perfect.
  //Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

  var fourthSectionFifthBtn = document.getElementById("task4.5");
  fourthSectionFifthBtn.addEventListener("click", function () {
    var number = Number(prompt('Enter any number, please', 5));

    function perfectNumber(a) {
      var result = 0;

      for (var b = 1; b < a; b++) {
        if (a % b === 0) {
          result += b;
        }
      }

      if (result === a) return 'The number is perfect!';else return 'The number is not perfect!';
    }

    alert(perfectNumber(number));
  }); //4.6 (WARNING ! ! !) Write the minimum and maximum values for the range to check if there are perfect numbers.
  //Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

  var fourthSectionSixthBtn = document.getElementById("task4.6");
  fourthSectionSixthBtn.addEventListener("click", function () {
    var firstNumber = Number(prompt('Enter the minimum value, please', 4));
    var secondNumber = Number(prompt('Enter the maximum value, please', 8));

    function perfectNumberInRange(a, b) {
      var arrResult = new Array();
      var resultString = "";

      for (var c = a; c <= b; c++) {
        if (perfectNumberInRange(c) === 'The number is perfect' && c != 0) {
          arrResult.push(c);
        }
      }

      arrResult.forEach(function (element) {
        resultString += element + " ";
      });
      return resultString;
    }

    alert(perfectNumberInRange(firstNumber, secondNumber));
  }); //4.7 Write the time (hours, minutes, seconds) to see it on the screen in the format "hh: mm: ss".
  //Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

  var fourthSectionSeventhBtn = document.getElementById("task4.7");
  fourthSectionSeventhBtn.addEventListener("click", function () {
    var hours = Number(prompt('Enter hours, please', 7));
    var minutes = Number(prompt('Enter minutes, please', 25));
    var seconds = Number(prompt('Enter seconds, please', 15));

    function SetTime(hh) {
      var mm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ss = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var date = new Date();
      date.setHours(hh);
      date.setMinutes(mm);
      date.setSeconds(ss);
      var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      return date.toLocaleString("en-US", options);
    }

    alert(SetTime(hours, minutes, seconds));
  }); //4.8 Write hours, minutes and seconds to check how much seconds.
  //Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

  var fourthSectionEighthBtn = document.getElementById("task4.8");
  fourthSectionEighthBtn.addEventListener("click", function () {
    var hours = Number(prompt('Enter hours, please', 18));
    var minutes = Number(prompt('Enter minutes, please', 32));
    var seconds = Number(prompt('Enter seconds, please', 04));

    function ToSeconds(hh) {
      var mm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var ss = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return 3600 * hh + 60 * mm + ss;
    }

    alert(ToSeconds(hours, minutes, seconds) + " ss");
  }); //4.9 Write the number of seconds to check how many hours, minutes and seconds in the format "hh: mm: ss".
  //Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

  var fourthSectionNinthBtn = document.getElementById("task4.9");
  fourthSectionNinthBtn.addEventListener("click", function () {
    var number = Number(prompt('Enter seconds, please', 55555));

    function getSecToHours() {
      var hours = Math.floor(number / 60 / 60);
      var minutes = Math.floor(number / 60) - hours * 60;
      var seconds = number % 60;
      return alert("".concat(hours, ":").concat(minutes, ":").concat(seconds, " hh:mm:ss"));
    }

    getSecToHours();
  }); //4.10 Write two dates to check the difference between it.
  //Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».

  var fourthSectionTenthBtn = document.getElementById("task4.10");
  fourthSectionTenthBtn.addEventListener("click", function () {
    var firstDate = prompt("Enter the first Date: hours, minutes and seconds into the format hh:mm:ss", "7, 23, 15").split(", ");
    var secondDate = prompt("Enter the second Date: hours, minutes and seconds into the format hh:mm:ss", "2, 44, 30").split(", ");

    function toSeconds(hour) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var sec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return 3600 * hour + 60 * min + Number(sec);
    }

    firstDate = toSeconds(firstDate[0], firstDate[1], firstDate[2]);
    secondDate = toSeconds(secondDate[0], secondDate[1], secondDate[2]);
    var newDate = firstDate - secondDate;

    function secondsToHours() {
      var sec = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var hours = Math.floor(sec / 60 / 60);
      var minutes = Math.floor(sec / 60) - hours * 60;
      var seconds = sec % 60;
      var formatted = [hours.toString().padStart(2, '0'), minutes.toString().padStart(2, '0'), seconds.toString().padStart(2, '0')].join(':');
      return formatted;
    }

    alert(secondsToHours(newDate));
  });
})(); //Functions End
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/functions.js"], null)
//# sourceMappingURL=/functions.8a1c1db8.js.map