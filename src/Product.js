import {nanoid} from 'nanoid'

class Product {
    id: nanoid;
    name: "";
    price: 0;

    constructor(id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

export {Product}