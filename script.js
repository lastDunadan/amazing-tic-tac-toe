/*global document*/
/*global console*/

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //Variables for players
  var playerClasses = {
    'pinkPlayer' : 'os',
    'bluePlayer' : 'xs'
  },
    currentPlayer,
    emptyFields;

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
      diagTwo = cells[6].className + cells[4].className + cells[2].className;

    if (rowOne === 'ososos' ||
        rowTwo === 'ososos' ||
        rowThree === 'ososos' ||
        colOne === 'ososos' ||
        colTwo === 'ososos' ||
        colThree === 'ososos' ||
        diagOne === 'ososos' ||
        diagTwo === 'ososos') {
      alert("Pink Circle Wins!");
      return;
    }

    if (rowOne === 'xsxsxs' ||
        rowTwo === 'xsxsxs' ||
        rowThree === 'xsxsxs' ||
        colOne === 'xsxsxs' ||
        colTwo === 'xsxsxs' ||
        colThree === 'xsxsxs' ||
        diagOne === 'xsxsxs' ||
        diagTwo === 'xsxsxs') {
      alert("Blue Cross Wins!");
      return;
    }

    //Checking for last cell to fill up
    console.log('Cells left: ' + emptyFields);
    if (emptyFields === 0) {
      alert("Tie!");
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

  //Run game and conditions
  function gameStart() {
    var cells = document.querySelectorAll('.cell-wrapper > div');

    emptyFields = 9;
    currentPlayer = 'pinkPlayer';

    cells.forEach(function (cell) {
      cell.addEventListener('click', cellClickHandler);
    });
  }

  gameStart();

});
