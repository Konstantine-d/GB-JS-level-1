class Product {
    name = ''
    price = 0
    count = 1

    constructor(name, price) {
        this.name = name
        this.price = price
        this.mainProductCart()
    }

    inc() {
        this.count++
    }
    dec() {
        this.count--
    }
    addBtn() {
        const btn = document.createElement('button')
        btn.classList.add('btn-buy')
        btn.innerText = 'add'

        btn.addEventListener('click', () => {
            const CartOfProductBox = new CartOfProduct()
            CartOfProductBox.addProduct(this)
            console.log(CartOfProductBox)
        })
        return btn
    }
    minusBtn() {
        const btn = document.createElement('button')
        btn.classList.add('btn-minus')
        btn.innerText = '-'

        btn.addEventListener('click', () => {
            const CartOfProductBox = new CartOfProduct()
            CartOfProductBox.deleteProduct(this)
            console.log(CartOfProductBox)
        })
        return btn
    }
    mainProductCart() {
        const { price, name } = this

        const block = document.createElement('div')
        block.classList.add('main-product-cart')

        block.innerHTML = `
        
        <div class="product-value">Товар: <span>${name}</span></div>
        <div class="product-value">Цена: <span>${price}</span></div>
        `

        block.appendChild(this.addBtn())

        return block
    }
    mainCartValues() {
        const { price, name, count } = this

        const block = document.createElement('div')
        block.classList.add('main-cart-values')
        block.innerHTML = `
        <div class="cart-item">
          ${name}: ${price} X ${count} = ${price * count}
        </div>
        `
        block.appendChild(this.addBtn())
        block.appendChild(this.minusBtn())

        return block

    }

}

class List {

    goods = []
    constructor(goods = []) {
        this.goods = goods
    }

    findProduct(prod) {
        return this.goods.filter(el => el.name === prod.name)[0]
    }

    addProduct(el) {
        const exist = this.findProduct(el)

        if (exist) {
            exist.inc()
        } else {
            this.goods.push(el)
        }
        this.render()
    }

    deleteProduct(el) {
        const exist = this.findProduct(el)

        if (exist.count > 1) {
            exist.dec()
        } else {
            this.goods = this.goods.filter(prod => el.name !== prod.name)
        }
        this.render()
    }
    render() {}
}

class CartOfProduct extends List {
    constructor() {
        if (CartOfProduct._box) {
            return CartOfProduct._box
        }
        super()
        this.init()
        CartOfProduct._box = this
    }
    init() {
        const block = document.createElement('div')
        block.classList.add('cart')

        const btn = document.createElement('div')
        btn.innerHTML = `<p>Корзина</p>`
        btn.classList.add('btn-basket')
        btn.addEventListener('click', () => {
            this.toggle()
        })

        const list = document.createElement('div')
        list.classList.add('cart-list')
        block.appendChild(btn)
        block.appendChild(list)

        const renderPlace = document.querySelector('header')
        if (renderPlace) {
            renderPlace.appendChild(block)
        }

        this.render()
    }
    toggle() {
        const list = document.querySelector('.cart-list')
        list.classList.toggle('basket-box')
    }
    emptyBlock() {
        const block = document.createElement('div')
        block.classList.add('cart-empty')
        block.innerText = 'Купите что-то'
        return block
    }
    summBlock() {
        const sum = this.goods.reduce((box, el) => {
            return box + el.price * el.count
        }, 0)

        const block = document.createElement('div')
        block.classList.add('cart-sum')
        block.innerText = `Стоимость всех выбранных товаров: ${sum}`

        return block
    }
    render() {
        const renderPlace = document.querySelector('.cart-list')
        renderPlace.innerHTML = ''

        if (!this.goods.length) {
            renderPlace.appendChild(this.emptyBlock())
        } else {
            this.goods.forEach(el => {
                renderPlace.appendChild(el.mainCartValues())
            })
            renderPlace.appendChild(this.summBlock())
        }
    }
}

class ProductList extends List {
    constructor() {
        super()
    }

    render() {
        const renderPlace = document.querySelector('.product-list')
        renderPlace.innerHTML = ''

        if (renderPlace) {
            this.goods.forEach(el => {
                const block = el.mainProductCart()
                renderPlace.appendChild(block)
            })
        }
    }

}

const ProductBase = new ProductList()
ProductBase.addProduct(new Product('Стол обеденный Tiffany', 1999))
ProductBase.addProduct(new Product('Диван Честер', 25000))
ProductBase.addProduct(new Product('Диван-кровать Камелот', 20000))


const ProductCart = new CartOfProduct()
ProductBase.render()