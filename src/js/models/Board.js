export default class Board {
  constructor(height=6, width=7) {
    this.height = height;
    this.width = width;
    
    this.board = this.getEmptyBoard();
  }

  getEmptyBoard() {
    let boardAux = [];

    for (let i = 0; i < this.height; i++) {
      boardAux.push([]);
      for (let j = 0; j < this.width; j++) {
        boardAux[i].push(-1);
      }
    }

    return boardAux;
  }

  getLastEmptyRowNum(col) {
    let rowNum = -1;
    
    for (let i = 5; i >= 0; i--) {
      if (this.board[i][col] === -1) {
        rowNum = i;
        break;
      }
    }

    return rowNum;
  }

  makePlay(player, col, row) {
    if (row === -1) {
      return -1;
    }

    this.board[row][col] = player;
    return player;
  }

  checkWinner(player, col, row) {
    return (this.checkHorizontal(player, col, row)    ||
            this.checkVertical(player, col, row)      ||
            this.checkMainDiagonal(player, col, row)  ||
            this.checkAntiDiagonal(player, col, row));
  }

  checkHorizontal(player, col, row) {
    let total = 1;

    for (let i = col - 1; i >= 0; i--) {
      if (this.board[row][i] !== player) break;
      
      total++;
    }

    for (let i = col + 1; i < this.width; i++) {
      if (this.board[row][i] !== player) break;

      total++;
    }

    return (total >= 4);
  }

  checkVertical(player, col, row) {
    let total = 1;

    for (let i = row - 1; i >= 0; i--) {
      if (this.board[i][col] !== player) break;
      
      total++;
    }

    for (let i = row + 1; i < this.height; i++) {
      if (this.board[i][col] !== player) break;

      total++;
    }

    return (total >= 4);
  }

  checkMainDiagonal(player, col, row) {
    let total = 1;
    let colAux = col - 1, rowAux = row - 1;

    while (colAux >= 0 && rowAux >= 0) {
      if (this.board[rowAux][colAux] !== player) break;

      total++;
      colAux--;
      rowAux--;
    }

    colAux = col + 1;
    rowAux = row + 1;

    while (colAux < this.width && rowAux < this.height) {
      if (this.board[rowAux][colAux] !== player) break;

      total++;
      colAux++;
      rowAux++;
    }
    
    return (total >= 4);
  }

  checkAntiDiagonal(player, col, row) {
    let total = 1;
    let colAux = col - 1, rowAux = row + 1;

    while (colAux >= 0 && rowAux < this.height) {
      if (this.board[rowAux][colAux] !== player) break;

      total++;
      colAux--;
      rowAux++;
    }

    colAux = col + 1;
    rowAux = row - 1;

    while (colAux < this.width && rowAux >= 0) {
      if (this.board[rowAux][colAux] !== player) break;

      total++;
      colAux++;
      rowAux--;
    }
    
    return (total >= 4);
  }

}