function solution(arr) {
  const answer = [];
  let temp = -1;

  arr.forEach((num) => {
    if(temp !== num) {
      answer.push(num);
      temp = num;
    }
  });

  return answer;
}
