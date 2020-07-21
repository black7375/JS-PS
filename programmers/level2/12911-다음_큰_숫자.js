function get1Count(n) {
  const nS = n.toString(2);
  return nS.split('')
           .reduce((count, char) =>
             (char === '1') ? count + 1
             : count
                 , 0);
}

function solution(n) {
  const n1Count = get1Count(n);
  while(true) {
    const nCount = get1Count(++n);
    if(n1Count === nCount) return n;
  }
}
