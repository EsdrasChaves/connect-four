import { elements } from './views/common';

import * as boardView from './views/boardView';

import Board from './models/Board';

const state = {
  board: new Board(),
  currentPlayer: 1
};


const init = () => {
  setListeners();
};

const setListeners = () => {
  elements.columns.forEach(column => {
    ['mouseenter', 'mouseleave'].forEach(event => {
      column.addEventListener(event, e => {
        const col = parseInt(e.target.dataset.col);
        const lastEmptyRow = state.board.getLastEmptyRowNum(col);
        boardView.toggleTempCell(state.currentPlayer, col, lastEmptyRow);
      });
    });
  });
}

init();