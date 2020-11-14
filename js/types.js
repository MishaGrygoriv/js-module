//Types
export const types = () => {
    //2.1 How old are you?
    //Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
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
    //Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
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
    //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
    const secondSectionThirdBtn = document.getElementById("task2.3");
    secondSectionThirdBtn.addEventListener("click", () => {
        const threeDigitNumbers = prompt('Enter three any numbers, please', 123);
        threeDigitNumbers[0] === threeDigitNumbers[1] || threeDigitNumbers[1] === threeDigitNumbers[2] || threeDigitNumbers[2] === threeDigitNumbers[0] ?
            alert("found same numbers") : alert("no same numbers");
    });

    //2.4 Check Which Years are Leap Years!
    //Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
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
    //Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
    const secondSectionFifthBtn = document.getElementById("task2.5");
    secondSectionFifthBtn.addEventListener("click", () => {
        const palindromeNumber = prompt("Enter any five numbers, please", 12345);
        palindromeNumber[0] == palindromeNumber[4] && palindromeNumber[1] == palindromeNumber[3] ?
            alert(`${palindromeNumber} is a palindromic number!`) : alert(`${palindromeNumber} is not a palindromic number!`);
    });

    //2.6 Convert USD to EUR, UAH or AZN.
    //Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
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
    //Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
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
    //Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
    const secondSectionEighthBtn = document.getElementById("task2.8");
    secondSectionEighthBtn.addEventListener("click", () => {
        const circleLenght = Number(prompt("Enter lenght of a circle, please", 0));
        const squarePerimeter = Number(prompt("Enter perimeter of a square, please"));
        const circleRadius = (circleLenght / (2 * 3.1415));
        const squareSide = (squarePerimeter / 4);
        circleRadius < (squareSide / 2) ? alert('Circle can fit in a Square') : alert('Circle can not fit in a Square');
    });

    //2.9 Try to score maximum points by answering three questions.
    //Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
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
    //Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
    const secondSectionTenthBtn = document.getElementById("task2.10");
    secondSectionTenthBtn.addEventListener("click", () => {
        let date = new Date(prompt('Enter date in (yyyy-mm-dd) format, please'));
        date.setDate(date.getDate() + 1);
        alert(`tomorrow is ${date}`);
    });
};
//Types End