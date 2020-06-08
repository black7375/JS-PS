function checkBasket(basket, callback) {
  if(basket.length >= 2) {
    if(basket[basket.length - 1] === basket[basket.length - 2]) {
      basket.pop();
      basket.pop();
      callback();
    }
  }
}

function applyMove(board, move, basket) {
  for(let i = 0; i < board.length; i++) {
    const value = board[i][move];

    if(value !== 0) {
      basket.push(value);
      board[i][move] = 0;
      break;
    }
  }
}

function solution(board, moves) {
  let answer = 0;
  const _board = [...board];
  const basket = [];

  for(let i = 0; i < moves.length; i++) {
    const move = moves[i] - 1;
    applyMove(_board, move, basket);
    checkBasket(basket, () => {
      answer++;
    });
  }
  answer *= 2;
  return answer;
}
