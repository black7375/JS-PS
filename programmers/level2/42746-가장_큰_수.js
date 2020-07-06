function solution(nums) {
  const answer = nums.sort((a,b) => {
    const sA = String(a);
    const sB = String(b);
    return (sB + sA) - (sA + sB);
  })
                     .join('');

  return answer[0] === '0'
       ? '0'
       : answer;
}
