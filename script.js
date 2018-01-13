/*global console*/
/*global $, jQuery, alert*/

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //Variables for players
  var playerClasses = {
    'pinkPlayer' : 'os',
    'bluePlayer' : 'xs'
  },
    currentPlayer;

  //Putting Xs and Os for each player
  function cellClickHandler() {
    
    var playerClass = playerClasses[currentPlayer];

    this.classList.remove('cell');
    this.classList.add(playerClass);

    if (currentPlayer === 'pinkPlayer') {
      currentPlayer = 'bluePlayer';
    } else {
      currentPlayer = 'pinkPlayer';
    }

  }

  //Run game
  function gameStart() {
    var cells = document.querySelectorAll('.cell-wrapper > .cell');

    currentPlayer = 'pinkPlayer';
    cells.forEach(function (cell) {
      cell.addEventListener('click', cellClickHandler);
    });
  }

  gameStart();

});
