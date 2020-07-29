// 1) Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
// надо получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
// Например, для числа 245 надо получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 
// 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

const numberBox = {
     'number': prompt('Ведите число от 0 до 999'),
    'units': 0,
    'dozens': 0,
    'hundreds': 0,
}

function addNumbers() {
    if (numberBox.number <= 9) {
        numberBox.units = numberBox.number
    } else if (numberBox.number <= 999) {
        numberBox.units = Math.floor(numberBox.number % 10);
        numberBox.dozens = Math.floor(numberBox.number / 10 % 10);
        numberBox.hundreds = Math.floor(numberBox.number / 100 % 10);
    } else if (numberBox.number > 999) {
        alert('вы ввели слишком большое число')
        return numberBox
    }
}
addNumbers()
    // 2) Продолжить работу с интернет-магазином:
    // В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
    // Реализуйте такие объекты.
    // Перенести функционал подсчета корзины на объектно-ориентированную базу
class Goods {
    constructor(options) {
        this.total = []
        this.summ = 0
        this.del = 0
        this.finalT = 0

    }
    reducer = (a, b) => a + b
    dereducer = (a, b) => a - b

    add(val) {
        this.total.push(val)
        return this.total
    }

    summTotalPrice() {
        this.summ = this.total.reduce(this.reducer)
        return this.summ
    }
    delGoods(val) {
        this.del = this.total.reduce(this.dereducer)
        return this.total.pop(val)
    }
    finalTotal() {
        this.finalT = (this.summ - this.del)
        return this.finalT
    }


}
const myGoods = new Goods()
let summAllGoods = myGoods.summTotalPrice()
let addGoods = myGoods.add()
let del = myGoods.delGoods()
let final = myGoods.finalTotal()

// почему-то ругается на summTotalPrice(reducer)
// если я правильно понимаю потому-что пустой массив в this.total
// но полсе попадания туда числа всё нормально считается
