function solution(people, limit) {
  const sorted = people.sort((a, b) => a - b);

  let count = 0;
  while(sorted.length > 0) {
    const firstI = 0;
    const lastI  = sorted.length - 1;

    if(firstI === lastI) {
      sorted.pop();
    } else {
      if(limit >= sorted[firstI] + sorted[lastI]) {
        sorted.shift();
        sorted.pop();
      } else {
        sorted.pop();
      }
    }
    count++;
  }
  return count;
}
