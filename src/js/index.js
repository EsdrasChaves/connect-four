import { elements } from './views/common';

import * as boardView from './views/boardView';

import Board from './models/Board';

const state = {
  board: new Board(),
  currentPlayer: 0,
  isRunning: false
};

const setListeners = () => {
  elements.playButton.addEventListener('click', e => {
    state.board.resetGame();
    boardView.resetBoard();
    state.isRunning = true;
    state.currentPlayer = 0;
  });

  elements.columns.forEach(column => {
    column.addEventListener('mouseenter', e => {
      if (state.isRunning) {
        const col = parseInt(e.target.dataset.col);
        const lastEmptyRow = state.board.getLastEmptyRowNum(col);
  
        if(lastEmptyRow !== -1)
          boardView.addTempCell(state.currentPlayer, col, lastEmptyRow);
      }
    });
  });

  elements.columns.forEach(column => {
    column.addEventListener('mouseleave', e => {
      if (state.isRunning) {
        const col = parseInt(e.target.dataset.col);
        const lastEmptyRow = state.board.getLastEmptyRowNum(col);
        if (lastEmptyRow !== -1)
          boardView.removeTempCell(state.currentPlayer, col, lastEmptyRow);
      }
    });
  });

  elements.columns.forEach(column => {
    column.addEventListener('click', e => {
      if (state.isRunning) {
        const col = parseInt(e.target.dataset.col);
        const row = state.board.getLastEmptyRowNum(col);
  
        if (state.board.makePlay(state.currentPlayer, col, row) !== -1) {
          boardView.addNewPiece(state.currentPlayer, col, row);
          if (state.board.checkWinner(state.currentPlayer, col, row)) {
            state.isRunning = false;
          } else {
            state.currentPlayer = 1 - state.currentPlayer;
          }
        }
      }
    });
  });
};


const init = () => {
  setListeners();
};

init();