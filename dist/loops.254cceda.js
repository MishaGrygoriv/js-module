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
})({"js/loops.js":[function(require,module,exports) {
function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Loops
(function (loops) {
  //3.1 Calculate the sum of all numbers in a given range.
  //Подсчитать сумму всех чисел в заданном пользователем диапазоне.
  var thirdSectionFirstBtn = document.getElementById("task3.1");
  thirdSectionFirstBtn.addEventListener("click", function () {
    var startNumber = Number(prompt('Enter the starting number, please', 1));
    var endNumber = Number(prompt('Enter the ending number, please', 10));
    var sum = 0;

    while (startNumber <= endNumber) {
      sum += startNumber;
      startNumber++;
    }

    alert("".concat(sum, " the sum of all numbers in a given range"));
  }); //3.2 Find the greatest common factor.
  //Запросить 2 числа и найти только наибольший общий делитель.

  var thirdSectionSecondBtn = document.getElementById("task3.2");
  thirdSectionSecondBtn.addEventListener("click", function () {
    var firstNumber = Number(prompt('Enter the first number, please', 5));
    var secondNumber = Number(prompt('Enter the second number, please', 10));
    var result = 0;

    for (var i = 1; i <= secondNumber; i++) {
      if (firstNumber % i === 0 && secondNumber % i === 0) {
        result = i;
      }
    }

    alert("The greatest common factor is ".concat(result));
  }); //3.3 Write the number to get all divisors of this number.
  //Запросить у пользователя число и вывести все делители этого числа.

  var thirdSectionThirdBtn = document.getElementById("task3.3");
  thirdSectionThirdBtn.addEventListener("click", function () {
    var divisebleNumber = Number(prompt('Enter any number, please', 10));

    for (var i = 1; i <= divisebleNumber; i++) {
      var a = divisebleNumber % i;

      if (a === 0) {
        alert("All divisors of number ".concat(divisebleNumber, " are ").concat(i));
      }
    }
  }); //3.4 Write any numbers to determine the number of digits.
  //Определить количество цифр в введенном числе.

  var thirdSectionFourthBtn = document.getElementById("task3.4");
  thirdSectionFourthBtn.addEventListener("click", function () {
    var number = Number(prompt('Enter any numbers, please', 12345));
    var i = 0;

    if (number === 0) {
      i++;
    }

    if (number === 1) {
      i = 1;
    }

    while (number > 1) {
      i += 1;
      number /= 10;
    }

    alert("Number of digits are ".concat(i)); // const number = prompt('Enter any numbers, please', 12345);
    // alert(number.length);
  }); //3.5 (WARNING!!!) Write 10 any numbers to find out how many positive, negative, zero, even and odd numbers.
  //Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

  var thirdSectionFifthBtn = document.getElementById("task3.5");
  thirdSectionFifthBtn.addEventListener("click", function () {
    var numbers = Number(prompt('Enter any 10 numbers, please', 1234567891));
    var negativeNumber = 0;
    var positiveNumber = 0;
    var zeroNumber = 0;
    var evenNumber = 0;
    var oddNumber = 0;

    for (var i = 0; i < 10; i++) {
      if (numbers < 0) {
        negativeNumber += 1;
      } else if (numbers > 0) {
        positiveNumber += 1;
      } else if (numbers === 0) {
        zeroNumber += 1;
      } else if (numbers % 2 === 0) {
        evenNumber += 1;
      } else {
        oddNumber += 1;
      }
    }

    alert("You have got: zero numbers = ".concat(zeroNumber, "; negative numbers = ").concat(negativeNumber, "; positive numbers = ").concat(positiveNumber, "; even numbers = ").concat(evenNumber, "; odd numbers = ").concat(oddNumber));
  }); //3.6 Write 2 numbers and a math operator to solve the math problem.
  //Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

  var thirdSectionSixthBtn = document.getElementById("task3.6");
  thirdSectionSixthBtn.addEventListener("click", function () {
    do {
      var firstNumber = Number(prompt('Enter the first number, please', 5));
      var mathOperator = prompt('Enter math operator, please', "+");
      var secondNumber = Number(prompt('Enter the second number, please', 5));

      switch (mathOperator) {
        case '+':
          alert(firstNumber + secondNumber);
          break;

        case '*':
          alert(firstNumber * secondNumber);
          break;

        case '/':
          alert(firstNumber / secondNumber);
          break;

        case '-':
          alert(firstNumber - secondNumber);
          break;

        default:
          break;
      }
    } while (confirm('Do you want to calculate another example?'));
  }); //3.7 Write any numbers and also write how many numbers to move forward.
  //Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

  var thirdSectionSeventhBtn = document.getElementById("task3.7");
  thirdSectionSeventhBtn.addEventListener("click", function () {
    var numbers = prompt('Enter any numbers, please', 12345);
    var moveNumber = Number(prompt('How many numbers to move forward?', 2));
    arr = numbers.split('');

    for (var i = 0; i < moveNumber; i++) {
      arr.push(arr.shift());
    }

    alert(arr.join(_templateObject()));
  }); //3.8 Check what day is it today.
  //Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

  var thirdSectionEighthBtn = document.getElementById("task3.8");
  thirdSectionEighthBtn.addEventListener("click", function () {
    var count = 0;

    do {
      var daysOfTheWeek = [0, 1, 2, 3, 4, 5, 6];
      var day = "";

      switch (daysOfTheWeek[count]) {
        case 0:
          day = "Monday";
          alert("Today is ".concat(day));
          break;

        case 1:
          day = "Tuesday";
          alert("Today is ".concat(day));
          break;

        case 2:
          day = "Wednesday";
          alert("Today is ".concat(day));
          break;

        case 3:
          day = "Thursday";
          alert("Today is ".concat(day));
          break;

        case 4:
          day = "Friday";
          alert("Today is ".concat(day));
          break;

        case 5:
          day = "Saturday";
          alert("Today is ".concat(day));
          break;

        case 6:
          day = "Sunday";
          count -= 7;
          alert("Today is ".concat(day));

        default:
          break;
      }

      ;
      count++;
    } while (confirm("If you wish to see the next day, just click OK!"));
  }); //3.9 Click to get the multiplication table for all numbers from 2 to 9.
  //Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

  var thirdSectionNinthBtn = document.getElementById("task3.9");
  thirdSectionNinthBtn.addEventListener("click", function () {
    var array = new Array();

    for (var i = 2; i <= 9; i++) {
      for (var x = 1; x <= 10; x++) {
        var result = i * x;
        array.push(i + "*" + x + "=" + result);
      }
    }

    var resultString = "";

    for (var _i = 1; _i < array.length; _i++) {
      resultString += array[_i] + "    ";
      if (_i % 4 === 0) resultString += "\n";
    }

    alert("Multiplication Table: \n  ".concat(resultString));
  }); //3.10 Let's play the game "Guess the number". Choose a number from 0 to 100.
  //Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

  var thirdSectionTenthBtn = document.getElementById("task3.10");
  thirdSectionTenthBtn.addEventListener("click", function () {
    alert('Guess a number between 0 to 100');
    var firstNumber = 0;
    var lastNumber = 100;
    var answer = 1;
    var symbol = '';
    answer = Math.floor(firstNumber + (lastNumber - firstNumber) / 2);

    while (answer !== false) {
      symbol = prompt("your number is > ".concat(answer, ", < ").concat(answer, ", or = ").concat(answer, "?"), "> < =");

      switch (symbol) {
        case '>':
          firstNumber = answer;
          answer = Math.floor(firstNumber + (lastNumber - firstNumber) / 2);
          break;

        case '<':
          lastNumber = answer;
          answer = Math.floor(firstNumber + (lastNumber - firstNumber) / 2);
          break;

        case '=':
          alert("I'm sure, your number is ".concat(answer));
          answer = confirm('Do you want to try again?');
          break;

        case null:
          alert(':(');
          answer = false;
          break;

        default:
          alert('incorrect input! Try again=)');
          break;
      }
    }
  });
})(); //Loops End
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/loops.js"], null)
//# sourceMappingURL=/loops.254cceda.js.map