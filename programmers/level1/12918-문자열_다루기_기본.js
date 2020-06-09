function solution(s) {
  const sLength = s.length;
  return (sLength === 4) || (sLength === 6)
       ? s.match(/\d/g).length === sLength
       : false;
}
