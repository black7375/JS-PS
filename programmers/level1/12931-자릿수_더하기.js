function solution(num) {
  return Array.from(String(num), Number)
              .reduce((a, b) => a + b);
}
