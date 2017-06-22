const readlineSync = require('readline-sync');
const clear = require('../utils/clear');

module.exports = class Game {

  constructor() {
    // Your code

  }

  _gameOver() {
    // Your code

  }

  _exit() {
    clear();
    process.exit();
  }

  _setActions() {
    let actionsTable = [];
    let actionNumber = 1;

    if (this.world.player.healthPoints !== 100) {
      actionsTable.push({
        text: `${actionNumber++} - Recover health points`,
        function: this.world.player.heals
      });
    }

    if (this.world.player.damageTable.bonus === 0) {
      actionsTable.push({
        text: `${actionNumber++} - Earn a damage bonus`,
        function: this.world.player.increaseDamageBonus
      });
    }

    this.world.enemies.forEach((enemy) => {
      actionsTable.push({
        text: `${actionNumber++} - Attack ${enemy.name} (${enemy.healthPoints} HP)`,
        function: () => this.world.player.attacks(enemy)
      });
    });

    actionsTable.push({
      text: `${actionNumber++} - Leave the game`,
      function: this._exit
    });

    return (actionsTable);
  }

  _chooseAction() {
    return (readlineSync.question(`Choose an action: `));
  }

  _enemiesTurn() {
    // Your code

  }

  _turn() {
    console.log(`==== Turn no.${this.turn} ====\n`);
    console.log(this.world.player.toString());

    console.log(`\nActions: `);
    this.actionsTable = this._setActions();
    this.actionsTable.forEach((action) => {
      console.log(`${action.text}`);
    });

    console.log();
    let action = this._chooseAction();
    console.log();
    this.actionsTable[action - 1].function();

    this.world.enemies = this.world.enemies.filter((enemy) => enemy.isAlive)

    console.log();
    this._enemiesTurn();
    console.log();

    console.log();
    this.turn++;
  }

  _gameLoop() {
    // Your code

  }

  start() {
    clear();
    console.log(`Thus begins the adventure of ${this.world.player.name}!\n\n\n`);
    this._gameLoop();
  }

}
