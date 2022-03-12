class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let added = [];
        for (let element of vegetables) {
            element = element.split(' ');
            let isAvailable = this.availableProducts.find(x => x.type == element[0]);
            if (isAvailable == undefined) {
                this.availableProducts.push({
                    type: element[0],
                    quantity: Number(element[1]),
                    price: Number(element[2])
                });
                added.push(element[0]);
            }
            else {
                isAvailable.quantity += Number(element[1]);
                if (Number(element[2]) > isAvailable.price) {
                    isAvailable.price = Number(element[2]);
                }
            }
        };
        return `Successfully added ${added.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let total = 0;
        for (let element of selectedProducts) {
            element = element.split(' ');
            let isAvailable = this.availableProducts.find(x => x.type == element[0]);
            if (isAvailable == undefined) {
                throw new Error(`${element[0]} is not available in the store, your current bill is $${total.toFixed(2)}.`);
            }
            if (Number(element[1]) > isAvailable.quantity) {
                throw new Error(`The quantity ${element[1]} for the vegetable ${element[0]} is not available in the store, your current bill is $${total.toFixed(2)}.`)
            }
            let totalSum = isAvailable.price * Number(element[1]);
            total += totalSum;
            isAvailable.quantity -= Number(element[1]);
        }

        return `Great choice! You must pay the following amount $${total.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        let isAvailable = this.availableProducts.find(x => x.type == type);
        if (isAvailable == undefined) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (Number(quantity) > isAvailable.quantity) {
            isAvailable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            isAvailable.quantity -= Number(quantity);
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision(){
        let result = [];
        result.push("Available vegetables:");
        this.availableProducts.sort((a,b) => a.price - b.price);
        for (const p of this.availableProducts) {
            result.push(`${p.type}-${p.quantity}-$${p.price}`);
        }
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);
        return result.join('\n');
    }

}


