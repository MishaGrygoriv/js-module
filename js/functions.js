//Functions

(function(functions) {

    //4.1 Write 2 numbers to get -1 if the first is less than the second; 1 - if the first is greater than the second; and 0 - if the numbers are equal.
    //Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
    const fourthSectionFirstBtn = document.getElementById("task4.1");
    fourthSectionFirstBtn.addEventListener("click", () => {
        const firstNumber = prompt('Enter the first number, please', 2);
        const secondNumber = prompt('Enter the second number, please', 4);

        function comparison(a, b) {
            if (Number(a) < Number(b))
                return -1;
            else if (a > b)
                return 1;
            else
                return 0;
        }
        alert(comparison(firstNumber, secondNumber));
    });

    //4.2 Write a number to find out the factorial of a given number.
    //Написать функцию, которая вычисляет факториал переданного ей числа.
    const fourthSectionSecondBtn = document.getElementById("task4.2");
    fourthSectionSecondBtn.addEventListener("click", () => {
        const number = Number(prompt('Enter any number', 5))

        function factorial(number) {
            return (number != 1) ? number * factorial(number - 1) : 1;
        }
        alert(factorial(number));
    });

    //4.3 Write three separate numbers to get them in one number.
    //Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
    const fourthSectionThirdBtn = document.getElementById("task4.3");
    fourthSectionThirdBtn.addEventListener("click", () => {
        const firstNumber = prompt('Enter the first number, please', 2);
        const secondNumber = prompt('Enter the second number', 3);
        const thirdNumber = prompt('Enter the third number, please', 4);

        function joinNumbers(a, b, c) {
            const join = [a, b, c].join("");
            return Number(join);
        }
        alert(joinNumbers(firstNumber, secondNumber, thirdNumber));
    });

    //4.4 Write down the length and width of the rectangle to find out its area.
    //Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
    const fourthSectionFourthBtn = document.getElementById("task4.4");
    fourthSectionFourthBtn.addEventListener("click", () => {
        const rectangleLength = Number(prompt("Enter rectangle length", 5));
        const rectangleWidth = Number(prompt("Enter rectangle width", 8));

        function area(a, b) {
            let size = 0;
            let perimiter = 0;

            if (a === undefined || b === 0) {
                perimiter = (b * b);
                return perimiter;
            } else if (b === undefined || b === 0) {
                perimiter = (a * a);
                return perimiter;
            } else if (a < 0 || b < 0) {
                return "incorrect value";
            } else {
                size = a * b;
                return size;
            }
        }
        alert(area(rectangleLength, rectangleWidth));
    });

    //4.5 Write the number to find out if this number is perfect.
    //Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
    const fourthSectionFifthBtn = document.getElementById("task4.5");
    fourthSectionFifthBtn.addEventListener("click", () => {
        const number = Number(prompt('Enter any number, please', 5));

        function perfectNumber(a) {
            let result = 0;
            for (let b = 1; b < a; b++) {
                if (a % b === 0) {
                    result += b;
                }
            }
            if (result === a)
                return 'The number is perfect!';
            else
                return 'The number is not perfect!';
        }
        alert(perfectNumber(number));
    });

    //4.6 (WARNING ! ! !) Write the minimum and maximum values for the range to check if there are perfect numbers.
    //Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
    const fourthSectionSixthBtn = document.getElementById("task4.6");
    fourthSectionSixthBtn.addEventListener("click", () => {
        const firstNumber = Number(prompt('Enter the minimum value, please', 4));
        const secondNumber = Number(prompt('Enter the maximum value, please', 8));

        function perfectNumberInRange(a, b) {
            let arrResult = new Array();
            let resultString = "";
            for (let c = a; c <= b; c++) {
                if (perfectNumberInRange(c) === 'The number is perfect' && c != 0) {
                    arrResult.push(c);
                }
            }
            arrResult.forEach(element => {
                resultString += (element + " ")
            });
            return resultString;
        }
        alert(perfectNumberInRange(firstNumber, secondNumber));
    });

    //4.7 Write the time (hours, minutes, seconds) to see it on the screen in the format "hh: mm: ss".
    //Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
    const fourthSectionSeventhBtn = document.getElementById("task4.7");
    fourthSectionSeventhBtn.addEventListener("click", () => {
        const hours = Number(prompt('Enter hours, please', 7));
        const minutes = Number(prompt('Enter minutes, please', 25));
        const seconds = Number(prompt('Enter seconds, please', 15));

        function SetTime(hh, mm = 0, ss = 0) {
            let date = new Date();
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
    });

    //4.8 Write hours, minutes and seconds to check how much seconds.
    //Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
    const fourthSectionEighthBtn = document.getElementById("task4.8");
    fourthSectionEighthBtn.addEventListener("click", () => {
        const hours = Number(prompt('Enter hours, please', 18));
        const minutes = Number(prompt('Enter minutes, please', 32));
        const seconds = Number(prompt('Enter seconds, please', 04));

        function ToSeconds(hh, mm = 0, ss = 0) {
            return 3600 * hh + 60 * mm + ss;
        }
        alert(ToSeconds(hours, minutes, seconds) + " ss");
    });

    //4.9 Write the number of seconds to check how many hours, minutes and seconds in the format "hh: mm: ss".
    //Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
    const fourthSectionNinthBtn = document.getElementById("task4.9");
    fourthSectionNinthBtn.addEventListener("click", () => {
        const number = Number(prompt('Enter seconds, please', 55555));

        function getSecToHours() {
            const hours = Math.floor(number / 60 / 60);
            const minutes = Math.floor(number / 60) - (hours * 60);
            const seconds = number % 60;
            return alert(`${hours}:${minutes}:${seconds} hh:mm:ss`);
        }
        getSecToHours()
    });

    //4.10 Write two dates to check the difference between it.
    //Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс».
    const fourthSectionTenthBtn = document.getElementById("task4.10");
    fourthSectionTenthBtn.addEventListener("click", () => {
        let firstDate = prompt("Enter the first Date: hours, minutes and seconds into the format hh:mm:ss", "7, 23, 15").split(", ");
        let secondDate = prompt("Enter the second Date: hours, minutes and seconds into the format hh:mm:ss", "2, 44, 30").split(", ");

        function toSeconds(hour, min = 0, sec = 0) {
            return (3600 * hour + 60 * min + Number(sec));
        }
        firstDate = toSeconds(firstDate[0], firstDate[1], firstDate[2]);
        secondDate = toSeconds(secondDate[0], secondDate[1], secondDate[2]);
        const newDate = firstDate - secondDate;

        function secondsToHours(sec = 0) {
            const hours = Math.floor(sec / 60 / 60);
            const minutes = Math.floor(sec / 60) - (hours * 60)
            const seconds = sec % 60;
            const formatted = [
                hours.toString().padStart(2, '0'),
                minutes.toString().padStart(2, '0'),
                seconds.toString().padStart(2, '0')
            ].join(':');
            return formatted;
        }
        alert(secondsToHours(newDate));
    });
})();
//Functions End