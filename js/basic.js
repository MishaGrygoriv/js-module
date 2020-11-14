//Basic JavaScript
export const basic = () => {
    //1.1 What's your name?
    //Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
    const firstSectionFirstBtn = document.getElementById("task1.1");
    firstSectionFirstBtn.addEventListener("click", () => {
        const userName = prompt('Enter your Name, please');
        alert(`Hello, ${userName}!`);
    });

    //1.2 What does your Birth Year?
    //Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.
    const firstSectionSecondBtn = document.getElementById("task1.2");
    firstSectionSecondBtn.addEventListener("click", () => {
        const currentYear = (2020);
        const userYearBirth = Number(prompt('Enter your Year of Birth, please', 1992));
        const yourAge = currentYear - userYearBirth;
        alert(`You are ${yourAge}`);
    });

    //1.3 What's the perimetr of a square?
    //Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
    const firstSectionThirdBtn = document.getElementById("task1.3");
    firstSectionThirdBtn.addEventListener("click", () => {
        const lengthSquareSide = Number(prompt('Enter length of a square\'s side, please', 0));
        const perimeterSquare = lengthSquareSide * 4;
        alert(`The perimeter of a square is ${perimeterSquare}`);
    });


    //1.4 What's area of a circle?
    //Запросите у пользователя радиус окружности и выведите площадь такой окружности.
    const firstSectionFourthBtn = document.getElementById("task1.4");
    firstSectionFourthBtn.addEventListener("click", () => {
        const radiusCircle = Number(prompt('Enter radius of a circle, please', 0));
        const areaCircle = 3.14 * (radiusCircle ** 2);
        alert(`The area of a circle is ${areaCircle}`);
    });

    //1.5 Which distance do you need to keep between cities in km?
    //Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
    const firstSectionFifthBtn = document.getElementById("task1.5");
    firstSectionFifthBtn.addEventListener("click", () => {
        const distance = prompt('Enter distance (in km), please', 0);
        const duration = prompt('Enter duration (in hours)', 0);
        const kmPerHour = distance / duration;
        alert(`You should drive ${kmPerHour} km/hour`);
    });

    //1.6 Exchange Rate USD to EUR.
    //Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
    const firstSectionSixthBtn = document.getElementById("task1.6");
    firstSectionSixthBtn.addEventListener("click", () => {
        const dollarAmount = Number(prompt('Enter the amount (in USA dollars), please', 0));
        const euroExchangeRate = 0.84;
        const countEuro = dollarAmount * euroExchangeRate;
        alert(`You have ${countEuro} EUR`);
    });

    //1.7 How many files up to 820MB can you upload to your memory stick?
    //Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
    const firstSectionSeventhBtn = document.getElementById("task1.7");
    firstSectionSeventhBtn.addEventListener("click", () => {
        const memoryStickCapacity = prompt('Enter your card capacity (in GB), please', 0);
        const countFiles = memoryStickCapacity / 0.820;
        alert(`You can upload ${countFiles} files up to 820MB`);
    });

    //1.8 How many chocolate bars can you buy?
    //Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
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
    //Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).
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
    //Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.
    const firstSectionTenthBtn = document.getElementById("task1.10");
    firstSectionTenthBtn.addEventListener("click", () => {
        const depositSum = prompt('Enter your deposit sum, please', 0);
        const percentYearDeposit = (0.05);
        let sumForTwoMonths = ((depositSum * percentYearDeposit * 60) / 365);
        alert(`You'll get ${sumForTwoMonths} in 2 months`);
    });
};
//Basic JavaScript End