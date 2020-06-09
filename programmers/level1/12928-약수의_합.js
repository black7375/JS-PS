function divideCheck(divisor, n, i) {
  if((n % i) === 0) {
    divisor.add(i);

    const divided = (n / i);
    divisor.add(divided);
    divideCheck(divisor, divided, i);
  }
}

function solution(n) {
  if((n === 0) || (n === 1)) {
    return n;
  }

  const limit = Math.sqrt(n);
  const divisor = new Set([1, n]);

  for(let i = 2; i <= limit; i++) {
    divideCheck(divisor, n, i);
  }

  return [...divisor].reduce((acc, n) => acc + n);
}
