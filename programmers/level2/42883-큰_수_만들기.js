function getMaxI(digitA) {
  const digitAL = digitA.length;
  let max  = 0;
  let maxI = 0;
  for(let i = 0; i < digitAL; i++) {
    const num = digitA[i];
    if(num === '9') return i;

    if(max < num) {
      max  = num;
      maxI = i;
    }
  }
  return maxI;
}

function solution(number, k) {
  const numL = number.length;

  let answer = "";
  let start = 0;
  for(let end = k + 1; end <= numL; end++) {
    const digitA = number.slice(start, end);
    const digitI = getMaxI(digitA);
    const digitN = digitA[digitI];

    answer+= digitN;
    start += digitI + 1;
  }
  return answer;
}
