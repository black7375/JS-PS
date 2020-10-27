function lastNum(n) {
  let last = 0;
  for(let i = 0; i <= n; i++) {
    const squared = (2 ** i);

    if(squared > n) return last;
    else last = squared;
  }
  return last;
}

function countRecur(n) {
  if(n === 0) return 0;

  const last   = lastNum(n);
  const differ = n - last;

  if(differ === 0) return 1;
  else return countRecur(differ) + 1;
}

function solution(n) {
  const odd   = (n % 2) === 1;
  const count = countRecur(odd ? n - 1 : n);
  return odd ? count + 1 : count;
}
