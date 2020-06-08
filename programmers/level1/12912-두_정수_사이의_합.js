function solution(a, b) {
  const sum       = a + b;
  const absDiffer = (Math.abs(b - a) + 1);
  return (sum * absDiffer) / 2;
}
