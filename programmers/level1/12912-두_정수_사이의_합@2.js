function factMiddle(start, end, acc) {
  let result = 0;
  for(let i = start; i <= end; i++) {
    result += i;
  }
  return result;
}

function solution(a, b) {
  const [min, max] = [a, b].sort((a, b) => a - b);
  return factMiddle(min, max);
}
