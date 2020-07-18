function solution(numbers, target) {
  const numL = numbers.length;
  const size = 1 << numL;

  let answer = 0;
  for(let i = 0; i < size; i++) {
    let calcN = 0;
    for(let j = 0; j < numL; j++) {
      if(i & (1 << j)) calcN -= numbers[j];
      else             calcN += numbers[j];
    }
    if(calcN === target) answer++;
  }
  return answer;
}
