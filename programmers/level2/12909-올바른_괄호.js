function solution(s){
  const sL = s.length;
  let count = 0;
  for(let i = 0; i < sL; i++) {
    const char = s[i];
    if(char === '(') count++;
    else             count--;

    if(count < 0) return false;
  }

  return count === 0;
}
