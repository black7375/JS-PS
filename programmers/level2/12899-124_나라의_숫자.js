function solution(n) {
  return n
       ? solution((n - (n % 3 || 3)) / 3) + (n % 3 || 4)
       : '';
}
