class ChristmasDinner {
    constructor(value) {
        if (Number(value) < 0) {
            throw new Error("The budget cannot be a negative number");
        } else {
            this.budget = Number(value);
        }
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        //dinner.shopping(['Salt', 1]);  
        let [productType, price] = product;
        if (price > this.budget) {
            throw new Error("Not enough money to buy this product");
        } else {
            this.products.push(productType);
            this.budget -= price;
            return `You have successfully bought ${productType}!`;
        }
    }

    recipes(recipe) {
        let { recipeName, productsList } = recipe;
        for (const product of productsList) {
            if (!this.products.includes(product)) {
                throw new Error("We do not have this product");
            }
        }
        this.dishes.push({
            recipeName: recipeName,
            productsList: productsList,
        });
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.some(x => x.recipeName == dish)) {
            throw new Error("We do not have this dish");
        }
        const isEmpty = Object.keys(this.guests).length;
        if (isEmpty >= 1) {
            if (this.guests[name]) {
                throw new Error("This guest has already been invited");
            }
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let result = [];
        for (const guest in this.guests) {
            let dish = this.dishes.find(x=> x.recipeName == this.guests[guest]);
            result.push(`${guest} will eat ${this.guests[guest]}, which consists of ${dish.productsList.join(', ')}`);
        }
        return result.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
