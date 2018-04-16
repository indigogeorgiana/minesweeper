document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
 var board = { 
  cells: [
  //Row Zero
    {row: 0, col: 0, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 0, col: 1, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 0, col: 2, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 0, col: 3, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 0, col: 4, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 0, col: 5, isMine: true, isMarked: "", hidden:true, surroundingMines:''},
  //Row One
    {row: 1, col: 0, isMine: false, isMarked: "", hidden:true , surroundingMines:''},
    {row: 1, col: 1, isMine: true, isMarked: "", hidden:true , surroundingMines:''}, 
    {row: 1, col: 2, isMine: false, isMarked: "", hidden:true , surroundingMines:''}, 
    {row: 1, col: 3, isMine: false, isMarked: "", hidden:true , surroundingMines:''},
    {row: 1, col: 4, isMine: false, isMarked: "", hidden:true , surroundingMines:''}, 
    {row: 1, col: 5, isMine: true, isMarked: "", hidden:true , surroundingMines:''},
  //Row Two
    {row: 2, col: 0, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 2, col: 1, isMine: true, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 2, col: 2, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 2, col: 3, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 2, col: 4, isMine: true, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 2, col: 5, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
  //Row Three
    {row: 3, col: 0, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 3, col: 1, isMine: true, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 3, col: 2, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 3, col: 3, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 3, col: 4, isMine: true, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 3, col: 5, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
  //Row Four
    {row: 4, col: 0, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 4, col: 1, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 4, col: 2, isMine: true, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 4, col: 3, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 4, col: 4, isMine: false, isMarked: "", hidden:true, surroundingMines:''}, 
    {row: 4, col: 5, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
  //Row Five
    {row: 5, col: 0, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 5, col: 1, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 5, col: 2, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 5, col: 3, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 5, col: 4, isMine: false, isMarked: "", hidden:true, surroundingMines:''},
    {row: 5, col: 5, isMine: true, isMarked: "", hidden:true, surroundingMines:''},
    ]
 }
  
// Don't remove this function call: it makes the game work!
function startGame () {
// Write a for loop that loops through the contents of board.cells.
for (var i = 0; i <board.cells.length; i++){
//You'll need to pass each cell as an argument, call countSurroundingMinesfor each cell in board.cells. 
//Assign the result of countSurroundingMines to a property on each cell object. The new property 
//should be called surroundingMines
board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
 }
  lib.initBoard()
 }
// Define this function to look for a win condition:
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
//Define the checkForWin function. It should loop through all of board.cells.  
  for (var i = 0; i < board.cells.length; i++) {
//Check to see if both .isMine and .isMarked are true. 
//If any mine still exists that isn't marked, the player hasn't won yet and you 
//can return out of the function.    
    var check = board.cells[i];
    if (check.isMine && !check.isMarked){
      return;
    }
//If every mine is marked, but there are still cells with the hidden property 
//set to true, the player hasn't won yet and you can return out of the function.    
    else if (!check.isMine && check.hidden) {
      return;
    } 
  }
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
  lib.displayMessage('You win!')
  document.addEventListener('contextmenu', checkForWin);
  document.addEventListener('click', checkForWin);  
}

  function countSurroundingMines (cell) {
//Define functions it so it returns the number of cells 
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
// Define this function to count the number of mines around the cell
// (there could be as many as 8).      
  var count = 0;
// It will return cell objects in an array, You should loop through
//them, counting the number of times `cell.isMine` is true.
  for (var i = 0; i < surrounding.length; i++){
//around the current cell that have the isMine property set to true 
    if (cell.isMine[i] == true){
     count++;
    }
  }
     return count;
  }
  