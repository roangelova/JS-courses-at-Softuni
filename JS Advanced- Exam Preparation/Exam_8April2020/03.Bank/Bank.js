class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (this.allCustomers.some(x => x.firstName == customer.firstName
            && x.lastName == customer.lastName
            && x.personalId == customer.personalId)) {
            throw new Error(`${cust.firstName} ${cust.lastName} is already our customer!`);
        }
        let cust = {
            firstName: customer.firstName,
            lastName: customer.lastName,
            personalId: customer.personalId,
            totalMoney : 0,
            transactions : [],
        };
        this.allCustomers.push(cust);
        return cust;
    }

    depositMoney(personalId, amount) {
        let cust = this.allCustomers.find(x => x.personalId == personalId);
        if (cust == undefined) {
            throw new Error('We have no customer with this ID!');
        }
        cust.totalMoney += amount;
        cust.transactions.unshift(`${cust.firstName} ${cust.lastName} made deposit of ${amount}$`);
        return `${cust.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let cust = this.allCustomers.find(x => x.personalId == personalId);
        if (cust == undefined) {
            throw new Error('We have no customer with this ID!');
        }
        if (cust.totalMoney < amount) {
            throw new Error(`${cust.firstName} ${cust.lastName} does not have enough money to withdraw that amount!`);
        } else {
            cust.totalMoney -= amount;
            cust.transactions.unshift(`${cust.firstName} ${cust.lastName} withdrew ${amount}$`);
            return `${cust.totalMoney}$`;
        }
    }




    customerInfo(personalId) {
        let cust = this.allCustomers.find(x => x.personalId == personalId);
        if (cust == undefined) {
            throw new Error('We have no customer with this ID!');
        }
        let info = [];
        info.push(`Bank name: ${this._bankName}`);
        info.push(`Customer name: ${cust.firstName} ${cust.lastName}`);
        info.push(`Customer ID: ${cust.personalId}`);
        info.push(`Total Money: ${cust.totalMoney}$`);
        info.push('Transactions:');
        
        let count = cust.transactions.length;
        info.push(cust.transactions.map(tr => {
            const str = `${count}. ${tr}!`;
            count--;
            return str;})
            .join('\n'));
        return  info.join('\n'); 
    }
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
//console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
//bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
