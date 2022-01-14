const inquirer = require('inquire');
const Enemy = require('./Enemy.js');
const Player = require('./Player');

// constructor
function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;
}

// add the initializeGame() method using the prototype syntax
Game.prototype.initializeGame = function() {
    // populate the enemies array
    this.enemies.push(new Enemy('goblin', 'sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];
    
}

inquirer
.prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
})
// destructure name from the prompt object
.then(({name}) => {
    this.player = new Player(name);

    // test the object creation
    console.log(this.currentEnemy, this.player);
});


module.exports = Game;