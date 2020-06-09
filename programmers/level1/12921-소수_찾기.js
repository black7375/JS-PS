function solution(n) {
  const limit = Math.sqrt(n);
  const prime = new Array(n + 1).fill(true);
  prime.splice(0, 2, false, false);

  for (let i = 2; i <= limit; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(check => check).length;
}
