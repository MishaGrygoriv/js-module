//Objects
export const objects = () => {
    //5.1 Enter the distance of the route in km to know how many hours your trip will take.
    //Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
    //Функция для вывода на экран информации об автомобиле;
    //Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.
    const fifthSectionFirstBtn = document.getElementById("task5.1");
    fifthSectionFirstBtn.addEventListener("click", () => {
        const carInfo = {
            manufacturer: "BMW",
            model: "X6",
            modelYear: "2019",
            averageSpeed: "100",
            bodyColor: "Black",
        }

        function showInfo() {
            let info = [
                `Car Info:
              Manufacturer: ${carInfo.manufacturer} 
              Model: ${carInfo.model}
              Model Year: ${carInfo.modelYear}
              Average Speed: ${carInfo.averageSpeed}
              Body Color: ${carInfo.bodyColor}`
            ]
            return info;
        }
        alert(showInfo());

        const distance = Number(prompt("Enter the distance of your route in km, please", 100));

        const roadTime = (a) => {
            const distanceTime = a / carInfo.averageSpeed;
            alert(`You need ${distanceTime} hour(s) to overcome the distance`);
            const breakTime = Math.floor(distanceTime / 4);
            alert(`${breakTime} time(s) you need to take a break for 1 hour`);
            const totalTime = distanceTime + breakTime + ' hour(s) will take your trip!';
            return totalTime;
        };
        alert(roadTime(distance));
    });

    //5.2 Enter 2 numerator numbers and 2 denominator numbers.
    //Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
    //Функция сложения 2-х объектов-дробей;
    //Функция вычитания 2-х объектов-дробей;
    //Функция умножения 2-х объектов-дробей;
    //Функция деления 2-х объектов-дробей;
    //Функция сокращения объекта-дроби.
    const fifthSectionSecondBtn = document.getElementById("task5.2");
    fifthSectionSecondBtn.addEventListener("click", () => {
        const firstNumerator = Number(prompt(`enter numerator please`, 4));
        const firstDenominator = Number(prompt(`enter denominator, please`, 12));
        const secondNumerator = Number(prompt(`enter numerator please`, 14));
        const secondDenominator = Number(prompt(`enter denominator, please`, 22));

        const firstFraction = {
            firstNumerator: firstNumerator,
            firstDenominator: firstDenominator
        };
        const secondFraction = {
            secondNumerator: secondNumerator,
            secondDenominator: secondDenominator
        };

        function lessDividerOfTwoNumbers(x, y) {
            if (typeof x !== "number" || typeof y !== "number") return false;
            return !x || !y ? 0 : Math.abs((x * y) / biggerDividerOfTwoNumbers(x, y));
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
        const commonDenom = lessDividerOfTwoNumbers(
            firstFraction.firstDenominator,
            secondFraction.secondDenominator
        );

        function plusFraction() {
            const resultPlus =
                (commonDenom / firstFraction.firstDenominator) * firstFraction.firstNumerator +
                (commonDenom / secondFraction.secondDenominator) * secondFraction.secondNumerator;
            return resultPlus;
        }
        alert(`Plus fraction = ${plusFraction()};`);

        function minusFraction() {
            const resultMinus =
                (commonDenom / firstFraction.firstDenominator) * firstFraction.firstNumerator -
                (commonDenom / secondFraction.secondDenominator) * secondFraction.secondNumerator;
            return resultMinus;
        }
        alert(`Minus fraction = ${minusFraction()};`);

        function multiplicationFraction() {
            const result =
                (firstFraction.firstNumerator * secondFraction.secondNumerator) /
                (firstFraction.firstDenominator * secondFraction.secondDenominator);
            return result;
        }
        alert(`Multiplication Fraction = ${multiplicationFraction()};`);

        function divisionFraction() {
            const result =
                (firstFraction.firstNumerator * secondFraction.secondDenominator) /
                (firstFraction.firstDenominator * secondFraction.secondNumerator);
            return result;
        }
        alert(`Division Fraction = ${divisionFraction()};`);
    });

    //5.3 Enter how many seconds, minutes, and hours you want to add to your time.
    //Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
    //Функция вывода времени на экран;
    //Функция изменения времени на переданное количество секунд;
    //Функция изменения времени на переданное количество минут;
    //Функция изменения времени на переданное количество часов. 
    //Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
    const fifthSectionThirdBtn = document.getElementById("task5.3");
    fifthSectionThirdBtn.addEventListener("click", () => {
        const time = {
            hours: 11,
            minutes: 25,
            seconds: 30,
        }

        function setTime() {
            let newTime = new Date();
            newTime.setHours(time.hours, time.minutes, time.seconds);
            return newTime.toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }
        alert(setTime());

        const seconds = Number(prompt("How many seconds do you want to add?", 30));

        function addSeconds() {
            let newTime = new Date();
            newTime.setHours(time.hours, time.minutes, time.seconds + seconds);
            return newTime.toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }
        alert(addSeconds());

        const minutes = Number(prompt("How many minutes do you want to add?", 30));

        function addMinutes() {
            let newTime = new Date();
            newTime.setHours(time.hours, time.minutes + minutes, time.seconds + seconds);
            return newTime.toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }
        alert(addMinutes());

        const hours = Number(prompt("How many hours do you want to add?", 2));

        function addHours() {
            let newTime = new Date();
            newTime.setHours(time.hours + hours, time.minutes + minutes, time.seconds + seconds);
            return newTime.toLocaleString(navigator.language, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        }
        alert(addHours());
    });
};
//Objects End