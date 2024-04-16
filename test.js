// Разница между const и let
// const - если переменная зафиксирована
// let - если переменная может изменится

// Пример, который не работает:
// const x = 5;
// x = 10

// Пример, который работает:
// let x = 5;
// x = 10;



// Всё, что в консоли светится синим цветом, является или булем или числом. Чёрным - строка.


// Активация строго кода.

"use strict";


// Браузерная модалка с вопросом и вариантами ответа "Да" и "Нет", которые приводят к булю.
    
// const shouldRened = confirm('Хотите продлить подписку?');
// console.log(shouldRened);



// Браузерная модалка с инпутом для ввода информации.ввода

// const quantity = prompt('Введите количество товаров');
// console.log(quantity);



// Приведение к числу

// const valueA = "5";
// console.log(Number(valueA));
// console.log(typeof Number(valueA));

// const valueB = "random string";
// console.log(Number(valueB));
// console.log(typeof Number(valueB));


// Класс Math

// // Math.floor(num) - возвращает наибольшее целое число,
// // меньшее, либо равное указанному
// console.log(Math.floor(1.7)); // 1

// // Math.ceil(num) - возвращает наименьшее целое число,
// // большее, либо равное указанному числу.
// console.log(Math.ceil(1.2)); // 2

// // Math.round(num) - возвращает значение числа,
// // округлённое до ближайшего целого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2

// // Math.max(num1, num2, ...) - возвращает наибольшее число из набора
// console.log(Math.max(20, 10, 50, 40)); // 50

// // Math.min(num1, num2, ...) - возвращает наименьшее число из набора
// console.log(Math.min(20, 10, 50, 40)); // 10

// // Math.pow(base, exponent) - возведение в степень
// console.log(Math.pow(2, 4)); // 16

// // Math.random() - возвращает псевдослучайное число в диапазоне [0, 1)
// console.log(Math.random()); // случайное число между 0 и 1
// console.log(Math.random() * (10 - 1) + 1); // псевдослучайное число от 1 до 10



// Конкатенация строк

// 1+2=3
// 1+"2"=12
// 1+2+3=6
// 1+"2"+3=123

// J a v a S c r i p t
// 1 2 3 4 5 6 7 8 9 10



// Операция поиска большего числа

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//   biggerNumber = num1;
// } else {
//   biggerNumber = num2;
// }

// console.log(biggerNumber);

// ИЛИ С ПОМОЩЬЮ ТЕРНАТОРНОГО ОПЕРАТОРА

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber);



// Отсечение лишних дробных чисел

// let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);



// Расчёт степени числа.

// Алгоритм решения задачи:
// 1. Попросить ввести число и сохранить в переменную
// 2. Попросить ввести степень и сохранить в переменную
// 3. Возвести введённые данные в степень и вывести в консоль

// let base = prompt('Введите число');
// base = Number(base);

// console.log(base);

// let power = prompt('Введите степень');
// power = Number(power);

// console.log(power);

// const result = base ** power;

// console.log(result);



// Генератор случайных чисел.

// const max = 100;
// const min = 0;

// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);



// Генератор случайного цвета фона.

// const colors = ['red', 'green', 'blue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;



// Конкатенация строк.

// const firstName = 'Artem';
// const lastName = 'Pugin';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);



// Сколько холодильников вы заказали?

// const quantity = 5;
// const orderMsg = `Вы заказали ${quantity} холодильников.`;

// console.log(orderMsg);



// Нормализация поискового запроса под данные в бэке.

// let brand = 'QwErTyYUU';
// brand = brand.toLowerCase();

// console.log(brand);



// Больше или меньше

// console.log(15 > 3);



// Скрипт, который проверяет вхождение числа

// const x1 = 10;
// const x2 = 30;
// const number = 50;

// // До х1
// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);

// // После х2
// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// // От х1 до х2
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, number > x1 && number < x2);

// // До х1 или после х2
// console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, number > x1 || number < x2);



// Скрипт, который проверяет возможность открыть чат с пользователем.
// Для этого пользователь должен быть:
// - другом
// - онлайн
// - без режима "не беспокоить"

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const canOpenChat = isOnline && isFriend && !isDnd;

// console.log('Можно открыть чат? ', canOpenChat);



// Оператор ветвления if (если true - выполняется, если false - не выполняется).

// True
// if (5 > 3) {
//     console.log('next');
// }

// // False
// if (5 < 3) {
//     console.log('stop');
// }


// Оператор ветвления if...else (если да - сделай это (if). В противном случае - сделай это (else)).

// if (50 > 30) {
//     console.log('x > y');
// } else {
//     console.log('x < y');
// }



// Оператор ветвления else...if (если да - сделай это(if).Если ничего не подошло - сделай это(else)).

// const salary = 500;

// if (salary < 500) {
//     console.log('Уровень 1');
// } else if (salary => 500 && salary < 1500) {
//     console.log('Уровень 2');
// } else if (salary > 1500 && salary < 3000) {
//     console.log('Уровень 3');
// }



// Тернарный оператор

// const balance = -1000;
// // let = message;

// // if (balance >= 0) {
// //     message = 'Позитивный баланс';
// // } else {
// //     message = 'Негативный баланс';
// // }

// // Всё, что описано выше, можно заменить на тернарный оператор:
// // const message = условие ? выражение1 : выражение2;

// const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

// console.log(message);



// Пример блочной области видимости (касается и const и let)

// if (true) {
//     const a = 5;

//     console.log(a); - тут ошибки не будет
// }

// console.log(a); - тут возникает ошибка "переменная А не объявлена". Это происходит потому, что переменная задана в другой области видимости.



// Стоимость отеля https://www.youtube.com/watch?v=K5uLzN8Kn5Y&t=6s 10:00

// const stars = 5;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого количества звёзд нет');
// }

// Либо можно сделать всё это через свитч:

// switch (stars) {
//     case 1:
//         price = 20
//         break;
    
//     case 2:
//         price = 30
//         break;
    
//     case 3:
//         price = 50
//         break;
    
//     case 4:
//         price = 70
//         break;
    
//     case 5:
//         price = 120
//         break;
    
//     default:
//         console.log('Такого количества звёзд нет');
// }

// console.log(price);



// Оператор for (если условие равно тому, что записано под for, то будет выполнено логирование, в противном случае, данный for пропускается)

// for (let i = 0; i <= 50; i += 1) {
//     console.log(i);
// }

// console.log('qwe');



// Напиши скрипт, который подсчитает общую сумму зарплат работников
// Количество работников хранится в переменной emplayees
// Зарплата каждого работника это случайное число от 500 до 5000
// Записать сумму в переменную totalSalary и вывести в консоль

// Алгоритм решения задачи
// 1. Сделать вары
// 2. Перебрать работников в цикле
// 3. Сгенерировать случайную зарплату
// 4. Прибавить к totalSalary
// 5. Залогировать

// const minSalary = 500;
// const maxSalary = 5000;
// const emplayees = 6;
// let totalSalary = 0;

// for (let i = 1; i <= emplayees; i += 1) {
//     const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`Зарплата работника номер ${i} - ${salary}`);

//     totalSalary += salary;
// }

// console.log('Фонд оплаты труда -', totalSalary);



// Напиши скрипт, который подсичтает сумму всех чётных чисел, которые входят в диапазон чисел в переменных
// от mix до max.Например если min = 0 и max = 5, то диапазон 0 - 5 имеет два чётных числа - 2 и 4,
// сумма которых составляет 6.

// Алгоритм решения задачи:
// 1. Сделать вары
// 2. Сделать фор от мин до макс с шагом 1
// 3. Проверяем остаток от деления с помощью школьной формулы(10 % 3) = будет 1
// 4. Записываем сумму

// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     console.log(i);

//     if (i % 2 === 0) {
//         console.log('чётное');

//         total += i;
//     }
// }

// // или логика от обратного: если число не чётное, то происходит переход на следующий шаг

// // for (let i = min; i <= max; i += 1) {
// //     console.log(i);

// //     if (i % 2 !== 0) {
// //         console.log('не чётное: ', i);
// //         continue;
// //     }

// //     console.log('чётное: ', i);
// //     total += 1;
// // }

// console.log('total', total);



// https://www.youtube.com/watch?v=K5uLzN8Kn5Y&t=3478s - 1:15:00
// Напиши скрипт обработки покупки в магазине

// Баланс пользователя хранится в переменной balance

// Сумма покупки хранится в переменной payment

// Перед проверкой вывести сообщение:
// "Общая стоимость заказа (число) кредитов. Проверяем количество доступных средств на счету".

// Если сумма покупки не превышает баланс:
// - вычесть из баланса сумму покупки
// - вывести сообщение "на счёте осталось (число) кредитов"

// Если сумма покупки превышает баланс:
// - вывести сообщение "на счету недостаточно средств для проведения операции!"
// - в конце вывести сообщение "операция завершена"

// Алгоритм:
// - сделать вары
// - 2 условие сумма <= баланс

// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем количество доступных средств на счету.`);

// if (balance >= payment) {
//     balance -= payment;
//     console.log(`На счету осталось ${balance} кредитов.`);
// } else {
//     console.log('На счету недостаточно средств для проведения операции.');
// }

// console.log('Операция завершена.');



// https://www.youtube.com/watch?v=K5uLzN8Kn5Y&t=3478s - 1:17:15
// Напиши скрипт подсчёта суммы покупки со скидкой в зависимости от потраченной суммы за всё время(партнёрская программа).

// - Общая сумма потраченного хранится в переменной totalSpent
// - Сумма текущего платежка хранится в переменной payment
// - Скидка хранится в переменной discount

// Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
// Если потрачено от [1000 до 5000) - серебряный партнёр, скидка 5%
// Если потрачено более 5000 - золотой партнёр, скидка 10%
// Если потрачено менее 100 - не партнёр, скидка 0%

// В результате вывести сообщение:
// "Оформляем заказ на сумму (сумма) со скидкой (скидка)"
    
// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнёр, скидка 2%');

//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебряный партнёр, скидка 5%');

//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('Золотой партнёр, скидка 10%');

//     discount = 0.1;
// } else {
//     console.log('Не партнёр, скидка 0%');
// }

// payment += payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма потраченного в магазине ${totalSpent}`);