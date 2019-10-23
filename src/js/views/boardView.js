import { elements } from './common';

const playerColorClasses = ['column__space--red', 'column__space--yellow'];
const playerTempColorClasses = ['column__space--bright-red', 'column__space--bright-yellow'];

export const addTempCell = (currPlayer, col, row) => {
  const cell = document.querySelector(`.column__space[data-col="${col}"][data-row="${row}"]`);

  cell.classList.add(playerTempColorClasses[currPlayer]);
};

export const removeTempCell = (currPlayer, col, row) => {
  const cell = document.querySelector(`.column__space[data-col="${col}"][data-row="${row}"]`);

  cell.classList.remove(playerTempColorClasses[currPlayer]);
};

export const addNewPiece = (currPlayer, col, row) => {
  const cell = document.querySelector(`.column__space[data-col="${col}"][data-row="${row}"]`);
  cell.classList.remove(playerTempColorClasses[currPlayer]);
  cell.classList.add(playerColorClasses[currPlayer]);
};

export const resetBoard = () => {
  elements.player1.classList.remove('player-container--disabled');
  elements.player2.classList.add('player-container--disabled');
  elements.playerStatus.forEach(status => status.style.display = 'none');

  elements.slots.forEach(slot => {
    slot.className = 'column__space';
  });
};

export const togglePlayer = () => {
  elements.player1.classList.toggle('player-container--disabled');
  elements.player2.classList.toggle('player-container--disabled');
};

export const displayWinner = (player) => {
  const winnerContainer = document.querySelector(`.player-container--${player}`);
  console.log(winnerContainer);
  winnerContainer.querySelector('.player-container__status').style.display = 'block';
};