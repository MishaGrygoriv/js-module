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
})({"index.js":[function(require,module,exports) {
(function () {
  //Basic JavaScript
  //1.1 What's your name?
  var firstSectionFirstBtn = document.getElementById("task1.1");
  firstSectionFirstBtn.addEventListener("click", function () {
    var userName = prompt('Enter your Name, please');
    alert("Hello, ".concat(userName, "!"));
  }); //1.2 What does your Birth Year?

  var firstSectionSecondBtn = document.getElementById("task1.2");
  firstSectionSecondBtn.addEventListener("click", function () {
    var currentYear = 2020;
    var userYearBirth = Number(prompt('Enter your Year of Birth, please', 1992));
    var yourAge = currentYear - userYearBirth;
    alert("You are ".concat(yourAge));
  }); //1.3 What's the perimetr of a square?

  var firstSectionThirdBtn = document.getElementById("task1.3");
  firstSectionThirdBtn.addEventListener("click", function () {
    var lengthSquareSide = Number(prompt('Enter length of a square\'s side, please', 0));
    var perimeterSquare = lengthSquareSide * 4;
    alert("The perimeter of a square is ".concat(perimeterSquare));
  }); //1.4 What's area of a circle?

  var firstSectionFourthBtn = document.getElementById("task1.4");
  firstSectionFourthBtn.addEventListener("click", function () {
    var radiusCircle = Number(prompt('Enter radius of a circle, please', 0));
    var areaCircle = 3.14 * Math.pow(radiusCircle, 2);
    alert("The area of a circle is ".concat(areaCircle));
  }); //1.5 Which distance do you need to keep between cities in km?

  var firstSectionFifthBtn = document.getElementById("task1.5");
  firstSectionFifthBtn.addEventListener("click", function () {
    var distance = prompt('Enter distance (in km), please', 0);
    var duration = prompt('Enter duration (in hours)', 0);
    var kmPerHour = distance / duration;
    alert("You should drive ".concat(kmPerHour, " km/hour"));
  }); //1.6 Exchange Rate USD to EUR.

  var firstSectionSixthBtn = document.getElementById("task1.6");
  firstSectionSixthBtn.addEventListener("click", function () {
    var dollarAmount = Number(prompt('Enter the amount (in USA dollars), please', 0));
    var euroExchangeRate = 0.84;
    var countEuro = dollarAmount * euroExchangeRate;
    alert("You have ".concat(countEuro, " EUR"));
  }); //1.7 How many files up to 820MB can you upload to your memory stick?

  var firstSectionSeventhBtn = document.getElementById("task1.7");
  firstSectionSeventhBtn.addEventListener("click", function () {
    var memoryStickCapacity = prompt('Enter your card capacity (in GB), please', 0);
    var countFiles = memoryStickCapacity / 0.820;
    alert("You can upload ".concat(countFiles, " files up to 820MB"));
  }); //1.8 How many chocolate bars can you buy?

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

  var firstSectionTenthBtn = document.getElementById("task1.10");
  firstSectionTenthBtn.addEventListener("click", function () {
    var depositSum = prompt('Enter your deposit sum, please', 0);
    var percentYearDeposit = 0.05;
    var sumForTwoMonths = depositSum * percentYearDeposit * 60 / 365;
    alert("You'll get ".concat(sumForTwoMonths, " in 2 months"));
  }); //Basic JavaScript End
  /////////////////////////////////////////////////////////////////////////////////
  //Types JavaScript
  //2.1 How old are you?

  var secondSectionFirstBtn = document.getElementById("task2.1");
  secondSectionFirstBtn.addEventListener("click", function () {
    var userAge = Number(prompt('Enter your age, please', 28));

    if (0 <= userAge && userAge < 2) {
      alert("you're a baby");
    } else if (2 <= userAge && userAge < 12) {
      alert("you're a child");
    } else if (12 <= userAge && userAge < 18) {
      alert("you're a teenager");
    } else if (18 <= userAge && userAge < 60) {
      alert("you're an adult");
    } else if (userAge >= 60) {
      alert("you're a pensioner");
    }
  }); //2.2 Number Symbols (from 0 - 9).

  var secondSectionSecondBtn = document.getElementById("task2.2");
  secondSectionSecondBtn.addEventListener("click", function () {
    var numberSymbol = Number(prompt('Enter number from 0 - 9, please', 0));

    switch (true) {
      case numberSymbol == 1:
        alert("your symbol is \"!\"");
        break;

      case numberSymbol == 2:
        alert("your symbol is \"@\"");
        break;

      case numberSymbol == 3:
        alert("your symbol is \"#\"");
        break;

      case numberSymbol == 4:
        alert("your symbol is \"$\"");
        break;

      case numberSymbol == 5:
        alert("your symbol is \"%\"");
        break;

      case numberSymbol == 6:
        alert("your symbol is \"^\"");
        break;

      case numberSymbol == 7:
        alert("your symbol is \"&\"");
        break;

      case numberSymbol == 8:
        alert("your symbol is \"*\"");
        break;

      case numberSymbol == 9:
        alert("your symbol is \"(\"");
        break;

      case numberSymbol == 0:
        alert("your symbol is \")\"");
        break;

      default:
        alert("try again!");
        break;
    }
  }); //2.3 Three Digit Numbers

  var secondSectionThirdBtn = document.getElementById("task2.3");
  secondSectionThirdBtn.addEventListener("click", function () {
    var threeDigitNumbers = prompt('Enter three any numbers, please', 123);
    threeDigitNumbers[0] === threeDigitNumbers[1] || threeDigitNumbers[1] === threeDigitNumbers[2] || threeDigitNumbers[2] === threeDigitNumbers[0] ? alert("found same numbers") : alert("no same numbers");
  }); //2.4 Check Which Years are Leap Years!

  var secondSectionFourthBtn = document.getElementById("task2.4");
  secondSectionFourthBtn.addEventListener("click", function () {
    var leapYear = Number(prompt('Enter which year do you want to check, please', 2020));

    if (leapYear % 400 === 0 || leapYear % 4 === 0 && leapYear % 100 != 0) {
      alert("yes, ".concat(leapYear, " it's a Leap Year!"));
    } else {
      alert("no, ".concat(leapYear, " it's not a Leap Year!"));
    }
  }); //2.5 Check your number is a palindrome number or not?

  var secondSectionFifthBtn = document.getElementById("task2.5");
  secondSectionFifthBtn.addEventListener("click", function () {
    var palindromeNumber = prompt("Enter any five numbers, please", 12345);
    palindromeNumber[0] == palindromeNumber[4] && palindromeNumber[1] == palindromeNumber[3] ? alert("".concat(palindromeNumber, " is a palindromic number!")) : alert("".concat(palindromeNumber, " is not a palindromic number!"));
  }); //2.6 Convert USD to EUR, UAH or AZN.

  var secondSectionSixthBtn = document.getElementById("task2.6");
  secondSectionSixthBtn.addEventListener("click", function () {
    var amountInDollars = prompt("Enter amount is USD, please", 0);
    var currency = prompt("Enter number of required currency: EUR = 1; UAH = 2; AZN = 3");

    switch (currency) {
      case "1":
        alert("".concat(amountInDollars * 0.8, " EUR") + " ");
        break;

      case "2":
        alert("".concat(amountInDollars * 28.29, " UAH") + " ");
        break;

      case "3":
        alert("".concat(amountInDollars * 1.7, " AZN") + " ");
        break;

      default:
        alert("Try Again!");
        break;
    }
  }); //2.7 Check what discount you can get from the purchase!

  var secondSectionSeventhBtn = document.getElementById("task2.7");
  secondSectionSeventhBtn.addEventListener("click", function () {
    var amountOfMoney = Number(prompt('Enter the amount of purchases, please', 0));

    if (amountOfMoney >= 0 && amountOfMoney < 200) {
      alert('sorry, no discount for you!');
    } else if (amountOfMoney >= 200 && amountOfMoney <= 300) {
      alert(amountOfMoney - amountOfMoney * 0.03 + ' ' + 'with discount');
    } else if (amountOfMoney > 300 && amountOfMoney <= 500) {
      alert(amountOfMoney - amountOfMoney * 0.05 + ' ' + 'with discount');
    } else if (amountOfMoney > 500) {
      alert(amountOfMoney - amountOfMoney * 0.05 + ' ' + 'with discount');
    } else {
      alert('Try Again!');
    }
  }); //2.8 Can a Circle fit in a Square?

  var secondSectionEighthBtn = document.getElementById("task2.8");
  secondSectionEighthBtn.addEventListener("click", function () {
    var circleLenght = Number(prompt("Enter lenght of a circle, please", 0));
    var squarePerimeter = Number(prompt("Enter perimeter of a square, please"));
    var circleRadius = circleLenght / (2 * 3.1415);
    var squareSide = squarePerimeter / 4;
    circleRadius < squareSide / 2 ? alert('Circle can fit in a Square') : alert('Circle can not fit in a Square');
  }); //2.9 Try to score maximum points by answering three questions.

  var secondSectionNinthBtn = document.getElementById("task2.9");
  secondSectionNinthBtn.addEventListener("click", function () {
    var firstQuestion = prompt('Which is the smallest continent in the world?', "Asia, Africa, Australia");
    var secondQuestion = prompt('How many weeks are there in one year?', "48, 64, 52");
    var thirdQuestion = prompt('How many months of the year have 31 days?', "7, 5, 9");
    var points = 0;

    if (firstQuestion == "Australia") {
      points += 2;
    }

    if (secondQuestion == 52) {
      points += 2;
    }

    if (thirdQuestion == 7) {
      points += 2;
    }

    points >= 2 ? alert("Congratulations! you have got ".concat(points, " points.")) : alert("Unfortunately, you have't got any points.");
  }); //2.10 Write a date (year, month, day)!

  var secondSectionTenthBtn = document.getElementById("task2.10");
  secondSectionTenthBtn.addEventListener("click", function () {
    var date = new Date(prompt('Enter date in (yyyy-mm-dd) format'));
    date.setDate(date.getDate() + 1);
    alert("tomorrow is ".concat(date));
  }); //Types JavaScript End
})();
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56004" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/js_module_cobra.e31bb0bc.js.map