function generatePrime(n) {
  const limit = Math.sqrt(n);
  const prime = new Array(n + 1).fill(true);

  for(let i = 2; i <= limit; i++) {
    if (prime[i]) {
      for (let j = i * i; j <= n; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.map((check, index) => check ? index : undefined)
              .filter(check => check);
}

function addDivisor(divisor, i) {
  divisor[i] = divisor[i]
             ? divisor[i] + 1
             : 1;
}

function divideCheck(divisor, n, i) {
  if((n % i) === 0) {
    addDivisor(divisor, i);
    divideCheck(divisor, n / i, i);
  }
}

function powerSum(n, exponent) {
  return (n === 1)
       ? n
       : (Math.pow(n, exponent + 1) - 1) / (n - 1);
}

function solution(n) {
  if((n === 0) || (n === 1)) {
    return n;
  }

  const divisor = {1: 1};
  generatePrime(n).slice(1)
                  .forEach(prime => divideCheck(divisor, n, prime));
  console.log(divisor);

  return Object.keys(divisor)
               .map(n => parseInt(n))
               .reduce((acc, n) => acc * powerSum(n, divisor[n]), 1);
}
