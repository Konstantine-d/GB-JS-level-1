//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
let k = 0
while (k < 100) {
    let a = 2
    while (a < k) {
        if (k % a === 0) {
            break
        }
        a++
    }
    if (a === k) {
        console.log(i)
    }
    b++
}

//2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
//Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.


// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
let basket = [2, 4, 2555, 1000, 80];

function countBasketPrice() {
    const bask = basket.reduce((a, b) => a + b, 0)

    return console.log(bask)
}
countBasketPrice()

const newWay = () => basket.reduce((a, b) => +a + b, 0)
console.log(newWay())
    // 4. * Вывести с помощью цикла
    // for числа от 0 до 9, не используя тело цикла.Выглядеть это должно так:for(…){здесь пусто}
for (let i = 0; i < 10; console.log(i++)) {}

// 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let strX = ''
for (let i = 0; i < 20; i++) {
    strX = strX + 'x'
    console.log(strX)
}