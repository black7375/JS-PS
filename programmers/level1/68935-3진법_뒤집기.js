function solution(n) {
  const base3  = n.toString(3);
  const base3R = base3.split('')
                      .reverse()
                      .join('');
  const answer = parseInt(base3R, 3);
  return answer;
}
