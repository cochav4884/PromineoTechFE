class Monster {
  constructor(name) {
    this.isAlive = true;
    this.name = name;
    this.health = randomNum(50, 100);
  }

  eat(food) {
    console.log(`${this.name} eats ${food.name}`);
    food.health -= randomNum(7, 15);

    if (food.constructor.name === "Zombie") {
      food.infect(this);
    }
  }
}

class Werewolf extends Monster {
  constructor(name) {
    super(name);
  }

  transform() {
    this.wolfMode = !this.wolfMode;
    console.log(`${this.name} is ${this.wolfMode ? "" : "NOT"} in wolf mode`);
    if (this.wolfMode) {
      this.infected = false;
    } else {
      this.health += randomNum(15, 25);
    }
  }

  reproduce(monsters) {
    let babywolf = new Werewolf(`baby${this.name}`);
    babywolf.health = Math.round(babywolf.health / 3);
    this.health /= 2;
    console.log(
      `Congratulations! ${this.name} made a baby called ${babywolf.name} who has ${babywolf.health} health.`
    );
    monsters.push(babywolf);
  }

  furryMode(monsters) {
    let otherMonsters = monsters.filter((m) => m.name !== this.name);
    for (let monster of otherMonsters) {
      let damage = randomNum(3, 10);
      console.log(
        `${this.name} attacked ${monster.name} and did ${damage} damage.`
      );
    }
  }
}

class Vampire extends Monster {
  constructor(name) {
    super(name);
  }

  bite(opponent) {
    let amount = randomNum(10, 20);
    this.health += amount / 2;
    opponent.health -= amount;
    console.log(
      `${this.name} bit ${opponent.name} taking ${amount} health from them`
    );
    if (opponent.constructor.name === "Zombie") {
      opponent.infect(this);
    }
  }

  hypnotize(target, options) {
    let index = randomNum(0, options.length - 1);
    let newTarget = options[index]; // Correct array indexing
    let damage = randomNum(20, 30); // Example damage range, you can adjust it as needed
    newTarget.health -= damage;
    console.log(
      `${this.name} hypnotized ${newTarget.name} to attack ${newTarget.name} for ${damage}, who has ${newTarget.health} health remaining`
    );
  }

  drinkPotion() {
    let amount = randomNum(15, 30);
    console.log(
      `${this.name} dranks a potion that has ${amount} health benefits. And now ${this.name} has ${this.health}`
    );
    this.health += amount;
  }
}

class Zombie extends Monster {
  constructor(name) {
    super(name);
  }

  infect(target) {
    target.infected = true;
    console.log(`${this.name} infected ${target.name}`);

    setInterval(() => {
      if (target.infected && target.isAlive) {
        target.health -= 3;
        console.log(`${target.name} is infected and lost health`);
      }
    }, 5000);
  }

  getWeapon(target) {
    const weapons = [
      { name: "Sword", damage: 25 },
      { name: "Axe", damage: 30 },
      { name: "Bow", damage: 15 },
      { name: "Dagger", damage: 20 },
      { name: "Mace", damage: 28 },
      { name: "SilverStake", damage: 100 },
    ];

    let weapon = weapons[randomNum(0, weapons.length - 1)];
    console.log(
      `${this.name} is targeting ${target.name} with a ${weapon.name} which does ${weapon.damage}.`
    );
    target.health -= weapon.damage;
  }
}

class Game {
  constructor(monsters) {
    this.monsters = monsters;
    this.time = 7 * 60000; //7 minutes in milliseconds
    this.initGame();
  }

  initGame() {
    setInterval(() => {
      for (let m of this.monsters) {
        if (m.health <= 0) {
          m.isAlive = false;
        }
      }
      let allDead = this.monsters.filter((m) => !m.isAlive);
      this.monsters = this.monsters.filter((m) => m.isAlive);
      for (let dead of allDead) {
        console.log(
          `${dead.name} you got murdered and have ${dead.health} health left.`
        );
      }
    }, 10000); //check every 10 seconds

//     {
//       setInterval(() => {
//         console.log('time remaining: ', this.time);
//         if (this.time <= 0) { //If time runs out, game is over
//             console.log
//             ( 'Game is over!' );
//         }
//       }, 1000 * 60); //check every minute
//     }
//   }


 // Start the countdown timer
 let timerInterval = setInterval(() => {
    console.log('Time remaining: ', this.time);
    if (this.time <= 0) { // If time runs out, game is over
      console.log('Game is over!');
      clearInterval(timerInterval); // Stop the timer when game is over
    } else {
      this.time -= 60000; // Decrement time by 1 minute (60,000 ms)
    }
  }, 1000 * 60); // check every minute
}

}

let Tony = new Vampire("Tony");
let Jessica = new Zombie("Jessica");
let Mark = new Werewolf("Mark Anthony");
let Corinne = new Vampire("Corinne");

let monsters = [Tony, Jessica, Mark, Corinne];

for (let monster of monsters) {
  console.log(monster);
}

let game = new Game(monsters);

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
