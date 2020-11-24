//Classes
export const classes = () => {
    //7.1 Enter any radius of circle to check diameter, area and length of circle.
    //Реализовать класс, описывающий окружность.В классе должны быть следующие компоненты: 
    //поле, хранящее радиус окружности;
    //get-свойство, возвращающее радиус окружности;
    //set-свойство, устанавливающее радиус окружности;
    //get-свойство, возвращающее диаметр окружности;
    //метод, вычисляющий площадь окружности;
    //метод, вычисляющий длину окружности.
    //Продемонстрировать работу свойств и методов. 
    const seventhSectionFirstBtn = document.getElementById("task7.1");
    seventhSectionFirstBtn.addEventListener("click", () => {
        class Circle {
            constructor(radius) {
                this.radius = radius;
            }

            get radiusOfCircle() {
                return this.radius;
            }
            set radiusOfCircle(newRadius) {
                this.radius = newRadius;
            }
            get diametrOfCircle() {
                return this.radius * 2;
            }
            areaOfCircle() {
                return Math.PI * Math.pow(this.radius, 2);
            }
            lengthOfCircle() {
                return Math.PI * this.diametrOfCircle;
            }
        }
        const circle = new Circle(6);
        const changeRadius = prompt(
            `Enter any radius of circle`, "6");
        circle.radiusOfCircle = changeRadius;
        alert(`Diametr = ${circle.diametrOfCircle}\nArea of circle = ${circle.areaOfCircle()}\nLenght of Circle = ${circle.lengthOfCircle()}`);
    });

    //7.2 !!!WARNING!!!
    //Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:
    //поле, которое хранит цвет маркера;
    //поле, которое хранит количество чернил в маркере (в процентах);
    //метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
    //Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.
    const seventhSectionSecondBtn = document.getElementById("task7.2");
    seventhSectionSecondBtn.addEventListener("click", () => {
        class Marker {
            constructor(color, percentOfInk) {
                this.color = color;
                this.percentOfInk = Number(percentOfInk);
            }
        }
    });

    //7.3 Table with a list of bank employees.
    //Реализовать класс Employee, описывающий работника, и создать массив работников банка.
    //Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
    //Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().
    //Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
    const seventhSectionThirdBtn = document.getElementById("task7.3");
    seventhSectionThirdBtn.addEventListener("click", () => {
        class Employee {
            constructor(name, position, age) {
                this.name = name;
                this.age = age;
                this.position = position;
            }
        }

        class EmpTable {
            constructor(array) {
                this.array = array;
            }
            getHtml() {
                const table = document.createElement('table');
                const tbody = document.createElement('tbody');

                table.style.cssText = 'box-shadow: inset 5px 5px 10px 4px rgba(0, 0, 0, 0.5); background-color:  #ff6033; max-width: 1000px; min-height: 600px; width: 100%; border: 2px solid #000; border-collapse: collapse;';
                tbody.style.cssText = 'font-size: 50px; color: #ffe92f;';

                table.append(tbody);
                document.querySelector('.container').prepend(table);
                tbody.innerHTML = `
                        <tr><th>№</th><th>Name</th><th>Age</th><th>Position</th></tr>
                    `;
                this.array.forEach((item, i) => {
                    tbody.innerHTML += `
                        <tr><td>${i+1}</td><td>${item.name}</td><td>${item.position}</td><td>${item.age}</td></tr>
                    `;
                });

                const th = document.querySelectorAll('th');
                th.forEach(item => {
                    item.style.cssText = 'border: 2px solid #000;';
                });
                const td = document.querySelectorAll('td');
                td.forEach(item => {
                    item.style.cssText = 'border: 2px solid #000;';
                });
            }
        }

        const empArray = [];

        empArray.push(new Employee('Daisy', '34', 'Accountant'));
        empArray.push(new Employee('Ronny', '28', 'Financial Analyst'));
        empArray.push(new Employee('Benny', '41', 'Relationship Manager'));
        empArray.push(new Employee('George', '38', 'Auditor'));
        empArray.push(new Employee('Anna', '38', 'Bank Teller'));

        const table = new EmpTable(empArray);
        table.getHtml();
    });
};
//Classes End