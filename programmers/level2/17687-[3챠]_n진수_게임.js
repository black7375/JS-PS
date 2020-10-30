function genStr(n, lastTurn) {
  let lastNum = 0;
  let str = "";
  while(str.length <= lastTurn) {
    str += lastNum.toString(n);
    lastNum++;
  }
  return str.toUpperCase();
}

function solution(n, t, m, p) {
  const lastTurn = (t - 1) * m + p;
  const str = genStr(n, lastTurn);

  let answer = "";
  for(let i = p - 1; i <= lastTurn; i += m) {
    answer += str[i];
  }
  return answer;
}
