//Arrays
export const arrays = () => {
    //6.1 Shopping List
    //Создать массив «Список покупок». 
    //Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. 
    //Написать несколько функций для работы с таким массивом.
    //Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
    //Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
    //Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
    const sixthSectionFirstBtn = document.getElementById("task6.1");
    sixthSectionFirstBtn.addEventListener("click", () => {
        let shoppingList = [{
                name: "Tomato",
                quantity: 7,
                isBought: false,
            },
            {
                name: "Cucumber",
                quantity: 5,
                isBought: true,
            },
            {
                name: "Potato",
                quantity: 20,
                isBought: false,
            },
            {
                name: "Pepper",
                quantity: 3,
                isBought: true,
            },
        ];

        function showShoppingList(array) {
            let showList = "";
            array.sort((a, b) =>
                a.isBought === b.isBought ? 0 : a.isBought ? 1 : -1
            );
            for (let i of array) {
                if (i.isBought === false) {
                    i.isBought = "need to buy";
                }
                if (i.isBought === true) {
                    i.isBought = "already bought";
                }
                showList += `${i.name}: ${i.quantity}pcs - ${i.isBought}\n`;
            }
            return showList;
        }
        alert(`Shopping List:\n${showShoppingList(shoppingList)}`);

        function addItem(array) {
            const newProduct = prompt("Enter name of your item", "Onion");
            const quan = Number(prompt("Enter item quantity", 2));
            let num = null;
            for (let i = 0; i < array.length; i++) {
                if (newProduct === i.name) {
                    num = i;
                }
            }
            if (num === null) {
                return shoppingList.push({
                    name: newProduct,
                    quantity: quan,
                    isBought: true,
                });
            } else {
                array[Number(num)].quantity -= quan;
            }
            if (array[Number(num)].quantity <= 0) {
                return (array[Number(num)].isBought = true);
            } else if (array[Number(num)].quantity > 0 && num !== null) {
                return (array[
                    Number(num)
                ].isBought += ` (${quan} already bought)`);
            }
        }

        addItem(shoppingList);
        alert(showShoppingList(shoppingList));

        function item(array) {
            const product = prompt("Enter the product you purchased", "potato");
            let bought = null;
            for (let i = 0; i < array.length; i++) {
                if (product === i.name) {
                    bought = i;
                }
                if (bought = i) {
                    return (array[bought].isBought = true);
                }
            }

        }

        item(shoppingList);
        alert(showShoppingList(shoppingList));
    });

    //6.2 Shopping Bill
    //Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
    //Распечатка чека на экран;
    //Подсчет общей суммы покупки;
    //Получение самой дорогой покупки в чеке;
    //Подсчет средней стоимости одного товара в чеке.
    const sixthSectionSecondBtn = document.getElementById("task6.2");
    sixthSectionSecondBtn.addEventListener("click", () => {
        let bill = [{
                name: "Beer",
                quantity: 4,
                price: 2,
            },
            {
                name: "Whiskey",
                quantity: 1,
                price: 50,
            },
            {
                name: "Cognac",
                quantity: 1,
                price: 65,
            },
            {
                name: "Vodka",
                quantity: 2,
                price: 13,
            },
        ];

        function showBillList(array) {
            let showBill = "";
            for (let i of array) {
                showBill += `${i.name}: ${i.quantity} bottles - ${i.price}USD\n`;
            }
            return showBill;
        }
        alert(`Bill:\n${showBillList(bill)}`);

        function totalPrice(array) {
            let showBill = "";
            let total = 0;
            for (let i = 0; i < array.length; i++) {
                showBill += `${array[i].name}: ${array[i].quantity} bottles - ${array[i].price}USD\n`;
                total += array[i].quantity * array[i].price;
            }
            showBill += `Total: ${total}USD`;
            return showBill;
        }
        alert(`Bill:\n${totalPrice(bill)}`);

        function theMostExpensiveItem(array) {
            let totalPrice = 0;
            let showBill = "";
            let theMostExpensive = array[0];
            for (let i = 0; i < array.length; i++) {
                showBill += `${array[i].name}: ${array[i].quantity}pcs - ${array[i].price}USD\n`;
                totalPrice += array[i].quantity * array[i].price;
                if (
                    array[i].price * array[i].quantity >
                    theMostExpensive.price * theMostExpensive.quantity
                ) {
                    theMostExpensive = array[i];
                }
            }
            showBill += `Total: ${totalPrice}USD\n`;
            showBill += `The Most Expensive item: ${theMostExpensive.name} - ${
                theMostExpensive.quantity * theMostExpensive.price
            }USD`;
            return showBill;
        }
        alert(`Bill:\n${theMostExpensiveItem(bill)}`);

        function averagePriceItem(array) {
            let showBill = "";
            let totalPrice = 0;
            let totalQuantity = 0;
            let averagePrice = 0;
            for (let i = 0; i < array.length; i++) {
                showBill += `${array[i].name}: ${array[i].quantity}pcs - ${array[i].price}USD\n`;
                totalPrice += array[i].quantity * array[i].price;
                totalQuantity += array[i].quantity;
                averagePrice = totalPrice / totalQuantity;
            }
            showBill += `Total: ${totalPrice}USD\n`;
            showBill += `Average price: ${averagePrice.toFixed(2)}USD`;
            return showBill;
        }
        alert(`Bill:\n${averagePriceItem(bill)}`);
    });

    //6.3 Click on the button to see the array of CSS styles.
    //Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
    //Каждый элемент массива – это объект, состоящий из двух свойств: 
    //название стиля и значение стиля. Написать функцию, 
    //которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
    //добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
    const sixthSectionThirdBtn = document.getElementById("task6.3");
    sixthSectionThirdBtn.addEventListener("click", () => {
        const cssStyles = [{
                name: "color",
                value: "yellow",
            },
            {
                name: "font-weght",
                value: 700,
            },
            {
                name: "font-size",
                value: "80px",
            },
            {
                name: "text-align",
                value: "center",
            },
            {
                name: "box-shadow",
                value: "inset 5px 5px 10px 4px rgba(0, 0, 0, 0.5)",
            },
        ];

        const setStyles = (array, text) => {
            let addStyle = `<p style="`;
            for (let i of array) {
                addStyle += `${i.name}: ${i.value};\n`;
            }
            addStyle += `"> ${text} </p>`;
            document.write(addStyle);
        }
        setStyles(cssStyles, 'JavaScript');
    });

    //6.4 Click on the button to see the array of academy classrooms.
    //Создать массив аудиторий академии. 
    //Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. 
    //Написать несколько функций для работы с ним:
    //Вывод на экран всех аудиторий;
    //Вывод на экран аудиторий для указанного факультета;
    //Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
    //Функция сортировки аудиторий по количеству мест;
    //Функция сортировки аудиторий по названию (по алфавиту).
    const sixthSectionFourthBtn = document.getElementById("task6.4");
    sixthSectionFourthBtn.addEventListener("click", () => {
        let classrooms = [{
                name: '201',
                seats: 12,
                subject: 'Mathematics',
            },
            {
                name: '303',
                seats: 14,
                subject: 'History',
            },
            {
                name: '109',
                seats: 16,
                subject: 'English',
            },
            {
                name: '210',
                seats: 18,
                subject: 'Science',
            },
            {
                name: '205',
                seats: 20,
                subject: 'Geography',
            },
        ];

        const showAllClassrooms = (array) => {
            let result = '';
            for (let i of array) {
                result += `Subject: ${i.subject}\n (classroom - "${i.name}" (${i.seats} seats));\n`;
            }
            return result;
        }
        alert(showAllClassrooms(classrooms));

        const searchTheClassroom = (array) => {
            const subjectName = prompt('Enter your subject`s name (Mathematics, History, English, Science, Geography)', 'History');
            let result = '';
            let falseResult = '';
            for (let i of array) {
                if (subjectName === i.subject) {
                    result += `Subject: ${i.subject}\n classroom - ${i.name} (${i.seats} seats)\n`;
                } else {
                    falseResult = 'Sorry, but there are no such subjects =(';
                }
            }
            if (result === '') {
                return falseResult;
            } else {
                return result;
            }
        }
        alert(searchTheClassroom(classrooms));

        const searchTheClassForGroup = (array) => {
            const classroomName = prompt(
                `Enter name of classrom for search (201, 303, 109, 210, 205)`, '210');
            let result = '';
            let falseResult = '';
            for (let i of array) {
                if (i.name === classroomName) {
                    result += `Your subject is: ${i.subject}\n Your classroom is: ${i.name}\n There are: ${i.seats} seats`;
                } else {
                    falseResult = 'Sorry, try again! =(';
                }
            }
            if (result === '') {
                return falseResult;
            } else {
                return result;
            }
        }
        alert(searchTheClassForGroup(classrooms));

        const sortingBySeatQuantity = (array) => {
            array.sort((a, b) => a.seats > b.seats ? 1 : -1);
            let result = '';
            for (let i of array) {
                result += `${i.subject}: classroom - ${i.name} (${i.seats} seats)\n`;
            }
            return result;
        }
        alert(sortingBySeatQuantity(classrooms));

        const sortingByClassroomName = (array) => {
            array.sort((a, b) => a.name > b.name ? 1 : -1);
            let result = '';
            for (let i of array) {
                result += `${i.subject}: classroom - ${i.name} (${i.seats} seats)\n`;
            }
            return result;
        }
        alert(sortingByClassroomName(classrooms));
    });
};
//Arrays End