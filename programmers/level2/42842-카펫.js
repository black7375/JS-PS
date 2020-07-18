function checkSize(x, y, brown) {
  const fullS   = (x + 2) * (y + 2);
  const yellowS = x * y;
  return (fullS - yellowS) === brown;
}

function solution(brown, yellow) {
  for(let x = yellow; x >= 1 ; x--) {
    if(yellow % x !== 0) continue;
    const y = yellow / x;

    if(checkSize(x, y, brown)) return [x + 2, y + 2];
  }
}
