var Game = function(board, player1, player2){
  this.board = new Board();
  this.player1 = new Player();
  this.player2 = new Player();
};

Game.prototype.nextPlayer = function(){
//  sets the turn based on the turnCounter,
  var turnCounter = bla;

 // checks the winner from the Board() class,

 // updates the DOM.
};

Game.prototype.updateScore = function(){
// updates the scoreboard based on the playerScore from the Player() class.

// updates the DOM



};

Game.prototype.init = function(){

// init() - initializes a new game with a board and two players.

// Make sure to add a click event handler for each of the board's cells on the DOM.

// This should in turn call the makeMove() method on the Board() class.
};

// Create a Player() class that has a team, cellID, and playerScore property.
var Player = function(team, cellID, playerScore){
  this.team = team;
  this.cellID = cellID;
  this.playerScore = playerScore;
};


// Create a Board() class that has a 'moveArr' property with a null array to hold the moves

//  along with a $cells property to assign each cell to a box in the DOM.

// Finally, add an event handler on the reset button to call the resetBoard() method.

var Board = function($cells){
  this.$cells =$cells;
  this.moveArr = [];
};

// Methods
Board.prototype.makeMove = function(){
// makeMove() - sets a box to a player/team and updates the moveArr array. Make sure to prevent occupied boxes from being used (alert the user).

};

Board.prototype.winCondition = function(){
// array which holds the winining conditions for the board

};


Board.prototype.checkWinner = function(){
// checks the board for winning combinations against the values of each player/team and alerts the players which player won or if it's a tie

};

Board.prototype.resetBoard = function(){
//resets the board to its initial state and resets the moveArr holding the player values (via the nullArray() method) and turn counter
//
};

Board.prototype.nullArray = function(moveArr){
// resets the moveArr
  moveArr = [];
};














