export default class Board {
  constructor(height=6, width=7) {
    this.height = height;
    this.width = width;
    
    this.board = this.getEmptyBoard();
    console.log(this.board);
  }

  getEmptyBoard() {
    let boardAux = [];

    for (let i = 0; i < this.height; i++) {
      boardAux.push([]);
      for (let j = 0; j < this.width; j++) {
        boardAux[i].push(0);
      }
    }

    return boardAux;
  }

  getLastEmptyRowNum(col) {
    let rowNum = -1;
    
    for (let i = 5; i >= 0; i--) {
      if (!this.board[i][col]) {
        rowNum = i;
        break;
      }
    }

    return rowNum;
  };
}