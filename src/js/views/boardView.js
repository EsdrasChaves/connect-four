const playerColorClasses = ['column__space--red', 'column__space--yellow'];
const playerTempColorClasses = ['column__space--bright-red', 'column__space--bright-yellow'];

export const toggleTempCell = (currPlayer, col, row) => {
  const cell = document.querySelector(`.column__space[data-col="${col}"][data-row="${row}"]`);
  cell.classList.toggle(playerTempColorClasses[currPlayer]);
}