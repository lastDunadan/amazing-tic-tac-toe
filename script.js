/*global document*/
/*global console*/
/*global alert*/
/*global $*/

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //Variables for players
  var playerClasses = {
    'pinkPlayer' : 'os',
    'bluePlayer' : 'xs'
  },
    currentPlayer,
    emptyFields;

  //Checking for winners or a draw
  function winnerCheck() {
    var cells = document.querySelectorAll('.cell-wrapper > div'),
      //winning rows
      rowOne = cells[0].className + cells[1].className + cells[2].className,
      rowTwo = cells[3].className + cells[4].className + cells[5].className,
      rowThree = cells[6].className + cells[7].className + cells[8].className,
      //winning colums
      colOne = cells[0].className + cells[3].className + cells[6].className,
      colTwo = cells[1].className + cells[4].className + cells[7].className,
      colThree = cells[2].className + cells[5].className + cells[8].className,
      //winning diagonals
      diagOne = cells[0].className + cells[4].className + cells[8].className,
      diagTwo = cells[6].className + cells[4].className + cells[2].className,

      boardCheck = [
        rowOne, rowTwo, rowThree,
        colOne, colTwo, colThree,
        diagOne, diagTwo
      ];

    //Checking winning scenarios or calling a tie
    if (boardCheck.includes('ososos')) {
      setTimeout(function () {
        alert("Pink Circle Wins!");
        gameStart();
      }, 100);
    } else if (boardCheck.includes('xsxsxs')) {
      setTimeout(function () {
        alert("Blue Cross Wins!");
        gameStart();
      }, 100);
    } else if (emptyFields === 0) {
      setTimeout(function () {
        alert("Tie!");
        gameStart();
      }, 100);
    }
  }

  //Putting Xs and Os for each player
  function cellClickHandler() {
    
    var playerClass = playerClasses[currentPlayer];

    this.classList.remove('cell');
    this.classList.add(playerClass);

    emptyFields = emptyFields - 1;

    //Switch player every click
    if (currentPlayer === 'pinkPlayer') {
      currentPlayer = 'bluePlayer';
    } else {
      currentPlayer = 'pinkPlayer';
    }

    //Remove click event after clicking in cell
    this.removeEventListener('click', cellClickHandler);

    winnerCheck();

  }

  //Reset Board after each game
  function resetBoard() {
    var cells = document.querySelectorAll('.cell-wrapper > div');
    $(cells).removeClass('xs');
    $(cells).removeClass('os');
    $(cells).addClass('cell');
  }

  //Run game and conditions
  function gameStart() {
    var cells = document.querySelectorAll('.cell-wrapper > div');

    emptyFields = 9;
    currentPlayer = 'pinkPlayer';

    resetBoard();
    cells.forEach(function (cell) {
      cell.addEventListener('click', cellClickHandler);
    });
  }

  gameStart();

});
