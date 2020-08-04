// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. 
//Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
const divChekers = document.querySelector('#tableChekers')
const divBask = document.querySelector('#basket')

divBask.classList = 'basketAll'


// const n = 8
// const leters = 'ABCDEFGH'
// const chackersDesk = () => {
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             if ((j + i) % 2 === 0) {
//                 const row = document.createElement('div')
//                 row.classList.add('black')
//                 divChekers.appendChild(row)
//             } else {
//                 const cell = document.createElement('div')
//                 cell.classList = 'white'
//                 divChekers.appendChild(cell)
//             }
//         }

//     }

// }
// chackersDesk()

const field = document.querySelector('.chess')
const letters = 'ABCDEFGH'

const N = 8

for (let i = 0; i < N + 1; i++) {
    const row = document.createElement('div')
    row.classList.add('row')
    for (let j = 0; j < N + 1; j++) {
        const cell = document.createElement('div')
        cell.classList.add('cell')

        if (j && !i) {
            cell.innerHTML = letters[j - 1]
        }

        if (!j && i) {
            cell.innerHTML = N + 1 - i
        }

        if (i && j) {
            cell.classList.add(i % 2 !== j % 2 ? 'black' : 'white')
        }

        row.appendChild(cell)
    }
    field.appendChild(row)
}

// Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
// Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// a) Пустая корзина должна выводить строку «Корзина пуста»;
// b) Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

// 3. *Сделать так, чтобы товары в каталоге выводились при помощи JS:
// a) Создать массив товаров (сущность Product);
// b) При загрузке страницы на базе данного массива генерировать вывод из него. 
// HTML-код должен содержать только div id=”catalog” без вложенного кода. 
// Весь вид каталога генерируется JS.
const product = {
    '1234': {
        name: 'Guns',
        count: 3,
        price: 1200,
    },
    '1235': {
        name: 'Armor',
        count: 3,
        price: 800,
    },
    '1236': {
        name: 'Helmet',
        count: 3,
        price: 1800,
    },
    '1237': {
        name: 'Sword',
        count: 3,
        price: 2200,
    },
    '1238': {
        name: 'Arms',
        count: 3,
        price: 1000,
    },
}

const basket = document.createElement('div')
const clearBasket = document.createElement('p')
class Multi {
    constructor() {
        //считает кол-во count товаров в объекте и перемножает их c price
        this.multiGoods = []
            // в задумке должно считать сумму price всех товаров
            // но как вывести сумму и сделать по всем ключам .price подсчёт вообще не могу продумать
            // уже и в массив пихал и т.д.
        this.summGoods = []

        this.div = document.createElement('div')
        this.pargf = document.createElement('p')
        this.basketBox = document.querySelector('#basket')
            // this.reducer = reduce((x, y) => a + b, 0)
    }

    //умножение кол-ва товаров в объекте на цену
    mnoj() {
        for (const key in product) {
            this.price = product[key].price
            this.count = product[key].count
            this.name = product[key].name
                // console.log(this.name)
                // console.log(this.price)
                // console.log(this.count)
            if (this.price !== 0 && this.count !== 0) {
                this.multiGoods = this.price * this.count
            }
            console.log(this.multiGoods)

        }
    }

    summ() {
        for (let i = 0; i < this.multiGoods.length; i++) {
            let box = this.multiGoods[i]
            const box2 = box.reduce((a, b) => a + b, 0)
            console.log(box2)
        }
        console.log(box2)

        // if (this.summGoods !== null && this.summGoods !== undefined) {
        //     console.log(this.price)
        // }
    }

    // }

    // render() {
    //     if (this.summGoods > 0) {
    //         const para = document.createElement('p')
    //         divBask.appendChild(para)
    //     } else {
    //         if (this.summGoods < 0) {
    //             const para = document.createElement('p')
    //             divBask.appendChild(para)
    //         }
    //     }

    // }
}

let multip = new Multi()
let mnojGods = multip.mnoj()
    // let rend = multip.render()
let sumGood = multip.summ()






// class Goods {
//     constructor(options) {
//         this.total = []
//         this.summ = 0
//         this.del = 0
//         this.finalT = 0
//         this.reducer = (a, b) => a + b, 0
//         this.dereducer = (a, b) => a - b, 0
//     }
//     add(val) {
//         this.total.push(val)
//         return this.total
//     }

//     summTotalPrice() {
//         this.summ = this.total.reduce(this.reducer, 0)
//         return this.summ
//     }
//     delGoods(val) {
//         this.del = this.total.reduce(this.dereducer, 0)
//         return this.total.pop(val)
//     }
//     finalTotal() {
//         this.finalT = (this.summ - this.del)
//         return this.finalT
//     }


// }
// const myGoods = new Goods()
// let summAllGoods = myGoods.summTotalPrice()
// let addGoods = myGoods.add()
// let del = myGoods.delGoods()
// let final = myGoods.finalTotal()