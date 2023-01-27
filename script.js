const small = {
    size: 'small', 
    prise: 50,
    callories: 20
};
const medium = {
    size: 'mediun', 
    prise: 75,
    callories: 30
};
const large = {
    size: 'large', 
    prise: 100,
    callories: 40
};
//--//
const thin = {
    dough: 'thin',
    prise: 0,
    callories: 0
};
const thick = {
    dough: 'thick',
    prise: 0,
    callories: 10
};
//--//
const cheese = {
    topping: 'cheese',
    prise: 10,
    callories: 20
};
const sausage = {
    topping: 'sausage',
    prise: 20,
    callories: 5
};
const pineapple = {
    topping: 'pineapple',
    prise: 15,
    callories: 5
};
const spice = {
    topping: 'spice',
    prise: 15,
    callories: 0
};
const sauce = {
    topping: 'sauce',
    prise: 20,
    callories: 5
};
//--//
class Pizza {
    constructor(size) {
        this.size = size;
        this.dough = {
            dough: 'thin',
            prise: 0,
            callories: 0
        };
    };
    changeDough = function (dough) {
        this.dough = dough;
    };
    addTopping = function (topping) {
        if (!this.topping) {
            this.topping = [];
        }
        this.topping.push(topping);
    }
    getPrice = function () {
        if (!this.topping) {
            return this.size.prise + this.dough.prise;
        } else {
            return this.topping.reduce((acc, el) => {
                acc += el.prise;
                return acc;
            }, this.size.prise + this.dough.prise);
        }
    }
    getCallories = function () {
        if (!this.topping) {
            return this.size.callories + this.dough.callories;
        } else {
            return this.topping.reduce((acc, el) => {
                acc += el.callories;
                return acc;
            }, this.size.callories + this.dough.callories);
        }
    }
}
//--//
const pizza = new Pizza(medium);
pizza.changeDough(thick);
pizza.addTopping(cheese);
pizza.addTopping(cheese);
pizza.addTopping(sausage);
pizza.addTopping(pineapple);
pizza.addTopping(sauce);
//--//
console.log('Total price:' + pizza.getPrice() + '$');
console.log('Total callories:' + pizza.getCallories() + '(kkal)');