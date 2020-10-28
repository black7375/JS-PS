function getLine(board, x, y) {
  return board[y].substr(x, 2);
}

function getCol(board, x) {
  return board.reduce((col, str) => {
    col.push(str[x]);
    return col;
  }, []);
}

function getNewRow(newBoard, y) {
  return newBoard.reduce((row, col) => row + col[y], "");
}

function replaceStr(str, x) {
  const EMPTYBLOCKS = '00';
  return str.substr(0, x) + EMPTYBLOCKS + str.substr(x + 2);
}

function replaceCol(col) {
  const EMPTYBLOCK = '0';
  const cleanCol   = col.filter(block => block !== EMPTYBLOCK);
  const emptyCount = col.length - cleanCol.length;
  const emptyArr   = new Array(emptyCount).fill(EMPTYBLOCK);

  return emptyArr.concat(cleanCol);
}

function updateBoard(m, n, board, removePos) {
  // Replace to Empty
  for(const [x, y] of removePos) {
    board[ y ] = replaceStr(board[ y ], x);
    board[y+1] = replaceStr(board[y+1], x);
  }

  // Move Block
  const newBoard = [];
  for(let x = 0; x < n; x++) {
    const col    = getCol(board, x);
    const newCol = replaceCol(col);
    newBoard.push(newCol);
  }
  for(let y = 0; y < m; y++) {
    const row = getNewRow(newBoard, y);
    board[y] = row;
  }
}

function friends4block(m, n, board) {
  const EMPTYBLOCK = '0';
  const colLimit   = n - 1;
  const rowLimit   = m - 1;

  // Remove Start Indexes
  const removePos = [];
  for(let x = 0; x < colLimit; x++) {
    for(let y = 0; y < rowLimit; y++) {
      const firstLine = getLine(board, x, y);
      if(firstLine.includes(EMPTYBLOCK)) continue;
      if(firstLine[0] === firstLine[1]) {
        const secondLine = getLine(board, x, y + 1);
        if(firstLine === secondLine) removePos.push([x, y]);
      }
    }
  }

  // Exit Check
  const removeSize = removePos.length;
  if(removeSize === 0) return;

  // Update && Recur
  updateBoard(m, n, board, removePos);
  friends4block(m, n, board);
}

function solution(m, n, board) {
  friends4block(m, n, board);
  return board.reduce((acc, row) => {
    const emptySize = row.split('').filter(char => char === '0').length;
    return acc + emptySize;
  }, 0);
}
