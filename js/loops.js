//Loops
export const loops = () => {
    //3.1 Calculate the sum of all numbers in a given range.
    //Подсчитать сумму всех чисел в заданном пользователем диапазоне.
    const thirdSectionFirstBtn = document.getElementById("task3.1");
    thirdSectionFirstBtn.addEventListener("click", () => {
        let startNumber = Number(prompt('Enter the starting number, please', 1));
        const endNumber = Number(prompt('Enter the ending number, please', 10));
        let sum = 0;
        while (startNumber <= endNumber) {
            sum += startNumber;
            startNumber++;
        }
        alert(`${sum} the sum of all numbers in a given range`);
    });

    //3.2 Find the greatest common factor.
    //Запросить 2 числа и найти только наибольший общий делитель.
    const thirdSectionSecondBtn = document.getElementById("task3.2");
    thirdSectionSecondBtn.addEventListener("click", () => {
        const firstNumber = Number(prompt('Enter the first number, please', 5));
        const secondNumber = Number(prompt('Enter the second number, please', 10));
        let result = 0;
        for (let i = 1; i <= secondNumber; i++) {
            if (firstNumber % i === 0 && secondNumber % i === 0) {
                result = i;
            }
        }
        alert(`The greatest common factor is ${result}`);
    });

    //3.3 Write the number to get all divisors of this number.
    //Запросить у пользователя число и вывести все делители этого числа.
    const thirdSectionThirdBtn = document.getElementById("task3.3");
    thirdSectionThirdBtn.addEventListener("click", () => {
        const divisebleNumber = Number(prompt('Enter any number, please', 10));
        for (let i = 1; i <= divisebleNumber; i++) {
            let a = divisebleNumber % i;
            if (a === 0) {
                alert(`All divisors of number ${divisebleNumber} are ${i}`);
            }
        }
    });

    //3.4 Write any numbers to determine the number of digits.
    //Определить количество цифр в введенном числе.
    const thirdSectionFourthBtn = document.getElementById("task3.4");
    thirdSectionFourthBtn.addEventListener("click", () => {
        let number = Number(prompt('Enter any numbers, please', 12345));
        let i = 0;
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
        alert(`Number of digits are ${i}`);
        // const number = prompt('Enter any numbers, please', 12345);
        // alert(number.length);
    });

    //3.5 Write 10 any numbers to find out how many positive, negative, zero, even and odd numbers.
    //Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
    const thirdSectionFifthBtn = document.getElementById("task3.5");
    thirdSectionFifthBtn.addEventListener("click", () => {
        let negativeNumber = 0;
        let positiveNumber = 0;
        let zeroNumber = 0;
        let evenNumber = 0;
        let oddNumber = 0;
        for (let i = 1; i <= 10; i++) {
            let numbers = Number(prompt(`Enter any 10 numbers, please! Example: number ${i}`));
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
        alert(
            `You have got: zero numbers = ${zeroNumber}; negative numbers = ${negativeNumber}; positive numbers = ${positiveNumber}; even numbers = ${evenNumber}; odd numbers = ${oddNumber}`
        );
    });

    //3.6 Write 2 numbers and a math operator to solve the math problem.
    //Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
    const thirdSectionSixthBtn = document.getElementById("task3.6");
    thirdSectionSixthBtn.addEventListener("click", () => {
        do {
            const firstNumber = Number(prompt('Enter the first number, please', 5));
            const mathOperator = prompt('Enter math operator, please', "+");
            const secondNumber = Number(prompt('Enter the second number, please', 5));
            switch (mathOperator) {
                case '+':
                    alert(firstNumber + secondNumber);
                    break
                case '*':
                    alert(firstNumber * secondNumber);
                    break
                case '/':
                    alert(firstNumber / secondNumber);
                    break
                case '-':
                    alert(firstNumber - secondNumber);
                    break
                default:
                    break
            }
        } while (confirm('Do you want to calculate another example?'));
    });

    //3.7 Write any numbers and also write how many numbers to move forward.
    //Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
    const thirdSectionSeventhBtn = document.getElementById("task3.7");
    thirdSectionSeventhBtn.addEventListener("click", () => {
        let numbers = prompt('Enter any numbers, please', 12345);
        let moveNumber = Number(prompt('How many numbers to move forward?', 2));
        arr = numbers.split('');
        for (let i = 0; i < moveNumber; i++) {
            arr.push(arr.shift())
        }
        alert(arr.join ``);
    });

    //3.8 Check what day is it today.
    //Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
    const thirdSectionEighthBtn = document.getElementById("task3.8");
    thirdSectionEighthBtn.addEventListener("click", () => {
        let count = 0;
        do {
            let daysOfTheWeek = [0, 1, 2, 3, 4, 5, 6];
            let day = "";
            switch (daysOfTheWeek[count]) {
                case 0:
                    day = "Monday";
                    alert(`Today is ${day}`);
                    break;
                case 1:
                    day = "Tuesday";
                    alert(`Today is ${day}`);
                    break;
                case 2:
                    day = "Wednesday";
                    alert(`Today is ${day}`);
                    break;
                case 3:
                    day = "Thursday";
                    alert(`Today is ${day}`);
                    break;
                case 4:
                    day = "Friday";
                    alert(`Today is ${day}`);
                    break;
                case 5:
                    day = "Saturday";
                    alert(`Today is ${day}`);
                    break;
                case 6:
                    day = "Sunday";
                    count -= 7;
                    alert(`Today is ${day}`);
                default:
                    break;
            };
            count++;
        } while (confirm("If you wish to see the next day, just click OK!"));
    });

    //3.9 Click to get the multiplication table for all numbers from 2 to 9.
    //Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
    const thirdSectionNinthBtn = document.getElementById("task3.9");
    thirdSectionNinthBtn.addEventListener("click", () => {
        const array = new Array();
        for (let i = 2; i <= 9; i++) {
            for (let x = 1; x <= 10; x++) {
                let result = i * x;
                array.push(i + "*" + x + "=" + result);
            }
        }
        let resultString = "";
        for (let i = 1; i < array.length; i++) {
            resultString += array[i] + "    ";
            if (i % 4 === 0)
                resultString += "\n";
        }
        alert(`Multiplication Table: \n  ${resultString}`);
    });

    //3.10 Let's play the game "Guess the number". Choose a number from 0 to 100.
    //Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
    const thirdSectionTenthBtn = document.getElementById("task3.10");
    thirdSectionTenthBtn.addEventListener("click", () => {
        alert('Guess a number between 0 to 100');
        let firstNumber = 0;
        let lastNumber = 100;
        let answer = 1;
        let symbol = '';
        answer = Math.floor(firstNumber + (lastNumber - firstNumber) / 2);
        while (answer !== false) {
            symbol = prompt(`your number is > ${answer}, < ${answer}, or = ${answer}?`, "> < =");

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
                    alert(`I'm sure, your number is ${answer}`);
                    answer = confirm('Do you want to try again?')
                    break;
                case null:
                    alert(':(')
                    answer = false;
                    break;
                default:
                    alert('incorrect input! Try again=)')
                    break;
            }
        }
    });
};
//Loops End