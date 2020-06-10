function solution(n) {
  const sqrtN = Math.sqrt(n);
  return Number.isInteger(sqrtN)
       ? Math.pow(sqrtN + 1, 2)
       : -1;
}
