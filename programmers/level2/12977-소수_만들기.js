function caseArr(nums) {
  const numsL  = nums.length;
  const result = [];

  for(let i = 0; i < numsL - 2; i++) {
    for(let j = i + 1; j < numsL - 1; j++) {
      for(let k = j + 1; k < numsL; k++) {
        const addV = nums[i] + nums[j] + nums[k];
        result.push(addV);
      }
    }
  }
  return result;
}

function primeSet(num) {
  const limit    = Math.sqrt(num);
  const primes = new Array(num + 1).fill(true);
  primes.splice(0, 2, false, false);

  for(let i = 2; i <= limit; i++) {
    if(primes[i]) {
      for(let j = i * i; j <= num; j += i) {
        primes[j] = false;
      }
    }
  }
  return primes;
}

function solution(nums) {
  const cases  = caseArr(nums);
  const primes = primeSet(Math.max(...cases));

  return cases.reduce((acc, addCase) => primes[addCase] ? acc + 1 : acc, 0);
}
