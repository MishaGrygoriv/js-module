(function() {
    //Basic JavaScript

    //1.1 What's your name?
    const firstSectionFirstBtn = document.getElementById("task1.1");
    firstSectionFirstBtn.addEventListener("click", () => {
        const userName = prompt('Enter your Name, please');
        alert(`Hello, ${userName}!`);
    });

    //1.2 What does your Birth Year?
    const firstSectionSecondBtn = document.getElementById("task1.2");
    firstSectionSecondBtn.addEventListener("click", () => {
        const currentYear = (2020);
        const userYearBirth = Number(prompt('Enter your Year of Birth, please', 1992));
        const yourAge = currentYear - userYearBirth;
        alert(`You are ${yourAge}`);
    });

    //1.3 What's the perimetr of a square?
    const firstSectionThirdBtn = document.getElementById("task1.3");
    firstSectionThirdBtn.addEventListener("click", () => {
        const lengthSquareSide = Number(prompt('Enter length of a square\'s side, please', 0));
        const perimeterSquare = lengthSquareSide * 4;
        alert(`The perimeter of a square is ${perimeterSquare}`);
    });


    //1.4 What's area of a circle?
    const firstSectionFourthBtn = document.getElementById("task1.4");
    firstSectionFourthBtn.addEventListener("click", () => {
        const radiusCircle = Number(prompt('Enter radius of a circle, please', 0));
        const areaCircle = 3.14 * (radiusCircle ** 2);
        alert(`The area of a circle is ${areaCircle}`);
    });

    //1.5 Which distance do you need to keep between cities in km?
    const firstSectionFifthBtn = document.getElementById("task1.5");
    firstSectionFifthBtn.addEventListener("click", () => {
        const distance = prompt('Enter distance (in km), please', 0);
        const duration = prompt('Enter duration (in hours)', 0);
        const kmPerHour = distance / duration;
        alert(`You should drive ${kmPerHour} km/hour`);
    });

    //1.6 Exchange Rate USD to EUR.
    const firstSectionSixthBtn = document.getElementById("task1.6");
    firstSectionSixthBtn.addEventListener("click", () => {
        const dollarAmount = Number(prompt('Enter the amount (in USA dollars), please', 0));
        const euroExchangeRate = 0.84;
        const countEuro = dollarAmount * euroExchangeRate;
        alert(`You have ${countEuro} EUR`);
    });

    //1.7 How many files up to 820MB can you upload to your memory stick?
    const firstSectionSeventhBtn = document.getElementById("task1.7");
    firstSectionSeventhBtn.addEventListener("click", () => {
        const memoryStickCapacity = prompt('Enter your card capacity (in GB), please', 0);
        const countFiles = memoryStickCapacity / 0.820;
        alert(`You can upload ${countFiles} files up to 820MB`);
    });

    //1.8 How many chocolate bars can you buy?
    const firstSectionEighthBtn = document.getElementById("task1.8");
    firstSectionEighthBtn.addEventListener("click", () => {
        const amountOfMoney = prompt('Enter amount of your money, please', 0);
        const priceOfChocolate = prompt('Enter the price of chocolate, please', 0);
        const amountOfChocolate = amountOfMoney / priceOfChocolate;
        const balanceOfMoney = amountOfMoney % priceOfChocolate;
        if (amountOfChocolate > 1) {
            alert(`You can buy ${parseInt(amountOfChocolate)} chocolates and your balance is ${balanceOfMoney}`);
        } else {
            alert(`You can buy nothing!`);
        }
    });

    //1.9 Reverse your number.
    const firstSectionNinthBtn = document.getElementById("task1.9");
    firstSectionNinthBtn.addEventListener("click", () => {
        let number = Number(prompt('Enter three-digit numbers to reverse, please', 123));
        let reverse = 0;
        while (number > 0) {
            let x = number % 10;
            reverse = reverse * 10 + x;
            number = parseInt(number / 10);
        }
        alert(`Your numbers ${reverse}`);
    });

    //1.10 How much money will you get in 2 months?
    const firstSectionTenthBtn = document.getElementById("task1.10");
    firstSectionTenthBtn.addEventListener("click", () => {
        const depositSum = prompt('Enter your deposit sum, please', 0);
        const percentYearDeposit = (0.05);
        let sumForTwoMonths = ((depositSum * percentYearDeposit * 60) / 365);
        alert(`You'll get ${sumForTwoMonths} in 2 months`);
    });
    //Basic JavaScript End

    /////////////////////////////////////////////////////////////////////////////////

    //Types JavaScript

    //2.1 How old are you?
    const secondSectionFirstBtn = document.getElementById("task2.1");
    secondSectionFirstBtn.addEventListener("click", () => {
        const userAge = Number(prompt('Enter your age, please', 28));
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
    });

    //2.2 Number Symbols (from 0 - 9).
    const secondSectionSecondBtn = document.getElementById("task2.2");
    secondSectionSecondBtn.addEventListener("click", () => {
        const numberSymbol = Number(prompt('Enter number from 0 - 9, please', 0));
        switch (true) {
            case numberSymbol == 1:
                alert(`your symbol is "!"`);
                break;
            case numberSymbol == 2:
                alert(`your symbol is "@"`);
                break;
            case numberSymbol == 3:
                alert(`your symbol is "#"`);
                break;
            case numberSymbol == 4:
                alert(`your symbol is "$"`);
                break;
            case numberSymbol == 5:
                alert(`your symbol is "%"`);
                break;
            case numberSymbol == 6:
                alert(`your symbol is "^"`);
                break;
            case numberSymbol == 7:
                alert(`your symbol is "&"`);
                break;
            case numberSymbol == 8:
                alert(`your symbol is "*"`);
                break;
            case numberSymbol == 9:
                alert(`your symbol is "("`);
                break;
            case numberSymbol == 0:
                alert(`your symbol is ")"`);
                break;
            default:
                alert(`try again!`);
                break;
        }
    });

    //2.3 Three Digit Numbers
    const secondSectionThirdBtn = document.getElementById("task2.3");
    secondSectionThirdBtn.addEventListener("click", () => {
        const threeDigitNumbers = prompt('Enter three any numbers, please', 123);
        threeDigitNumbers[0] === threeDigitNumbers[1] || threeDigitNumbers[1] === threeDigitNumbers[2] || threeDigitNumbers[2] === threeDigitNumbers[0] ?
            alert("found same numbers") : alert("no same numbers");
    });

    //2.4 Check Which Years are Leap Years!
    const secondSectionFourthBtn = document.getElementById("task2.4");
    secondSectionFourthBtn.addEventListener("click", () => {
        const leapYear = Number(prompt('Enter which year do you want to check, please', 2020));
        if (
            leapYear % 400 === 0 ||
            (leapYear % 4 === 0 && leapYear % 100 != 0)
        ) {
            alert(`yes, ${leapYear} it's a Leap Year!`);
        } else {
            alert(`no, ${leapYear} it's not a Leap Year!`);
        }
    });

    //2.5 Check your number is a palindrome number or not?
    const secondSectionFifthBtn = document.getElementById("task2.5");
    secondSectionFifthBtn.addEventListener("click", () => {
        const palindromeNumber = prompt("Enter any five numbers, please", 12345);
        palindromeNumber[0] == palindromeNumber[4] && palindromeNumber[1] == palindromeNumber[3] ?
            alert(`${palindromeNumber} is a palindromic number!`) : alert(`${palindromeNumber} is not a palindromic number!`);
    });

    //2.6 Convert USD to EUR, UAH or AZN.
    const secondSectionSixthBtn = document.getElementById("task2.6");
    secondSectionSixthBtn.addEventListener("click", () => {
        const amountInDollars = prompt("Enter amount is USD, please", 0);
        const currency = prompt("Enter number of required currency: EUR = 1; UAH = 2; AZN = 3");
        switch (currency) {
            case "1":
                alert(`${amountInDollars * 0.8} EUR` + " ");
                break;
            case "2":
                alert(`${amountInDollars * 28.29} UAH` + " ");
                break;
            case "3":
                alert(`${amountInDollars * 1.7} AZN` + " ");
                break;
            default:
                alert("Try Again!");
                break;
        }
    });

    //2.7 Check what discount you can get from the purchase!
    const secondSectionSeventhBtn = document.getElementById("task2.7");
    secondSectionSeventhBtn.addEventListener("click", () => {
        const amountOfMoney = Number(prompt('Enter the amount of purchases, please', 0));
        if (amountOfMoney >= 0 && amountOfMoney < 200) {
            alert('sorry, no discount for you!');
        } else if (amountOfMoney >= 200 && amountOfMoney <= 300) {
            alert(amountOfMoney - (amountOfMoney * 0.03) + ' ' + 'with discount');
        } else if (amountOfMoney > 300 && amountOfMoney <= 500) {
            alert(amountOfMoney - (amountOfMoney * 0.05) + ' ' + 'with discount');
        } else if (amountOfMoney > 500) {
            alert(amountOfMoney - (amountOfMoney * 0.05) + ' ' + 'with discount');
        } else {
            alert('Try Again!')
        }
    });

    //2.8 Can a Circle fit in a Square?
    const secondSectionEighthBtn = document.getElementById("task2.8");
    secondSectionEighthBtn.addEventListener("click", () => {
        const circleLenght = Number(prompt("Enter lenght of a circle, please", 0));
        const squarePerimeter = Number(prompt("Enter perimeter of a square, please"));
        const circleRadius = (circleLenght / (2 * 3.1415));
        const squareSide = (squarePerimeter / 4);
        circleRadius < (squareSide / 2) ? alert('Circle can fit in a Square') : alert('Circle can not fit in a Square');
    });

    //2.9 Try to score maximum points by answering three questions.
    const secondSectionNinthBtn = document.getElementById("task2.9");
    secondSectionNinthBtn.addEventListener("click", () => {
        const firstQuestion = prompt('Which is the smallest continent in the world?', "Asia, Africa, Australia");
        const secondQuestion = prompt('How many weeks are there in one year?', "48, 64, 52");
        const thirdQuestion = prompt('How many months of the year have 31 days?', "7, 5, 9");
        let points = 0;
        if (firstQuestion == "Australia") {
            points += 2;
        }
        if (secondQuestion == 52) {
            points += 2;
        }
        if (thirdQuestion == 7) {
            points += 2;
        }
        points >= 2 ? alert(`Congratulations! you have got ${points} points.`) : alert(`Unfortunately, you have't got any points.`);
    });

    //2.10 Write a date (year, month, day)!
    const secondSectionTenthBtn = document.getElementById("task2.10");
    secondSectionTenthBtn.addEventListener("click", () => {
        let date = new Date(prompt('Enter date in (yyyy-mm-dd) format'));
        date.setDate(date.getDate() + 1);
        alert(`tomorrow is ${date}`);
    });
    //Types JavaScript End
})();