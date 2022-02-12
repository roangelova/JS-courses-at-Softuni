class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {
            "child": 150,
            "student": 300,
            "collegian": 500
        };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        if (!this.priceForTheCamp[condition]) {
            throw new Error('Unsuccessful registration at the camp.');
        }
        if (this.listOfParticipants.some(x => x.name == name)) {
            return `The ${name} is already registered at the camp.`;
        }
        let priceToStay = this.priceForTheCamp[condition];
        if (Number(money) < priceToStay) {
            return `The money is not enough to pay the stay at the camp.`;
        }
        this.listOfParticipants.push({
            name: name,
            condition: condition,
            power: 100,
            wins: 0
        })
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(x => x.name == name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } else {
            let indexOfParticipant = this.listOfParticipants.findIndex(x => x.name == name);
            this.listOfParticipants.splice(indexOfParticipant, 1);
            return `The ${name} removed successfully.`;
        }
    }


    timeToPlay(typeOfGame, participant1, participant2 = '') {
        let first = this.listOfParticipants.find(x => x.name == participant1); 
        if (typeOfGame == "Battleship") {
            if (first == undefined) {
                throw new Error(`Invalid entered name/s.`)
            } else {
                first.power += 20;
                return `The ${participant1} successfully completed the game Battleship.`;
            }
        } else {
            //WaterBalloonFights
            let second = this.listOfParticipants.find(x => x.name == participant2);
            if (first == undefined || second == undefined || participant2=='') {
                throw new Error(`Invalid entered name/s.`)
            };
            if (first.condition != second.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (first.power > second.power) {
                first.wins += 1;
                return `The ${first.name} is winner in the game WaterBalloonFights.`
            } else if (first.power < second.power) {
                second.wins += 1;
                return `The ${second.name} is winner in the game WaterBalloonFights.`;
            } else {
                return `There is no winner.`;
            }
        }
    }

    toString(){
    let result = [];
    result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);
     this.listOfParticipants = this.listOfParticipants.sort((a,b) => b.wins - a.wins);
     for (const participant  of this.listOfParticipants) {
         result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
     }
     return result.join('\n');
    } 
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());


