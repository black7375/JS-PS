function solution(x) {
  const digitSum = Array.from(String(x), Number)
                        .reduce((a, b) => a + b);
  return !Boolean(x % digitSum);
}
