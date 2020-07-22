// 1е задание
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 Выводит 2 т.к ++a префиксная форма инкремента увеличения переменной на 1 ,сразу ввыводит новое значение.
// d = b++; alert(d);           // 1 Выводит 1 т.к b++ постпрефиксная форма инкремента увеличения перемнной на 1  возвращает старое значение (которое было до увеличения)
// c = (2+ ++a); alert(c);      // 5 Выводит 5 т.к. префиксная форма инкремента добавит к прошлому ++a ещё 1цу. итого c = 2+3= 5
// d = (2+ b++); alert(d);      // 4 Выводит 4 т.к. постпрефикс только получил +1 к базовой единице соответственно d = 2+2 =4
// alert(a);                    // 3 после всех проделанных действий при выводе получаем изменёные переменные а = 3 и b =3 ;
// alert(b);                    // 3 

//2ое задание
// var a = 2;
// var x = 1 + (a *= 2);
// Результат будет 5 var x = 1 +(a = a*2)

// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. 
// ### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. 
// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. 
// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). 
// ### 7) *Сравнить null и 0. Попробуйте объяснить результат. 
// ### 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.



function plus(a, b) {
    if (a && b > 0) {
        console.log(a - b)
    } else if (a < 0 && b < 0) {
        console.log(a * b)
    } else if (a >= 0 && b <= 0 || a <= 0 && b >= 0) {
        console.log(a + b)
    }
}
plus();
// ### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
let a = 15;
switch (a) {
    case 1:
        console.log('not 15')
        break;
    case 2:
        console.log('not 15')
        break;
    case 3:
        console.log('not 15')
        break;
    case 4:
        console.log('not 15')
        break;
    case 5:
        console.log('not 15')
        break;
    case 6:
        console.log('not 15')
        break;
    case 7:
        console.log('not 15')
        break;
    case 8:
        console.log('not 15')
        break;
    case 9:
        console.log('Sweet 9')
        break;
    case 10:
        console.log('not 15')
        break;
    case 11:
        console.log('not 15')
        break;
    case 12:
        console.log('not 15')
        break;
    case 13:
        console.log('not 15')
        break;
    case 14:
        console.log('not 15')
        break;
    case 15:
        console.log('Sweet 15')
        break;

    default:
        console.log('Мимо')
        break;
}
// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
function summ(arg1, arg2) {
    return arg1 + arg2
}

function minus(arg1, arg2) {
    return arg1 - arg2
}

function division(arg1, arg2) {
    return arg1 / arg2
}

function multi(arg1, arg2) {
    return arg1 * arg2
}
// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return summ(arg1, arg2)
            break;
        case '-':
            return minus(arg1, arg2)
            break;
        case '/':
            return division(arg1, arg2)
            break;
        case '*':
            return multi(arg1, arg2)
            break;
    }
}
// ### 7) *Сравнить null и 0. Попробуйте объяснить результат.
//null === 0 - flase т.к null - пустота

// ### 8) *С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    return val ** pow
}
power()

function some(x, n) {
    if (n == 1) {
        return x
    } else {
        return x * some(x, n - 1)
    }
}
some()