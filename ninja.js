class Ninja {
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health || 0;
        this.speed = speed || 3;
        this.strength = strength || 3;
    }
    sayName() {
        console.log(`${this.name}`)
    }
    showStats() {
        console.log(`Your stats are, Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom || 0;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();