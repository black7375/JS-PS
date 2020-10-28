function solution(n) {
  return (n > 0)
       ? solution( n & ( n-1 ) ) + 1
       : 0;
}
