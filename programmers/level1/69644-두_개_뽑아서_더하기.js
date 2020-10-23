function solution(numbers) {
  const numbersL = numbers.length;
  const answer   = new Set();

  for(let firstI = 0; firstI <= numbersL; firstI++) {
    const first = numbers[firstI];

    for(let secondI = firstI + 1; secondI < numbersL; secondI++) {
      const second = numbers[secondI];
      answer.add(first + second);
    }
  }

  return [...answer].sort((a, b) => a - b);
}
