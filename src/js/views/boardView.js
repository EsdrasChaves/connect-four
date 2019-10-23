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