function solution(s) {
  const middle = s.length / 2;

  return Number.isInteger(middle)
       ? s.slice(middle - 1, middle + 1)
       : s[Math.floor(middle)];
}
