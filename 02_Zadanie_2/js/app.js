
class RPGCharacter {
    constructor(name) {
        this.name = name;
        this.power = null;
        this.intelligence = null;
        this.luck = null;
    }

    randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    fight(opponent) {
        if (this.power === opponent.power) {
          return console.log('remis');
        }
        return this.power > opponent.power ? this.name : opponent.name;
    }
    playChess(opponent) {
        if (this.intelligence === opponent.intelligence) {
            return console.log('remis');
        }
        return this.intelligence > opponent.intelligence ? this.name : opponent.name;
    }
    tossCoin(opponent) {
        if (this.luck === opponent.luck) {
            return console.log('remis');
        }
        return this.luck > opponent.luck ? this.name : opponent.name;
    }
}

class Dwarf extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(40, 100);
        this.intelligence = this.randomNumber(40, 80);
        this.luck = this.randomNumber(40, 100);
        this.race = 'Dwarf';
    }
}

class Orc extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(50, 100);
        this.intelligence = this.randomNumber(5, 20);
        this.luck = this.randomNumber(1, 100);
        this.race = 'Orc';
    }
}

class Elf extends RPGCharacter {
    constructor(name) {
        super(name);
        this.power = this.randomNumber(30, 80);
        this.intelligence = this.randomNumber(60, 100);
        this.luck = this.randomNumber(20, 100);
        this.race = 'Elf';
    }
}

const dwarf = new Dwarf("Durin Kamienny Topór");
const orc = new Orc("Urk'har Niszczyciel");
const elf = new Elf("Naylee z Nieśmiertelnego Lasu");

console.log(orc.fight(elf));
console.log(elf.playChess(dwarf));
console.log(dwarf.tossCoin(elf));