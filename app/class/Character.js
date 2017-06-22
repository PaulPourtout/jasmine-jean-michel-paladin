module.exports =
  class Character {

    constructor(name) {
      // Your code
      this.name = name;
      this.healthPoints = 100;
      this.isAlive = true;
      this.damageTable = {
        min: 1,
        max: 10,
        bonus: 0
      }
    }

    toString() {
      if (this.isAlive) {
        return "name : " + this.name + " health : " + this.healthPoints;
      }
      else {
        return `name: ${this.name} defeated`;
      }
    }

    _calculateDamage(min, max, bonus) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    _suffersAttack(damagePoints) {
      this.healthPoints = this.healthPoints - damagePoints;
      if (this.healthPoints <= 0) {
        this.isAlive = false;
      }
    }

    attacks(character) {
      // Your code

    }

  }

// const character = new Character("Jean-claude");

// character.toString();
