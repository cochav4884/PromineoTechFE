let count = 0;

class Animal {
    constructor(name) {
        this.isDead = false;
        this.name = name;
        this.health = randomNum(50,100);
    }
    
    eat(food) {
    console.log(`${this.name} eats ${food}`);
}

    canSwim() {
    console.log(`${this.name} can swim`);
}

    environment() {
    console.log(`${this.name} can live in the environment`);
    }
}


class Tiger extends Animal {
    constructor(name) {
        super(name);
        this.canSwim = true;
        this.environment = 'jungle';
        count++;
        console.log(`There are ${count} tigers`);
    }
}

class Dolphin extends Animal {
    constructor(name) {
        super(name);
        this.canSwim = true;
        this.environment = 'ocean';
    }
}

class Giraffe extends Animal {
    constructor(name) {
        super(name);
        this.canSwim = false;
        this.environment = 'savannah';
    }
}   

let Tony = new Tiger ('Tony');
let Jessica = new Dolphin ('Jessica');
let Corinne = new Giraffe ('Corinne');

let animals = [Tony, Jessica, Corinne];

Tony.eat(`cereal`);
Jessica.eat(`fish`);
Corinne.eat(`leaves`);


for (let animal of animals) {
    if (animal.canSwim) {
        console.log(`${animal.name} can swim`);
    } else {
        console.log(`${animal.name} is dead`);
    }
}

for (let x = 0; x < 100; x++) {
    new Tiger(`Tiger${x}`);
}

console.log(Tony, Jessica, Corinne);









function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}