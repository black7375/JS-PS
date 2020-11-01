// 주의: 재귀를 사용하면 꼬리재귀를 써도 콜스택이 터짐.
function getNextN(fibo) {
  return (fibo[0] + fibo[1]) % 1000000007;
}

function solution(n) {
  const fibo = [1, 1];

  if(n === 1) return fibo[1];
  for(let i = 2; i <= n; i++) {
    const next = getNextN(fibo);
    fibo[0] = fibo[1];
    fibo[1] = next;
  }
  return fibo[1];
}
