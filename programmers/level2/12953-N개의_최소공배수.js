function primeSet(n) {
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

  return prime.reduce((acc, check, index) => {
    if(check) acc.push(index);
    return acc;
  }, []);
}

function countExponent(num, prime) {
  let count = 0;
  for(let i = prime; i <= num; i *= prime) {
    if((num % i) !== 0) break;
    else count++;
  }
  return count;
}

function factorization(num, primeArr) {
  if(num === 1) return {1: 1};

  const result = {};
  for(const prime of primeArr) {
    if(prime > num) break;
    else {
      const count = countExponent(num, prime);
      if(count > 0) result[prime] = count;
    };
  }
  return result;
}

function mergeResult(...results) {
  return results.reduce((acc, result) => {
    const keys = Object.keys(result);
    for(const key of keys) {
      if(!(key in acc)) acc[key] = result[key];
      else acc[key] = acc[key] > result[key] ? acc[key] : result[key];
    }
    return acc;
  }, {});
}

function getCommonMultiple(obj) {
  return Object.entries(obj).reduce((acc, result) => {
    const [num, count] = result;
    const calculated   = parseInt(num) ** count;
    return acc * calculated;
  }, 1);
}

function solution(arr) {
  const maxN       = Math.max(...arr);
  const primeArr   = primeSet(maxN);
  const factoriArr = arr.map(num => factorization(num, primeArr));

  return  getCommonMultiple( mergeResult(...factoriArr) );
}
