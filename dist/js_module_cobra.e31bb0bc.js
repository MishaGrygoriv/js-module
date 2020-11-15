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
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.basic = void 0;

//Basic JavaScript
var basic = function basic() {
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
}; //Basic JavaScript End


exports.basic = basic;
},{}],"js/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.types = void 0;

//Types
var types = function types() {
  //2.1 How old are you?
  //Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
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
  //Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

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
  //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

  var secondSectionThirdBtn = document.getElementById("task2.3");
  secondSectionThirdBtn.addEventListener("click", function () {
    var threeDigitNumbers = prompt('Enter three any numbers, please', 123);
    threeDigitNumbers[0] === threeDigitNumbers[1] || threeDigitNumbers[1] === threeDigitNumbers[2] || threeDigitNumbers[2] === threeDigitNumbers[0] ? alert("found same numbers") : alert("no same numbers");
  }); //2.4 Check Which Years are Leap Years!
  //Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

  var secondSectionFourthBtn = document.getElementById("task2.4");
  secondSectionFourthBtn.addEventListener("click", function () {
    var leapYear = Number(prompt('Enter which year do you want to check, please', 2020));

    if (leapYear % 400 === 0 || leapYear % 4 === 0 && leapYear % 100 != 0) {
      alert("yes, ".concat(leapYear, " it's a Leap Year!"));
    } else {
      alert("no, ".concat(leapYear, " it's not a Leap Year!"));
    }
  }); //2.5 Check your number is a palindrome number or not?
  //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

  var secondSectionFifthBtn = document.getElementById("task2.5");
  secondSectionFifthBtn.addEventListener("click", function () {
    var palindromeNumber = prompt("Enter any five numbers, please", 12345);
    palindromeNumber[0] == palindromeNumber[4] && palindromeNumber[1] == palindromeNumber[3] ? alert("".concat(palindromeNumber, " is a palindromic number!")) : alert("".concat(palindromeNumber, " is not a palindromic number!"));
  }); //2.6 Convert USD to EUR, UAH or AZN.
  //Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

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
  //Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

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
  //Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

  var secondSectionEighthBtn = document.getElementById("task2.8");
  secondSectionEighthBtn.addEventListener("click", function () {
    var circleLenght = Number(prompt("Enter lenght of a circle, please", 0));
    var squarePerimeter = Number(prompt("Enter perimeter of a square, please"));
    var circleRadius = circleLenght / (2 * 3.1415);
    var squareSide = squarePerimeter / 4;
    circleRadius < squareSide / 2 ? alert('Circle can fit in a Square') : alert('Circle can not fit in a Square');
  }); //2.9 Try to score maximum points by answering three questions.
  //Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

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
  //Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

  var secondSectionTenthBtn = document.getElementById("task2.10");
  secondSectionTenthBtn.addEventListener("click", function () {
    var date = new Date(prompt('Enter date in (yyyy-mm-dd) format, please'));
    date.setDate(date.getDate() + 1);
    alert("tomorrow is ".concat(date));
  });
}; //Types End


exports.types = types;
},{}],"js/loops.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loops = void 0;

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//Loops
var loops = function loops() {
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
  }); //3.5 Write 10 any numbers to find out how many positive, negative, zero, even and odd numbers.
  //Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

  var thirdSectionFifthBtn = document.getElementById("task3.5");
  thirdSectionFifthBtn.addEventListener("click", function () {
    var negativeNumber = 0;
    var positiveNumber = 0;
    var zeroNumber = 0;
    var evenNumber = 0;
    var oddNumber = 0;

    for (var i = 1; i <= 10; i++) {
      var numbers = Number(prompt("Enter any 10 numbers, please! Example: number ".concat(i)));

      if (numbers === 0) {
        zeroNumber += 1;
      } else if (numbers < 0) {
        negativeNumber += 1;
      } else {
        positiveNumber += 1;
      }

      if (numbers % 2 === 0) {
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
}; //Loops End


exports.loops = loops;
},{}],"js/functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.functions = void 0;

//Functions
var functions = function functions() {
  //4.1 Write 2 numbers to get -1 if the first is less than the second; 1 - if the first is greater than the second; and 0 - if the numbers are equal.
  //Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
  var fourthSectionFirstBtn = document.getElementById("task4.1");
  fourthSectionFirstBtn.addEventListener("click", function () {
    var firstNumber = prompt('Enter the first number, please', "2");
    var secondNumber = prompt('Enter the second number, please', "4");

    function comparison(a, b) {
      if (Number(a) < Number(b)) return -1;else if (a > b) return 1;else return 0;
    }

    alert(comparison(firstNumber, secondNumber));
  }); //4.2 Write a number to find out the factorial of a given number.
  //Написать функцию, которая вычисляет факториал переданного ей числа.

  var fourthSectionSecondBtn = document.getElementById("task4.2");
  fourthSectionSecondBtn.addEventListener("click", function () {
    var number = Number(prompt('Enter any number', "5"));

    function factorial(number) {
      return number != 1 ? number * factorial(number - 1) : 1;
    }

    alert(factorial(number));
  }); //4.3 Write three separate numbers to get them in one number.
  //Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

  var fourthSectionThirdBtn = document.getElementById("task4.3");
  fourthSectionThirdBtn.addEventListener("click", function () {
    var firstNumber = prompt('Enter the first number, please', "2");
    var secondNumber = prompt('Enter the second number', "3");
    var thirdNumber = prompt('Enter the third number, please', "4");

    function joinNumbers(a, b, c) {
      var join = [a, b, c].join("");
      return Number(join);
    }

    alert(joinNumbers(firstNumber, secondNumber, thirdNumber));
  }); //4.4 Write down the length and width of the rectangle to find out its area.
  //Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

  var fourthSectionFourthBtn = document.getElementById("task4.4");
  fourthSectionFourthBtn.addEventListener("click", function () {
    var rectangleLength = Number(prompt("Enter rectangle length", "5"));
    var rectangleWidth = Number(prompt("Enter rectangle width", "8"));

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
    var number = Number(prompt('Enter any number, please', "5"));

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
    var firstNumber = Number(prompt('Enter the minimum value, please', "4"));
    var secondNumber = Number(prompt('Enter the maximum value, please', "8"));

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
    var hours = Number(prompt('Enter hours, please', "7"));
    var minutes = Number(prompt('Enter minutes, please', "25"));
    var seconds = Number(prompt('Enter seconds, please', "15"));

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
    var hours = Number(prompt('Enter hours, please', "18"));
    var minutes = Number(prompt('Enter minutes, please', "32"));
    var seconds = Number(prompt('Enter seconds, please', "04"));

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
}; //Functions End


exports.functions = functions;
},{}],"js/objects.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.objects = void 0;

//Objects
var objects = function objects() {
  //5.1 Enter the distance of the route in km to know how many hours your trip will take.
  //Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
  //Функция для вывода на экран информации об автомобиле;
  //Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
  var firstSectionFirstBtn = document.getElementById("task5.1");
  firstSectionFirstBtn.addEventListener("click", function () {
    var carInfo = {
      manufacturer: "BMW",
      model: "X6",
      modelYear: "2019",
      averageSpeed: "100",
      bodyColor: "Black"
    };

    function showInfo() {
      var info = ["Car Info:\n              Manufacturer: ".concat(carInfo.manufacturer, " \n              Model: ").concat(carInfo.model, "\n              Model Year: ").concat(carInfo.modelYear, "\n              Average Speed: ").concat(carInfo.averageSpeed, "\n              Body Color: ").concat(carInfo.bodyColor)];
      return info;
    }

    alert(showInfo());
    var distance = Number(prompt("Enter the distance of your route in km, please", 100));

    var roadTime = function roadTime(a) {
      var distanceTime = a / carInfo.averageSpeed;
      alert("You need ".concat(distanceTime, " hour(s) to overcome the distance"));
      var breakTime = Math.floor(distanceTime / 4);
      alert("".concat(breakTime, " time(s) you need to take a break for 1 hour"));
      var totalTime = distanceTime + breakTime + ' hour(s) will take your trip!';
      return totalTime;
    };

    alert(roadTime(distance));
  }); //5.2 Enter 2 numerator numbers and 2 denominator numbers.
  //Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
  //Функция сложения 2-х объектов-дробей;
  //Функция вычитания 2-х объектов-дробей;
  //Функция умножения 2-х объектов-дробей;
  //Функция деления 2-х объектов-дробей;
  //Функция сокращения объекта-дроби.

  var firstSectionSecondBtn = document.getElementById("task5.2");
  firstSectionSecondBtn.addEventListener("click", function () {
    var firstNumerator = +prompt("enter numerator please", 4);
    var firstDenominator = +prompt("enter denominator, please", 12);
    var secondNumerator = +prompt("enter numerator please", 14);
    var secondDenominator = +prompt("enter denominator, please", 22);
    var firstFraction = {
      firstNumerator: firstNumerator,
      firstDenominator: firstDenominator
    };
    var secondFraction = {
      secondNumerator: secondNumerator,
      secondDenominator: secondDenominator
    };

    function lessDividerOfTwoNumbers(x, y) {
      if (typeof x !== "number" || typeof y !== "number") return false;
      return !x || !y ? 0 : Math.abs(x * y / biggerDividerOfTwoNumbers(x, y));
    }

    function biggerDividerOfTwoNumbers(x, y) {
      x = Math.abs(x);
      y = Math.abs(y);

      while (y) {
        var t = y;
        y = x % y;
        x = t;
      }

      return x;
    }

    var commonDenom = lessDividerOfTwoNumbers(firstFraction.firstDenominator, secondFraction.secondDenominator);

    function plusFraction() {
      var resultPlus = commonDenom / firstFraction.firstDenominator * firstFraction.firstNumerator + commonDenom / secondFraction.secondDenominator * secondFraction.secondNumerator;
      return resultPlus;
    }

    alert("Plus fraction = ".concat(plusFraction(), ";"));

    function minusFraction() {
      var resultMinus = commonDenom / firstFraction.firstDenominator * firstFraction.firstNumerator - commonDenom / secondFraction.secondDenominator * secondFraction.secondNumerator;
      return resultMinus;
    }

    alert("Minus fraction = ".concat(minusFraction(), ";"));

    function multiplicationFraction() {
      var result = firstFraction.firstNumerator * secondFraction.secondNumerator / (firstFraction.firstDenominator * secondFraction.secondDenominator);
      return result;
    }

    alert("Multiplication Fraction = ".concat(multiplicationFraction(), ";"));

    function divisionFraction() {
      var result = firstFraction.firstNumerator * secondFraction.secondDenominator / (firstFraction.firstDenominator * secondFraction.secondNumerator);
      return result;
    }

    alert("Division Fraction = ".concat(divisionFraction(), ";"));
  }); //5.3 Enter how many seconds, minutes, and hours you want to add to your time.
  //Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
  //Функция вывода времени на экран;
  //Функция изменения времени на переданное количество секунд;
  //Функция изменения времени на переданное количество минут;
  //Функция изменения времени на переданное количество часов. 
  //Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

  var firstSectionThirdBtn = document.getElementById("task5.3");
  firstSectionThirdBtn.addEventListener("click", function () {
    var time = {
      hours: 11,
      minutes: 25,
      seconds: 30
    };

    function setTime() {
      var newTime = new Date();
      newTime.setHours(time.hours, time.minutes, time.seconds);
      return newTime.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    alert(setTime());
    var seconds = Number(prompt("How many seconds do you want to add?", 30));

    function addSeconds() {
      var newTime = new Date();
      newTime.setHours(time.hours, time.minutes, time.seconds + seconds);
      return newTime.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    alert(addSeconds());
    var minutes = Number(prompt("How many minutes do you want to add?", 30));

    function addMinutes() {
      var newTime = new Date();
      newTime.setHours(time.hours, time.minutes + minutes, time.seconds + seconds);
      return newTime.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    alert(addMinutes());
    var hours = Number(prompt("How many hours do you want to add?", 2));

    function addHours() {
      var newTime = new Date();
      newTime.setHours(time.hours + hours, time.minutes + minutes, time.seconds + seconds);
      return newTime.toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }

    alert(addHours());
  });
}; //Objects End


exports.objects = objects;
},{}],"js/arrays.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrays = void 0;

//Objects
var arrays = function arrays() {
  //6.1 english
  //Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
  //Функция для вывода на экран информации об автомобиле;
  //Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
  var firstSectionFirstBtn = document.getElementById("task6.1");
  firstSectionFirstBtn.addEventListener("click", function () {}); //6.2 english
  //Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
  //Функция сложения 2-х объектов-дробей;
  //Функция вычитания 2-х объектов-дробей;
  //Функция умножения 2-х объектов-дробей;
  //Функция деления 2-х объектов-дробей;
  //Функция сокращения объекта-дроби.

  var firstSectionSecondBtn = document.getElementById("task6.2");
  firstSectionSecondBtn.addEventListener("click", function () {}); //6.3 english
  //Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
  //Функция вывода времени на экран;
  //Функция изменения времени на переданное количество секунд;
  //Функция изменения времени на переданное количество минут;
  //Функция изменения времени на переданное количество часов. 
  //Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

  var firstSectionThirdBtn = document.getElementById("task6.3");
  firstSectionThirdBtn.addEventListener("click", function () {}); //6.3 english
  //Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
  //Функция вывода времени на экран;
  //Функция изменения времени на переданное количество секунд;
  //Функция изменения времени на переданное количество минут;
  //Функция изменения времени на переданное количество часов. 
  //Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

  var firstSectionFourthBtn = document.getElementById("task6.4");
  firstSectionFourthBtn.addEventListener("click", function () {});
}; //Objects End


exports.arrays = arrays;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _basic = require("./js/basic");

var _types = require("./js/types");

var _loops = require("./js/loops");

var _functions = require("./js/functions");

var _objects = require("./js/objects");

var _arrays = require("./js/arrays");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(0, _basic.basic)();
(0, _types.types)();
(0, _loops.loops)();
(0, _functions.functions)();
(0, _objects.objects)();
(0, _arrays.arrays)(); /////////////////////////////////////////////////////////////////////////////////
// Dust Animation

var c = init("canvas"),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight; //initiation

var firefly = /*#__PURE__*/function () {
  function firefly() {
    _classCallCheck(this, firefly);

    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.s = Math.random() * 2;
    this.ang = Math.random() * 2 * Math.PI;
    this.v = this.s * this.s / 4;
  }

  _createClass(firefly, [{
    key: "move",
    value: function move() {
      this.x += this.v * Math.cos(this.ang);
      this.y += this.v * Math.sin(this.ang);
      this.ang += Math.random() * 20 * Math.PI / 180 - 10 * Math.PI / 180;
    }
  }, {
    key: "show",
    value: function show() {
      c.beginPath();
      c.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
      c.fillStyle = "#fddba3";
      c.fill();
    }
  }]);

  return firefly;
}();

var f = [];

function draw() {
  if (f.length < 100) {
    for (var j = 0; j < 10; j++) {
      f.push(new firefly());
    }
  } //animation


  for (var i = 0; i < f.length; i++) {
    f[i].move();
    f[i].show();

    if (f[i].x < 0 || f[i].x > w || f[i].y < 0 || f[i].y > h) {
      f.splice(i, 1);
    }
  }
}

var mouse = {};
var last_mouse = {};
canvas.addEventListener("mousemove", function (e) {
  last_mouse.x = mouse.x;
  last_mouse.y = mouse.y;
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

function init(elemid) {
  var canvas = document.getElementById(elemid),
      c = canvas.getContext("2d"),
      w = canvas.width = window.innerWidth,
      h = canvas.height = window.innerHeight;
  c.fillStyle = "rgba(30,30,30,1)";
  c.fillRect(0, 0, w, h);
  return c;
}

window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
    window.setTimeout(callback);
  };
};

function loop() {
  window.requestAnimFrame(loop);
  c.clearRect(0, 0, w, h);
  draw();
}

window.addEventListener("resize", function () {
  w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight;
  loop();
});
loop();
setInterval(loop, 1000 / 60);
},{"./js/basic":"js/basic.js","./js/types":"js/types.js","./js/loops":"js/loops.js","./js/functions":"js/functions.js","./js/objects":"js/objects.js","./js/arrays":"js/arrays.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58881" + '/');

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